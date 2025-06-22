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

import { PanelBody, ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSettings } from "@wordpress/block-editor";
import { select } from "@wordpress/data";
import { useState } from "@wordpress/element";

export default function BorderLightColorSettings({
  attributes,
  setAttributes,
}) {
  const { containerBorder } = attributes;

  const borderArray = containerBorder.lightColor.split(" ");
  const topBorderColor = borderArray[0] || "#000";
  const rightBorderColor = borderArray[1] || "#000";
  const bottomBorderColor = borderArray[2] || "#000";
  const leftBorderColor = borderArray[3] || "#000";

  const [useDifferentBorderColors, setUseDifferentBorderColors] = useState(
    containerBorder.lightColor.includes(" ") ? true : false
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
      title={__("Border color (light mode)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use different border colors for each side"
        checked={useDifferentBorderColors}
        onChange={() => {
          const enableDifferentColors = !useDifferentBorderColors;
          setUseDifferentBorderColors(enableDifferentColors);

          if (enableDifferentColors) {
            setAttributes({
              containerBorder: {
                ...containerBorder,
                lightColor: "#000 #000 #000 #000",
              },
            });
          } else {
            setAttributes({
              containerBorder: { ...containerBorder, lightColor: "#000" },
            });
          }
        }}
      />
      {!useDifferentBorderColors && (
        <>
          <label className="cbb-editor-label">
            {__("Choose the border color", "caledros-basic-blocks")}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptionse}
            value={containerBorder.lightColor}
            onChange={(newColor) =>
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  lightColor: newColor || "#00000000",
                },
              })
            }
            enableAlpha={true}
            clearable={true}
          />
        </>
      )}

      {useDifferentBorderColors && (
        <>
          <label className="cbb-editor-label">
            {__("Choose a color for the top border", "caledros-basic-blocks")}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={topBorderColor}
            onChange={(newColor) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  lightColor: `${
                    newColor || "#00000000"
                  } ${rightBorderColor} ${bottomBorderColor} ${leftBorderColor}`,
                },
              });
            }}
            enableAlpha={true}
            clearable={true}
          />
          <label className="cbb-editor-label">
            {__("Choose a color for the right border", "caledros-basic-blocks")}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={rightBorderColor}
            onChange={(newColor) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  lightColor: `${topBorderColor} ${
                    newColor || "#00000000"
                  } ${bottomBorderColor} ${leftBorderColor}`,
                },
              });
            }}
            enableAlpha={true}
            clearable={true}
          />
          <label className="cbb-editor-label">
            {__(
              "Choose a color for the bottom border",
              "caledros-basic-blocks"
            )}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={bottomBorderColor}
            onChange={(newColor) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  lightColor: `${topBorderColor} ${rightBorderColor} ${
                    newColor || "#00000000"
                  } ${leftBorderColor}`,
                },
              });
            }}
            enableAlpha={true}
            clearable={true}
          />
          <label className="cbb-editor-label">
            {__("Choose a color for the left border", "caledros-basic-blocks")}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={leftBorderColor}
            onChange={(newColor) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  lightColor: `${topBorderColor} ${rightBorderColor} ${bottomBorderColor} ${
                    newColor || "#00000000"
                  }`,
                },
              });
            }}
            enableAlpha={true}
            clearable={true}
          />
        </>
      )}
    </PanelBody>
  );
}
