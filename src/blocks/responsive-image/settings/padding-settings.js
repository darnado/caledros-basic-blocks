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

export default function PaddingSettings({ attributes, setAttributes }) {
  const { imgPadding } = attributes;
  // Recover the paddings
  const topPadding = parseInt(imgPadding.top) || 0;
  const leftPadding = parseInt(imgPadding.left) || 0;
  const bottomPadding = parseInt(imgPadding.bottom) || 0;
  const rightPadding = parseInt(imgPadding.right) || 0;

  // Recover the unit used in the paddings
  const topUnit = imgPadding.top.replace(/\d+/g, "");
  const leftUnit = imgPadding.left.replace(/\d+/g, "");
  const bottomUnit = imgPadding.bottom.replace(/\d+/g, "");
  const rightUnit = imgPadding.right.replace(/\d+/g, "");

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
        label={__("Enable different paddings", "caledros-basic-blocks")}
        checked={imgPadding.differentPaddingsEnabled}
        onChange={(newPadding) => {
          setAttributes({
            imgPadding: {
              ...imgPadding,
              differentPaddingsEnabled: newPadding,
            },
          });
        }}
      />
      {!imgPadding.differentPaddingsEnabled && (
        <div className="cbb-editor__grid">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              `Please select the padding (${topUnit}).`,
              "caledros-basic-blocks"
            )}
            value={topPadding}
            max={["%", "vw"].includes(topUnit) ? 100 : 500}
            min={0}
            step={1}
            onChange={(newPadding) => {
              setAttributes({
                imgPadding: {
                  ...imgPadding,
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
                imgPadding: {
                  ...imgPadding,
                  top: `${enforceMaxValue(newUnit, topPadding)}${newUnit}`,
                },
              });
            }}
          />
        </div>
      )}
      {imgPadding.differentPaddingsEnabled && (
        <>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the top padding (${topUnit}).`,
                "caledros-basic-blocks"
              )}
              value={topPadding}
              max={["%", "vw"].includes(topUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newPadding) => {
                setAttributes({
                  imgPadding: {
                    ...imgPadding,
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
                  imgPadding: {
                    ...imgPadding,
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
                `Please select the right padding (${rightUnit}).`,
                "caledros-basic-blocks"
              )}
              value={rightPadding}
              max={["%", "vw"].includes(rightUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newPadding) => {
                setAttributes({
                  imgPadding: {
                    ...imgPadding,
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
                  imgPadding: {
                    ...imgPadding,
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
                `Please select the bottom padding (${bottomUnit}).`,
                "caledros-basic-blocks"
              )}
              value={bottomPadding}
              max={["%", "vw"].includes(bottomUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newPadding) => {
                setAttributes({
                  imgPadding: {
                    ...imgPadding,
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
                  imgPadding: {
                    ...imgPadding,
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
                `Please select the left padding (${leftUnit}).`,
                "caledros-basic-blocks"
              )}
              value={leftPadding}
              max={["%", "vw"].includes(leftUnit) ? 100 : 500}
              min={0}
              step={1}
              onChange={(newPadding) => {
                setAttributes({
                  imgPadding: {
                    ...imgPadding,
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
                  imgPadding: {
                    ...imgPadding,
                    left: `${enforceMaxValue(newUnit, leftPadding)}${newUnit}`,
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
