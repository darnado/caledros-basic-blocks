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
import { useState } from "@wordpress/element";

export default function BorderRadiusSettings({ attributes, setAttributes }) {
  const { imgBorder } = attributes;

  // Recover the border radius of each corner
  const borderArray = imgBorder.radius.split(" ");
  const topLeftCorner = parseInt(borderArray[0]) || 0;
  const topRightCorner = parseInt(borderArray[1]) || 0;
  const bottomRightCorner = parseInt(borderArray[2]) || 0;
  const bottomLeftCorner = parseInt(borderArray[3]) || 0;

  // Recover the unit used in the border radiuses
  const unitArray = imgBorder.radius.split(" ");
  const topLeftUnit = unitArray[0] ? unitArray[0].replace(/\d+/g, "") : "px";
  const topRightUnit = unitArray[1] ? unitArray[1].replace(/\d+/g, "") : "px";
  const bottomRightUnit = unitArray[2]
    ? unitArray[2].replace(/\d+/g, "")
    : "px";
  const bottomLeftUnit = unitArray[3] ? unitArray[3].replace(/\d+/g, "") : "px";

  const [useDifferentBorderRadiuses, setUseDifferentBorderRadiuses] = useState(
    imgBorder.radius.includes(" ") ? true : false
  );

  // Restrict maximum value for % and vw units
  const enforceMaxValue = (newUnit, valueNumber) => {
    if (newUnit === "%" && valueNumber > 100) {
      return 100;
    }
    return valueNumber;
  };
  return (
    <PanelBody
      title={__("Border radius", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use different border radiuses for each corner"
        checked={useDifferentBorderRadiuses}
        onChange={() => {
          const differentRadiusesEnabled = !useDifferentBorderRadiuses;
          setUseDifferentBorderRadiuses(differentRadiusesEnabled);

          if (differentRadiusesEnabled) {
            setAttributes({
              imgBorder: {
                ...imgBorder,
                radius: "10px 10px 10px 10px",
              },
            });
          } else {
            setAttributes({
              imgBorder: { ...imgBorder, radius: "10px" },
            });
          }
        }}
      />
      {!useDifferentBorderRadiuses && (
        <div className="cbb-editor__grid">
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              `Please select the border radius (${topLeftUnit}) for the image.`,
              "caledros-basic-blocks"
            )}
            value={parseInt(imgBorder.radius)}
            max={topLeftUnit === "%" ? 100 : 150}
            min={0}
            step={1}
            onChange={(newRadius) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  radius: `${newRadius}${topLeftUnit}`,
                },
              });
            }}
          />
          <SelectControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            value={topLeftUnit}
            options={[
              {
                label: "px",
                value: "px",
              },
              {
                label: "%",
                value: "%",
              },
            ]}
            onChange={(newUnit) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  radius: `${enforceMaxValue(
                    newUnit,
                    parseInt(imgBorder.radius)
                  )}${newUnit}`,
                },
              });
            }}
          />
        </div>
      )}
      {useDifferentBorderRadiuses && (
        <>
          <div className="cbb-editor__grid">
            <RangeControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              help={__(
                `Please select the top-left border radius (${topLeftUnit}).`,
                "caledros-basic-blocks"
              )}
              value={topLeftCorner}
              max={topLeftUnit === "%" ? 100 : 150}
              min={0}
              step={1}
              onChange={(newRadius) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${newRadius}${topLeftUnit} ${topRightCorner}${topRightUnit} ${bottomRightCorner}${bottomRightUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
                  },
                });
              }}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={topLeftUnit}
              options={[
                {
                  label: "px",
                  value: "px",
                },
                {
                  label: "%",
                  value: "%",
                },
              ]}
              onChange={(newUnit) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${enforceMaxValue(
                      newUnit,
                      topLeftCorner
                    )}${newUnit} ${topRightCorner}${topRightUnit} ${bottomRightCorner}${bottomRightUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
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
                `Please select the top-right border radius (${topRightUnit}).`,
                "caledros-basic-blocks"
              )}
              value={topRightCorner}
              max={topRightUnit === "%" ? 100 : 150}
              min={0}
              step={1}
              onChange={(newRadius) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${newRadius}${topRightUnit} ${bottomRightCorner}${bottomRightUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
                  },
                });
              }}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={topRightUnit}
              options={[
                {
                  label: "px",
                  value: "px",
                },
                {
                  label: "%",
                  value: "%",
                },
              ]}
              onChange={(newUnit) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${enforceMaxValue(
                      newUnit,
                      topRightCorner
                    )}${newUnit} ${bottomRightCorner}${bottomRightUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
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
                `Please select the bottom-right border radius (${bottomRightUnit}).`,
                "caledros-basic-blocks"
              )}
              value={bottomRightCorner}
              max={bottomRightUnit === "%" ? 100 : 150}
              min={0}
              step={1}
              onChange={(newRadius) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${topRightCorner}${topRightUnit} ${newRadius}${bottomRightUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
                  },
                });
              }}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={bottomRightUnit}
              options={[
                {
                  label: "px",
                  value: "px",
                },
                {
                  label: "%",
                  value: "%",
                },
              ]}
              onChange={(newUnit) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${topRightCorner}${topRightUnit} ${enforceMaxValue(
                      newUnit,
                      bottomRightCorner
                    )}${newUnit} ${bottomLeftCorner}${bottomLeftUnit}`,
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
                `Please select the bottom-left border radius (${bottomLeftUnit}).`,
                "caledros-basic-blocks"
              )}
              value={bottomLeftCorner}
              max={bottomLeftUnit === "%" ? 100 : 150}
              min={0}
              step={1}
              onChange={(newRadius) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${topRightCorner}${topRightUnit} ${bottomRightCorner}${bottomRightUnit} ${newRadius}${bottomLeftUnit}`,
                  },
                });
              }}
            />
            <SelectControl
              __next40pxDefaultSize
              __nextHasNoMarginBottom
              value={bottomLeftUnit}
              options={[
                {
                  label: "px",
                  value: "px",
                },
                {
                  label: "%",
                  value: "%",
                },
              ]}
              onChange={(newUnit) => {
                setAttributes({
                  imgBorder: {
                    ...imgBorder,
                    radius: `${topLeftCorner}${topLeftUnit} ${topRightCorner}${topRightUnit} ${bottomRightCorner}${bottomRightUnit} ${enforceMaxValue(
                      newUnit,
                      bottomLeftCorner
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
