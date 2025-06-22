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

import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function MinHeightSettings({ attributes, setAttributes }) {
  const { containerMinHeight } = attributes;

  // Recover the unit used in the minimum height
  const minHeightUnit = containerMinHeight.replace(/\d+/g, "") || "px";

  // Recover the numeric value of the minimum height
  const minHeightNumber = parseInt(containerMinHeight) || 0;

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (newUnit === "auto") {
      return "";
    }
    if (newUnit === "vh" && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Minimum height", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <div className="cbb-editor__grid">
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            `Please select the minimum height (${minHeightUnit}) for the container.`,
            "caledros-basic-blocks"
          )}
          initialPosition={0}
          max={minHeightUnit === "vh" ? 100 : 1000}
          min={0}
          step={1}
          value={minHeightUnit === "auto" ? 0 : minHeightNumber}
          onChange={(newValue) =>
            setAttributes({
              containerMinHeight: `${
                minHeightUnit !== "auto" ? newValue : ""
              }${minHeightUnit}`,
            })
          }
          disabled={minHeightUnit === "auto"}
        />
        <SelectControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          value={minHeightUnit}
          options={[
            {
              label: "px",
              value: "px",
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
              label: "vh",
              value: "vh",
            },
            {
              label: "auto",
              value: "auto",
            },
          ]}
          onChange={(newUnit) => {
            setAttributes({
              containerMinHeight: `${enforceMaxValue(
                newUnit,
                minHeightNumber
              )}${newUnit}`,
            });
          }}
        />
      </div>
    </PanelBody>
  );
}
