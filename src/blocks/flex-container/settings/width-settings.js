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
  SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useSettings } from "@wordpress/block-editor";

export default function WidthSettings({ attributes, setAttributes }) {
  // Recover block attributes
  const { containerWidth } = attributes;

  // Recover the unit used in the width
  const unit = containerWidth.replace(/\d+/g, "") || "px";
  const widthUnit = ["px", "%", "em", "rem", "vw"].includes(unit) ? unit : "px";

  // Recover the numeric value of the width
  const widthNumber = parseInt(containerWidth) || 0;

  // Set state when a custom width is used
  const [useCustomWidth, setUseCustomWidth] = useState(
    containerWidth === "100%" ||
      containerWidth === "var(--wp--style--global--content-size)" ||
      containerWidth === "var(--wp--style--global--wide-size)"
      ? false
      : true
  );

  // Retrieve settings for the block
  const themeSettings =
    useSettings("layout.contentSize", "layout.wideSize") || [];
  const [layoutContentSize = "620px", layoutWideSize = "1280px"] =
    themeSettings;

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (["%", "vw"].includes(newUnit) && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Maximum width", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use custom width"
        checked={useCustomWidth}
        onChange={() =>
          setUseCustomWidth((oldUseCustomWidth) => !oldUseCustomWidth)
        }
      />
      {!useCustomWidth && (
        <SelectControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Choose the maximum width for the container.",
            "caledros-basic-blocks"
          )}
          value={
            containerWidth === "100%" ||
            containerWidth === "var(--wp--style--global--content-size)" ||
            containerWidth === "var(--wp--style--global--wide-size)"
              ? containerWidth
              : ""
          }
          options={[
            {
              disabled: true,
              label: "Select an option",
              value: "",
            },
            {
              label: "Full width",
              value: "100%",
            },
            {
              label: `Content size (${layoutContentSize})`,
              value: "var(--wp--style--global--content-size)",
            },
            {
              label: `Wide size (${layoutWideSize})`,
              value: "var(--wp--style--global--wide-size)",
            },
          ]}
          onChange={(newWidth) => {
            setAttributes({ containerWidth: newWidth });
          }}
        />
      )}
      {useCustomWidth && (
        <div className="cbb-editor__grid">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              `Please select the custom maximum width (${widthUnit}) for the container.`,
              "caledros-basic-blocks"
            )}
            value={
              containerWidth === "var(--wp--style--global--content-size)" ||
              containerWidth === "var(--wp--style--global--wide-size)"
                ? 0
                : parseInt(containerWidth)
            }
            max={widthUnit === "%" || widthUnit === "vw" ? 100 : 3000}
            min={0}
            step={1}
            onChange={(newWidth) => {
              setAttributes({ containerWidth: `${newWidth}${widthUnit}` });
            }}
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
                containerWidth: `${enforceMaxValue(
                  newUnit,
                  widthNumber
                )}${newUnit}`,
              });
            }}
          />
        </div>
      )}
    </PanelBody>
  );
}
