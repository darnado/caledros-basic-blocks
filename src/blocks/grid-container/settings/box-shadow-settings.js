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

import {
  PanelBody,
  RangeControl,
  ToggleControl,
  ColorPalette,
  SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSettings } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

export default function BoxShadowSettings({ attributes, setAttributes }) {
  const { containerBoxShadow } = attributes;

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
      title={__("Box shadow", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable box shadow", "caledros-basic-blocks")}
        checked={containerBoxShadow.enabled}
        onChange={(newValue) => {
          setAttributes({
            containerBoxShadow: { ...containerBoxShadow, enabled: newValue },
          });
        }}
      />
      {containerBoxShadow.enabled && (
        <>
          <SelectControl
            __nextHasNoMarginBottom
            help={__(
              "Choose the style for the box shadow.",
              "caledros-basic-blocks"
            )}
            value={containerBoxShadow.style === "" ? "outline" : "inset"}
            options={[
              {
                label: "Outline",
                value: "outline",
              },
              {
                label: "Inset",
                value: "inset",
              },
            ]}
            onChange={(newValue) => {
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  style: `${newValue === "outline" ? "" : newValue}`,
                },
              });
            }}
          />
          <RangeControl
            __nextHasNoMarginBottom
            help={__(
              "Please select the horizontal offset (px).",
              "caledros-basic-blocks"
            )}
            value={parseInt(containerBoxShadow.hOffset)}
            max={100}
            min={-100}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  hOffset: `${newValue}px`,
                },
              })
            }
          />
          <RangeControl
            __nextHasNoMarginBottom
            help={__(
              "Please select the vertical offset (px).",
              "caledros-basic-blocks"
            )}
            value={parseInt(containerBoxShadow.vOffset)}
            max={100}
            min={-100}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  vOffset: `${newValue}px`,
                },
              })
            }
          />
          <RangeControl
            __nextHasNoMarginBottom
            help={__("Please select the blur (px).", "caledros-basic-blocks")}
            value={parseInt(containerBoxShadow.blur)}
            max={100}
            min={0}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  blur: `${newValue}px`,
                },
              })
            }
          />
          <RangeControl
            __nextHasNoMarginBottom
            help={__("Please select the spread (px).", "caledros-basic-blocks")}
            value={parseInt(containerBoxShadow.spread)}
            max={100}
            min={-100}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  spread: `${newValue}px`,
                },
              })
            }
          />
          <label className="cbb-editor-label">
            {__(
              "Choose a color for the box shadow (light mode)",
              "caledros-basic-blocks"
            )}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={containerBoxShadow.lightColor}
            onChange={(newColor) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  lightColor: newColor || "#00000000",
                },
              })
            }
            enableAlpha={true}
            clearable={true}
          />
          <label className="cbb-editor-label">
            {__(
              "Choose a color for the box shadow (dark mode)",
              "caledros-basic-blocks"
            )}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={containerBoxShadow.darkColor}
            onChange={(newColor) =>
              setAttributes({
                containerBoxShadow: {
                  ...containerBoxShadow,
                  darkColor: newColor || "#00000000",
                },
              })
            }
            enableAlpha={true}
            clearable={true}
          />
        </>
      )}
    </PanelBody>
  );
}
