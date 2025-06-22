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
  SelectControl,
  RangeControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function MarginSettings({ attributes, setAttributes }) {
  const { containerMargin } = attributes;

  // Recover the margins
  const topMargin = parseInt(containerMargin.top) || 0;
  const leftMargin = parseInt(containerMargin.left) || 0;
  const bottomMargin = parseInt(containerMargin.bottom) || 0;
  const rightMargin = parseInt(containerMargin.right) || 0;

  // Recover the unit used in the margins
  const topUnit = containerMargin.top.replace(/\d+/g, "");
  const leftUnit = containerMargin.left.replace(/\d+/g, "");
  const bottomUnit = containerMargin.bottom.replace(/\d+/g, "");
  const rightUnit = containerMargin.right.replace(/\d+/g, "");

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
      title={__("Margin", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable different margins", "caledros-basic-blocks")}
        checked={containerMargin.differentMarginsEnabled}
        onChange={(newMargin) => {
          setAttributes({
            containerMargin: {
              ...containerMargin,
              differentMarginsEnabled: newMargin,
            },
          });
        }}
      />
      {!containerMargin.differentMarginsEnabled && (
        <div className="cbb-editor__grid">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              `Please select the margin (${topUnit}) for the container.`,
              "caledros-basic-blocks"
            )}
            value={topMargin}
            max={["%", "vw"].includes(topUnit) ? 100 : 500}
            min={0}
            step={1}
            onChange={(newMargin) => {
              setAttributes({
                containerMargin: {
                  ...containerMargin,
                  top: `${topUnit === "auto" ? "" : newMargin}${topUnit}`,
                },
              });
            }}
            disabled={topUnit === "auto"}
          />
          <SelectControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            value={topUnit}
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
            onChange={(newUnit) => {
              setAttributes({
                containerMargin: {
                  ...containerMargin,
                  top: `${enforceMaxValue(newUnit, topMargin)}${newUnit}`,
                },
              });
            }}
          />
        </div>
      )}
      {containerMargin.differentMarginsEnabled && (
        <>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the top margin (${topUnit}) for the container.`,
                "caledros-basic-blocks"
              )}
              value={topMargin}
              max={["%", "vw"].includes(topUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newMargin) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    top: `${topUnit === "auto" ? "" : newMargin}${topUnit}`,
                  },
                });
              }}
              disabled={topUnit === "auto"}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={topUnit}
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
              onChange={(newUnit) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    top: `${enforceMaxValue(newUnit, topMargin)}${newUnit}`,
                  },
                });
              }}
            />
          </div>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the right margin (${rightUnit}) for the container.`,
                "caledros-basic-blocks"
              )}
              value={rightMargin}
              max={["%", "vw"].includes(rightUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newMargin) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    right: `${
                      rightUnit === "auto" ? "" : newMargin
                    }${rightUnit}`,
                  },
                });
              }}
              disabled={rightUnit === "auto"}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={rightUnit}
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
              onChange={(newUnit) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    right: `${enforceMaxValue(newUnit, rightMargin)}${newUnit}`,
                  },
                });
              }}
            />
          </div>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the bottom margin (${bottomUnit}) for the container.`,
                "caledros-basic-blocks"
              )}
              value={bottomMargin}
              max={["%", "vw"].includes(bottomUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newMargin) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    bottom: `${
                      bottomUnit === "auto" ? "" : newMargin
                    }${bottomUnit}`,
                  },
                });
              }}
              disabled={bottomUnit === "auto"}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={bottomUnit}
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
              onChange={(newUnit) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    bottom: `${enforceMaxValue(
                      newUnit,
                      bottomMargin
                    )}${newUnit}`,
                  },
                });
              }}
            />
          </div>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the left margin (${leftUnit}) for the container.`,
                "caledros-basic-blocks"
              )}
              value={leftMargin}
              max={["%", "vw"].includes(leftUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newMargin) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    left: `${leftUnit === "auto" ? "" : newMargin}${leftUnit}`,
                  },
                });
              }}
              disabled={leftUnit === "auto"}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={leftUnit}
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
              onChange={(newUnit) => {
                setAttributes({
                  containerMargin: {
                    ...containerMargin,
                    left: `${enforceMaxValue(newUnit, leftMargin)}${newUnit}`,
                  },
                });
              }}
            />
          </div>
        </>
      )}
    </PanelBody>
  );
}
