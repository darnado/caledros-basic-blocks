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

import { PanelBody } from '@wordpress/components';
import { useSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import PostTitleFontFamilySettings from './post-title-font-family-settings';
import PostTitleFontWeightSettings from './post-title-font-weight-settings';
import PostTitleFontStyleSettings from './post-title-font-style-settings';

export default function PostTitleTypographyGroupSettings( {
	attributes,
	setAttributes,
} ) {
	const [ registeredFonts ] = useSettings( 'typography.fontFamilies' );
	const { theme = [], custom = [] } = registeredFonts || {};
	const allFonts = [ ...theme, ...custom ];

	const doesFontExist = ( fontFamily ) => {
		return allFonts.some( ( font ) => font?.slug === fontFamily );
	};

	const getAvailableFontStyles = ( fontFamily ) => {
		const fontFamilyData = allFonts.find(
			( font ) => font?.slug === fontFamily
		);
		const fontStyles =
			fontFamilyData?.fontFace?.map(
				( fontFace ) => fontFace?.fontStyle
			) || [];

		return [ ...new Set( fontStyles ) ];
	};

	const getAvailableFontWeights = ( fontFamily, fontStyle ) => {
		const fontFamilyData = allFonts.find(
			( font ) => font?.slug === fontFamily
		);
		const fontStyles = fontFamilyData?.fontFace?.filter( ( fontFace ) => {
			return fontFace?.fontStyle === fontStyle;
		} );
		const fontWeights = fontStyles
			?.map( ( fontStyleEl ) => {
				if ( fontStyleEl?.fontWeight?.includes( ' ' ) ) {
					const [ start, end ] = fontStyleEl?.fontWeight
						.split( ' ' )
						.map( ( value ) => parseInt( value ) );
					const range = [];
					for ( let i = start; i <= end; i += 100 ) {
						range.push( i );
					}
					return range;
				}
				return parseInt( fontStyleEl?.fontWeight );
			} )
			.flat()
			.sort( ( a, b ) => a - b );

		return fontWeights;
	};

	return (
		<PanelBody
			title={ __( 'Post Title Typography', 'caledros-basic-blocks' ) }
			initialOpen={ false }
		>
			<PostTitleFontFamilySettings
				attributes={ attributes }
				setAttributes={ setAttributes }
				registeredFonts={ registeredFonts }
				getAvailableFontStyles={ getAvailableFontStyles }
				getAvailableFontWeights={ getAvailableFontWeights }
				doesFontExist={ doesFontExist }
			></PostTitleFontFamilySettings>
			<PostTitleFontStyleSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
				getAvailableFontStyles={ getAvailableFontStyles }
				getAvailableFontWeights={ getAvailableFontWeights }
				doesFontExist={ doesFontExist }
			></PostTitleFontStyleSettings>
			<PostTitleFontWeightSettings
				attributes={ attributes }
				setAttributes={ setAttributes }
				getAvailableFontWeights={ getAvailableFontWeights }
			></PostTitleFontWeightSettings>
		</PanelBody>
	);
}
