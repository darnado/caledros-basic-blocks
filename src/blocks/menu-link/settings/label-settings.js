/*
 * Caledros Basic Blocks - Easy to use Gutenberg blocks
 * Copyright (C) 2025  David Arnado
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

import { PanelBody, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function LabelSettings({ attributes, setAttributes }) {
  const { menuLabel } = attributes;

  return (
    <PanelBody title={__("Label", "caledros-basic-blocks")} initialOpen={false}>
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__("Type the label for the menu link.", "caledros-basic-blocks")}
        value={menuLabel}
        onChange={(newValue) => {
          setAttributes({
            menuLabel: newValue,
          });
        }}
      />
    </PanelBody>
  );
}
