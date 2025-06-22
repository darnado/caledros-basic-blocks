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

import { SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function FontStyleSettings({
  attributes,
  setAttributes,
  getAvailableFontStyles,
  getAvailableFontWeights,
  doesFontExist,
}) {
  const { menuFontFamily, menuFontStyle, menuFontWeight } = attributes;

  // Default font styles
  const defaultFontStyles = [
    { label: "Normal", value: "normal" },
    { label: "Italic", value: "italic" },
  ];

  // Create options array for the controller
  const fontStyleOptions = getAvailableFontStyles(menuFontFamily)?.map(
    (styleValue) => {
      return {
        label: `${styleValue[0].toUpperCase()}${styleValue.slice(1)}`,
        value: `${styleValue}`,
      };
    }
  );

  return (
    <SelectControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      help={__("Select the font style.", "caledros-basic-blocks")}
      value={menuFontStyle}
      options={
        fontStyleOptions.length === 0 ? defaultFontStyles : fontStyleOptions
      }
      onChange={(newFontStyle) => {
        const availableFontWeights = doesFontExist(menuFontFamily)
          ? getAvailableFontWeights(menuFontFamily, newFontStyle)
          : [];

        const newFontWeight = availableFontWeights.includes(menuFontWeight)
          ? menuFontWeight
          : availableFontWeights[0];

        setAttributes({
          menuFontStyle: newFontStyle,
          ...(doesFontExist(menuFontFamily) &&
            menuFontWeight !== newFontWeight && {
              menuFontWeight: newFontWeight,
            }),
        });
      }}
    />
  );
}
