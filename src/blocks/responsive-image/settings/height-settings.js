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

export default function HeightSettings({ attributes, setAttributes }) {
  const { imgHeight, sourceImage } = attributes;

  // Recover the unit used in the width
  const unit = imgHeight.content.replace(/\d+/g, "") || "px";
  const heightUnit = ["px", "%", "em", "rem", "vw", "auto"].includes(unit)
    ? unit
    : "px";

  // Recover the numeric value of the width
  const heightNumber = parseInt(imgHeight.content) || 0;

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (newUnit === "auto") {
      return "";
    }
    if (["%", "vw"].includes(newUnit) && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Height", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__(
          `Use actual height (${sourceImage.height}px)`,
          "caledros-basic-blocks"
        )}
        checked={imgHeight.defaultHeightEnabled}
        onChange={(newValue) => {
          setAttributes({
            imgHeight: {
              content: `${sourceImage.height}px`,
              defaultHeightEnabled: newValue,
            },
          });
        }}
      />
      {!imgHeight.defaultHeightEnabled && (
        <div className="cbb-editor__grid">
          <RangeControl
            __nextHasNoMarginBottom
            help={__(
              `Choose the height (${heightUnit}) for the image.`,
              "caledros-basic-blocks"
            )}
            value={parseInt(imgHeight.content)}
            max={heightUnit === "%" || heightUnit === "vw" ? 100 : 2000}
            min={0}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                imgHeight: {
                  ...imgHeight,
                  content: `${newValue}${heightUnit}`,
                },
              })
            }
            disabled={imgHeight.content === "auto"}
          />
          <SelectControl
            __nextHasNoMarginBottom
            value={heightUnit}
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
              {
                label: "auto",
                value: "auto",
              },
            ]}
            onChange={(newUnit) =>
              setAttributes({
                imgHeight: {
                  ...imgHeight,
                  content: `${enforceMaxValue(
                    newUnit,
                    heightNumber
                  )}${newUnit}`,
                },
              })
            }
          />
        </div>
      )}
    </PanelBody>
  );
}
