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

import { PanelBody, ColorPalette, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useSettings } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

export default function ButtonLightColorHoverSettings({
  attributes,
  setAttributes,
}) {
  const { buttonHoverLightColor } = attributes;
  const [useTransparentBackground, setUseTransparentBackground] = useState(
    buttonHoverLightColor === "#00000000" ? true : false
  );

  const [themeJsonPalette, defaultPalette] = useSettings(
    "color.palette",
    "color.defaultPalette"
  );

  // Define fallback color options
  const fallbackColorOptions = themeJsonPalette.map((registeredColor) => {
    return {
      color: `var(--wp--preset--color--${registeredColor.slug})`,
      name: registeredColor.name,
    };
  });

  // Get available color palettes present in the Full Site Editor
  const editorSettings = select("core/editor")?.getEditorSettings();
  const editorPalette = editorSettings?.__experimentalFeatures?.color?.palette;

  // Function to get the color palettes
  const createColorOptions = (editorPalette, paletteType) => {
    return {
      colors: editorPalette?.[paletteType]?.map((palette) => {
        return {
          color: `var(--wp--preset--color--${palette.slug})`,
          name: palette.name,
        };
      }),
      name: `${paletteType}`,
    };
  };

  // Available color palettes
  const defaultColors = createColorOptions(editorPalette, "default");
  const themeColors = createColorOptions(editorPalette, "theme");
  const customColors = createColorOptions(editorPalette, "custom");

  // Define color options for the controller
  const colorOptions = [
    ...(defaultPalette ? [defaultColors] : []),
    themeColors,
    ...(customColors.colors ? [customColors] : []),
  ];

  return (
    <PanelBody
      title={__("Hover bg color (light mode)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use transparent background"
        checked={useTransparentBackground}
        onChange={() => {
          setUseTransparentBackground((oldValue) => !oldValue);
          setAttributes({ buttonHoverLightColor: "#00000000" });
        }}
      />
      {!useTransparentBackground && (
        <ColorPalette
          colors={editorPalette ? colorOptions : fallbackColorOptions}
          value={buttonHoverLightColor}
          onChange={(newColor) =>
            setAttributes({ buttonHoverLightColor: newColor })
          }
          enableAlpha={true}
          clearable={false}
        />
      )}
    </PanelBody>
  );
}
