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
  ToggleControl,
  RangeControl,
  SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function WidthSettings({ attributes, setAttributes }) {
  const { imgWidth, sourceImage } = attributes;

  // Recover the unit used in the width
  const unit = imgWidth.content.replace(/\d+/g, "") || "px";
  const widthUnit = ["px", "%", "em", "rem", "vw"].includes(unit) ? unit : "px";

  // Recover the numeric value of the width
  const widthNumber = parseInt(imgWidth.content) || 0;

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (["%", "vw"].includes(newUnit) && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Max width", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__(
          `Use actual width (${sourceImage.width}px)`,
          "caledros-basic-blocks"
        )}
        checked={imgWidth.defaultWidthEnabled}
        onChange={(newValue) => {
          setAttributes({
            imgWidth: {
              content: `${sourceImage.width}px`,
              defaultWidthEnabled: newValue,
            },
          });
        }}
      />
      {!imgWidth.defaultWidthEnabled && (
        <div className="cbb-editor__grid">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              `Choose the width (${widthUnit}) for the image.`,
              "caledros-basic-blocks"
            )}
            value={parseInt(imgWidth.content)}
            max={widthUnit === "%" || widthUnit === "vw" ? 100 : 2000}
            min={0}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                imgWidth: { ...imgWidth, content: `${newValue}${widthUnit}` },
              })
            }
          />
          <SelectControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            value={widthUnit}
            options={[
              {
                label: "px",
                value: "px",
              },
              {
                label: "%",
                value: "%",
              },
              {
                label: "em",
                value: "em",
              },
              {
                label: "rem",
                value: "rem",
              },
              {
                label: "vw",
                value: "vw",
              },
            ]}
            onChange={(newUnit) => {
              setAttributes({
                imgWidth: {
                  ...imgWidth,
                  content: `${enforceMaxValue(newUnit, widthNumber)}${newUnit}`,
                },
              });
            }}
          />
        </div>
      )}
    </PanelBody>
  );
}
