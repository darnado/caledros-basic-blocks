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
  SelectControl,
  RangeControl,
  ColorPalette,
  AnglePickerControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useSettings } from "@wordpress/block-editor";
import { select } from "@wordpress/data";

export default function FilterSettings({ attributes, setAttributes }) {
  const { imgFilter } = attributes;

  // Recover the numeric value of the image filter
  const filterNumber = parseInt(imgFilter.content) || 0;

  // Function for setting a valid unit for each type of filter
  const setValidUnit = (filterType) => {
    switch (true) {
      case filterType === "blur":
        return "px";
      case filterType === "hue-rotate":
        return "deg";
      case [
        "brightness",
        "contrast",
        "grayscale",
        "invert",
        "opacity",
        "saturate",
        "sepia",
      ].includes(filterType):
        return "%";
      default:
        return "";
    }
  };

  // Function for setting a maximum value for each type of filter
  const setMaxValue = (filterType, numericValue) => {
    switch (true) {
      case [
        "blur",
        "grayscale",
        "invert",
        "opacity",
        "saturate",
        "sepia",
      ].includes(filterType) && numericValue > 100:
        return 100;
      case ["brightness", "contrast"].includes(filterType) &&
        numericValue > 200:
        return 200;
      default:
        return numericValue;
    }
  };

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
      title={__("Filter", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __nextHasNoMarginBottom
        help={__("Choose the filter type.", "caledros-basic-blocks")}
        value={imgFilter.type}
        options={[
          {
            label: "None",
            value: "none",
          },
          {
            label: "Blur",
            value: "blur",
          },
          {
            label: "Brightness",
            value: "brightness",
          },
          {
            label: "Contrast",
            value: "contrast",
          },
          {
            label: "Drop shadow",
            value: "drop-shadow",
          },
          {
            label: "Grayscale",
            value: "grayscale",
          },
          {
            label: "Hue rotate",
            value: "hue-rotate",
          },
          {
            label: "Invert",
            value: "invert",
          },
          {
            label: "Opacity",
            value: "opacity",
          },
          {
            label: "Saturate",
            value: "saturate",
          },
          {
            label: "Sepia",
            value: "sepia",
          },
        ]}
        onChange={(newValue) => {
          setAttributes({
            imgFilter: {
              ...imgFilter,
              type: newValue,
              content: `${setMaxValue(newValue, filterNumber)}${setValidUnit(
                newValue
              )}`,
            },
          });
        }}
      />
      {imgFilter.type === "blur" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the blur value (px).", "caledros-basic-blocks")}
          value={filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}px`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "brightness" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the brightness value (%).", "caledros-basic-blocks")}
          value={filterNumber}
          max={200}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "contrast" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the contrast value (%).", "caledros-basic-blocks")}
          value={filterNumber}
          max={200}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "drop-shadow" && (
        <>
          <RangeControl
            __nextHasNoMarginBottom
            help={__(
              "Please select the horizontal offset (px).",
              "caledros-basic-blocks"
            )}
            value={parseInt(imgFilter.hOffset)}
            max={100}
            min={-100}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                imgFilter: {
                  ...imgFilter,
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
            value={parseInt(imgFilter.vOffset)}
            max={100}
            min={-100}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                imgFilter: {
                  ...imgFilter,
                  vOffset: `${newValue}px`,
                },
              })
            }
          />
          <RangeControl
            __nextHasNoMarginBottom
            help={__("Please select the blur (px).", "caledros-basic-blocks")}
            value={parseInt(imgFilter.blur)}
            max={100}
            min={0}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                imgFilter: {
                  ...imgFilter,
                  blur: `${newValue}px`,
                },
              })
            }
          />
          <label className="cbb-editor-label">
            {__("Choose a color for the drop shadow", "caledros-basic-blocks")}
          </label>
          <ColorPalette
            colors={editorPalette ? colorOptions : fallbackColorOptions}
            value={imgFilter.color}
            onChange={(newColor) =>
              setAttributes({
                imgFilter: {
                  ...imgFilter,
                  color: newColor || "#00000000",
                },
              })
            }
            enableAlpha={true}
            clearable={true}
          />
        </>
      )}
      {imgFilter.type === "grayscale" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the grayscale value (%).", "caledros-basic-blocks")}
          value={filterNumber > 100 ? 100 : filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "hue-rotate" && (
        <AnglePickerControl
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue}deg`,
              },
            })
          }
          value={filterNumber}
          label={__("Hue-rotate value (deg)", "caledros-basic-blocks")}
        />
      )}
      {imgFilter.type === "invert" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the invert value (%).", "caledros-basic-blocks")}
          value={filterNumber > 100 ? 100 : filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "opacity" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the opacity value (%).", "caledros-basic-blocks")}
          value={filterNumber > 100 ? 100 : filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "saturate" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__("Choose the saturation value (%).", "caledros-basic-blocks")}
          value={filterNumber > 100 ? 100 : filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}%`,
              },
            })
          }
        />
      )}
      {imgFilter.type === "sepia" && (
        <RangeControl
          __nextHasNoMarginBottom
          help={__(
            "Choose the sepia filter value (%).",
            "caledros-basic-blocks"
          )}
          value={filterNumber > 100 ? 100 : filterNumber}
          max={100}
          min={0}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              imgFilter: {
                ...imgFilter,
                content: `${newValue > 100 ? 100 : newValue}%`,
              },
            })
          }
        />
      )}
    </PanelBody>
  );
}
