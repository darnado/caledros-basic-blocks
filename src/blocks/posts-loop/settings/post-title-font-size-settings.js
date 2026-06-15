/*
 * Caledros Basic Blocks - Easy to use Gutenberg blocks
 * Copyright (C) 2025-2026  David Arnado
 * 
 * This file is part of Caledros Basic Blocks.
 * 
 * Caledros Basic Blocks is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.

 * Caledros Basic Blocks is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License along
 * with Caledros Basic Blocks; if not, see <https://www.gnu.org/licenses/>.
 */

import {
	RangeControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useSettings } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

export default function PostTitleFontSizeSettings( {
	attributes,
	setAttributes,
} ) {
	const { postTitleFontSize } = attributes;
	const [ themeJsonFontSizes, defaultFontSizesEnabled ] = useSettings(
		'typography.fontSizes',
		'typography.defaultFontSizes'
	);

	// Define fallback font size options
	const fallbackFontSizeOptions = themeJsonFontSizes?.map(
		( registeredFontSize ) => {
			return {
				label: `${ registeredFontSize.name } (${ registeredFontSize.size })`,
				value: `var(--wp--preset--font-size--${ registeredFontSize.slug })`,
			};
		}
	);

	// Get available font sizes present in the Full Site Editor
	const editorFontSizes =
		select( 'core/editor' )?.getEditorSettings()?.__experimentalFeatures
			?.typography?.fontSizes;

	// Function to get the font sizes
	const createFontSizeOptions = ( editorFontSizesP, fontSizeListType ) => {
		return editorFontSizesP?.[ fontSizeListType ]?.map( ( fontSize ) => {
			return {
				label: `${ fontSize.name } (${ fontSize.size })`,
				value: `var(--wp--preset--font-size--${ fontSize.slug })`,
			};
		} );
	};

	// Available font sizes
	const defaultFontSizes = createFontSizeOptions(
		editorFontSizes,
		'default'
	);
	const themeFontSizes = createFontSizeOptions( editorFontSizes, 'theme' );
	const customFontSizes = createFontSizeOptions( editorFontSizes, 'custom' );

	// Define font size options for the controller
	const fontSizeOptions = [
		...( defaultFontSizesEnabled ? [ defaultFontSizes ] : [] ),
		themeFontSizes,
		...( customFontSizes && customFontSizes?.length !== 0
			? [ customFontSizes ]
			: [] ),
	].flat();

	// Recover font size presets
	const registeredFontPresets = () => {
		if ( editorFontSizes ) {
			const defaultFontPresets =
				defaultFontSizes?.map( ( registeredFontSize ) => {
					return registeredFontSize.value;
				} ) || [];
			const themeFontPresets =
				themeFontSizes?.map( ( registeredFontSize ) => {
					return registeredFontSize.value;
				} ) || [];
			const customFontPresets =
				customFontSizes?.map( ( registeredFontSize ) => {
					return registeredFontSize.value;
				} ) || [];
			return [
				...defaultFontPresets,
				...themeFontPresets,
				...customFontPresets,
			];
		}
		return themeJsonFontSizes?.map( ( registeredFontSize ) => {
			return registeredFontSize.value;
		} );
	};

	// Recover the unit used in the font size
	const unit = postTitleFontSize.replace( /[\d.]+/g, '' ) || 'px';
	const fontSizeUnit = [ 'px', 'em', 'rem', 'vw', 'vh' ].includes( unit )
		? unit
		: 'px';

	// Recover the numeric value of the font size
	const fontSizeNumber = ( unitP ) => {
		if ( unitP === 'px' ) {
			return parseInt( postTitleFontSize ) || 0;
		}
		return parseFloat( postTitleFontSize ) || 0;
	};

	// Restrict maximum value for vw and vh units
	const enforceMaxValue = ( newUnit, valueNumber ) => {
		if ( [ 'vw', 'vh' ].includes( newUnit ) && valueNumber > 100 ) {
			return 100;
		}
		return valueNumber;
	};

	// Update state for custom font size
	const [ useCustomFontSize, setUseCustomFontSize ] = useState(
		registeredFontPresets().includes( postTitleFontSize ) ? false : true
	);

	return (
		<PanelBody
			title={ __( 'Post Title Font size', 'caledros-basic-blocks' ) }
			initialOpen={ false }
		>
			<ToggleControl
				__nextHasNoMarginBottom
				label="Use custom font size"
				checked={ useCustomFontSize }
				onChange={ () =>
					setUseCustomFontSize(
						( oldUseCustomFontSize ) => ! oldUseCustomFontSize
					)
				}
			/>
			{ ! useCustomFontSize && (
				<SelectControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					help={ __(
						'Select the font size.',
						'caledros-basic-blocks'
					) }
					value={
						registeredFontPresets().includes( postTitleFontSize )
							? postTitleFontSize
							: ''
					}
					options={ [
						{
							disabled: true,
							label: 'Select an option',
							value: '',
						},
						...( editorFontSizes
							? fontSizeOptions
							: fallbackFontSizeOptions ),
					] }
					onChange={ ( newFontSize ) => {
						setAttributes( { postTitleFontSize: newFontSize } );
					} }
				/>
			) }
			{ useCustomFontSize && (
				<div className="cbb-editor__grid">
					<RangeControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						help={ sprintf(
							/**
							 * translators: %s font size unit
							 */
							__(
								'Please select the custom font size (%s).',
								'caledros-basic-blocks'
							),
							fontSizeUnit
						) }
						value={
							registeredFontPresets().includes(
								postTitleFontSize
							)
								? 0
								: parseFloat( postTitleFontSize )
						}
						max={
							fontSizeUnit === 'vw' || fontSizeUnit === 'vh'
								? 100
								: 200
						}
						min={ 0 }
						step={ fontSizeUnit === 'px' ? 1 : 0.01 }
						onChange={ ( newFontSize ) => {
							setAttributes( {
								postTitleFontSize: `${ enforceMaxValue(
									fontSizeUnit,
									newFontSize
								) }${ fontSizeUnit }`,
							} );
						} }
					/>
					<SelectControl
						__next40pxDefaultSize
						__nextHasNoMarginBottom
						value={ fontSizeUnit }
						options={ [
							{
								label: 'px',
								value: 'px',
							},
							{
								label: 'em',
								value: 'em',
							},
							{
								label: 'rem',
								value: 'rem',
							},
							{
								label: 'vw',
								value: 'vw',
							},
							{
								label: 'vh',
								value: 'vh',
							},
						] }
						onChange={ ( newUnit ) => {
							setAttributes( {
								postTitleFontSize: `${ enforceMaxValue(
									newUnit,
									fontSizeNumber( newUnit )
								) }${ newUnit }`,
							} );
						} }
					/>
				</div>
			) }
		</PanelBody>
	);
}
