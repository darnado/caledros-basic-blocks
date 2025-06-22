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

export default function FontWeightSettings({
  attributes,
  setAttributes,
  getAvailableFontWeights,
}) {
  const { menuFontFamily, menuFontWeight, menuFontStyle } = attributes;

  // Default font weights
  const defaultFontWeights = [
    { label: "100", value: 100 },
    { label: "200", value: 200 },
    { label: "300", value: 300 },
    { label: "400", value: 400 },
    { label: "500", value: 500 },
    { label: "600", value: 600 },
    { label: "700", value: 700 },
    { label: "800", value: 800 },
    { label: "900", value: 900 },
  ];

  // Define the font weight options for the controller
  const fontWeightOptions = getAvailableFontWeights(
    menuFontFamily,
    menuFontStyle
  )?.map((weightValue) => {
    return { label: `${weightValue}`, value: weightValue };
  });

  return (
    <SelectControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      help={__("Select the font weight.", "caledros-basic-blocks")}
      value={menuFontWeight}
      options={fontWeightOptions || defaultFontWeights}
      onChange={(newValue) => {
        setAttributes({
          menuFontWeight: parseInt(newValue),
        });
      }}
    />
  );
}
