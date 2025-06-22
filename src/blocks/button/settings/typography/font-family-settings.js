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

export default function FontFamilySettings({
  attributes,
  setAttributes,
  registeredFonts,
  getAvailableFontStyles,
  getAvailableFontWeights,
  doesFontExist,
}) {
  const { buttonFontFamily, buttonFontWeight, buttonFontStyle } = attributes;

  // Recover theme fonts and custom fonts
  const themeFonts =
    registeredFonts?.theme?.map((font) => {
      return { label: font.name, value: font.slug };
    }) || [];

  const customFonts =
    registeredFonts?.custom?.map((font) => {
      return { label: font?.name, value: font?.slug };
    }) || [];

  const fontOptions = [
    { label: "Default", value: "" },
    ...(themeFonts.length !== 0 ? themeFonts : []),
    ...(customFonts && customFonts?.length !== 0 ? customFonts : []),
  ];

  return (
    <SelectControl
      __nextHasNoMarginBottom
      help={__("Select the font family.", "caledros-basic-blocks")}
      value={buttonFontFamily}
      options={fontOptions}
      onChange={(newFontFamily) => {
        // Compute available font styles for the new font family and update if necessary
        const availableFontStyles = doesFontExist(newFontFamily)
          ? getAvailableFontStyles(newFontFamily)
          : [];

        const newFontStyle = availableFontStyles.includes(buttonFontStyle)
          ? buttonFontStyle
          : availableFontStyles[0];

        // Compute available font weights for the new font family and update if necessary
        const availableFontWeights = doesFontExist(newFontFamily)
          ? getAvailableFontWeights(newFontFamily, newFontStyle)
          : [];

        const newFontWeight = availableFontWeights.includes(buttonFontWeight)
          ? buttonFontWeight
          : availableFontWeights[0];

        setAttributes({
          buttonFontFamily: newFontFamily,
          ...(doesFontExist(newFontFamily) &&
            newFontStyle !== buttonFontStyle && {
              buttonFontStyle: newFontStyle,
            }),
          ...(doesFontExist(newFontFamily) &&
            newFontWeight !== buttonFontWeight && {
              buttonFontWeight: newFontWeight,
            }),
        });
      }}
    />
  );
}
