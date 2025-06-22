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

export default function PaddingSettings({ attributes, setAttributes }) {
  const { containerPadding } = attributes;

  // Recover the paddings
  const topPadding = parseInt(containerPadding.top) || 0;
  const leftPadding = parseInt(containerPadding.left) || 0;
  const bottomPadding = parseInt(containerPadding.bottom) || 0;
  const rightPadding = parseInt(containerPadding.right) || 0;

  // Recover the unit used in the paddings
  const topUnit = containerPadding.top.replace(/\d+/g, "");
  const leftUnit = containerPadding.left.replace(/\d+/g, "");
  const bottomUnit = containerPadding.bottom.replace(/\d+/g, "");
  const rightUnit = containerPadding.right.replace(/\d+/g, "");

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (["%", "vw"].includes(newUnit) && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };

  return (
    <PanelBody
      title={__("Padding", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Use global padding", "caledros-basic-blocks")}
        help={__(
          "This option applies predefined padding to the right and left sides of the block, ensuring consistency across the entire site. To adjust this padding, navigate to the Layout section in the Full Site Editor.",
          "caledros-basic-blocks"
        )}
        checked={containerPadding.useGlobalPadding}
        onChange={(newValue) => {
          setAttributes({
            containerPadding: {
              ...containerPadding,
              useGlobalPadding: newValue,
            },
          });
        }}
      />
      {!containerPadding.useGlobalPadding && (
        <ToggleControl
          __nextHasNoMarginBottom
          label={__("Enable different paddings", "caledros-basic-blocks")}
          checked={containerPadding.differentPaddingsEnabled}
          onChange={(newValue) => {
            setAttributes({
              containerPadding: {
                ...containerPadding,
                differentPaddingsEnabled: newValue,
              },
            });
          }}
        />
      )}

      {!containerPadding.differentPaddingsEnabled &&
        !containerPadding.useGlobalPadding && (
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the padding (${topUnit}) for the container`,
                "caledros-basic-blocks"
              )}
              value={topPadding}
              max={["%", "vw"].includes(topUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newPadding) => {
                setAttributes({
                  containerPadding: {
                    ...containerPadding,
                    top: `${newPadding}${topUnit}`,
                  },
                });
              }}
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
              ]}
              onChange={(newUnit) => {
                setAttributes({
                  containerPadding: {
                    ...containerPadding,
                    top: `${enforceMaxValue(newUnit, topPadding)}${newUnit}`,
                  },
                });
              }}
            />
          </div>
        )}
      {containerPadding.differentPaddingsEnabled &&
        !containerPadding.useGlobalPadding && (
          <>
            <div className="cbb-editor__grid">
              <RangeControl
                __next40pxDefaultSize
                __nextHasNoMarginBottom
                help={__(
                  `Please select the top padding (${topUnit}) for the container`,
                  "caledros-basic-blocks"
                )}
                value={topPadding}
                max={["%", "vw"].includes(topUnit) ? 100 : 500}
                min={0}
                step={1}
                onChange={(newPadding) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      top: `${newPadding}${topUnit}`,
                    },
                  });
                }}
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
                ]}
                onChange={(newUnit) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      top: `${enforceMaxValue(newUnit, topPadding)}${newUnit}`,
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
                  `Please select the right padding (${rightUnit}) for the container`,
                  "caledros-basic-blocks"
                )}
                value={rightPadding}
                max={["%", "vw"].includes(rightUnit) ? 100 : 500}
                min={0}
                step={1}
                onChange={(newPadding) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      right: `${newPadding}${rightUnit}`,
                    },
                  });
                }}
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
                ]}
                onChange={(newUnit) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      right: `${enforceMaxValue(
                        newUnit,
                        rightPadding
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
                  `Please select the bottom padding (${bottomUnit}) for the container`,
                  "caledros-basic-blocks"
                )}
                value={bottomPadding}
                max={["%", "vw"].includes(bottomUnit) ? 100 : 500}
                min={0}
                step={1}
                onChange={(newPadding) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      bottom: `${newPadding}${bottomUnit}`,
                    },
                  });
                }}
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
                ]}
                onChange={(newUnit) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      bottom: `${enforceMaxValue(
                        newUnit,
                        bottomPadding
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
                  `Please select the left padding (${leftUnit}) for the container`,
                  "caledros-basic-blocks"
                )}
                value={leftPadding}
                max={["%", "vw"].includes(leftUnit) ? 100 : 500}
                min={0}
                step={1}
                onChange={(newPadding) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      left: `${newPadding}${leftUnit}`,
                    },
                  });
                }}
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
                ]}
                onChange={(newUnit) => {
                  setAttributes({
                    containerPadding: {
                      ...containerPadding,
                      left: `${enforceMaxValue(
                        newUnit,
                        leftPadding
                      )}${newUnit}`,
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
