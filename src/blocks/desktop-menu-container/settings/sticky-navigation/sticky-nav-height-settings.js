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

export default function StickyNavHeightSettings({ attributes, setAttributes }) {
  const { stickyNavHeight } = attributes;

  // Recover the unit used in the height
  const heightUnit = stickyNavHeight.replace(/[\d.]+/g, "") || "px";

  // Recover the numeric value of the height
  const heightNumber = (unit) => {
    if (unit === "px") {
      return parseInt(stickyNavHeight) || 0;
    } else {
      return parseFloat(stickyNavHeight) || 0;
    }
  };

  // Restrict maximum value for vh units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (newUnit === "vh" && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Height", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <div className="cbb-editor__grid">
        <RangeControl
          __nextHasNoMarginBottom
          help={__(
            `Please select the height (${heightUnit}) for the sticky navigation bar. This feature is only visible in the frontend.`,
            "caledros-basic-blocks"
          )}
          value={heightNumber(heightUnit)}
          max={heightUnit === "vh" ? 100 : 3000}
          min={0}
          step={heightUnit === "px" ? 1 : 0.01}
          onChange={(newValue) =>
            setAttributes({
              stickyNavHeight: `${newValue}${heightUnit}`,
            })
          }
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
          ]}
          onChange={(newUnit) => {
            setAttributes({
              stickyNavHeight: `${enforceMaxValue(
                newUnit,
                heightNumber(newUnit)
              )}${newUnit}`,
            });
          }}
        />
      </div>
    </PanelBody>
  );
}
