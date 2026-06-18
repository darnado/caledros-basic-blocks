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

import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function ShowAuthorSettings({ attributes, setAttributes }) {
	const { showAuthor, authorFilter } = attributes;

	return (
		<PanelBody
			title={__('Author options', 'caledros-basic-blocks')}
			initialOpen={false}
		>
			<ToggleControl
				__nextHasNoMarginBottom
				label={__('Show author', 'caledros-basic-blocks')}
				help={__(
					"Display the name of the post's author.",
					'caledros-basic-blocks'
				)}
				checked={showAuthor}
				onChange={(newValue) => {
					setAttributes({
						showAuthor: newValue,
					});
				}}
			/>
			{showAuthor && (
				<ToggleControl
					__nextHasNoMarginBottom
					label={__(
						"Enable author's page link",
						'caledros-basic-blocks'
					)}
					help={__(
						"Turn the name of the post's author into a link to the author's page.",
						'caledros-basic-blocks'
					)}
					checked={authorFilter.enableAuthorLink}
					onChange={(newValue) => {
						setAttributes({
							authorFilter: {
								...authorFilter,
								enableAuthorLink: newValue,
							},
						});
					}}
				/>
			)}
		</PanelBody>
	);
}
