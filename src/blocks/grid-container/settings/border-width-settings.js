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

import { PanelBody, ToggleControl, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";

export default function BorderWidthSettings({ attributes, setAttributes }) {
  const { containerBorder } = attributes;

  const borderArray = containerBorder.width.split(" ");
  const topBorder = parseInt(borderArray[0]) || 0;
  const rightBorder = parseInt(borderArray[1]) || 0;
  const bottomBorder = parseInt(borderArray[2]) || 0;
  const leftBorder = parseInt(borderArray[3]) || 0;

  const [useDifferentBorderWidths, setUseDifferentBorderWidths] = useState(
    containerBorder.width.includes(" ") ? true : false
  );
  return (
    <PanelBody
      title={__("Border width", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use different border widths for each side"
        checked={useDifferentBorderWidths}
        onChange={() => {
          const differentWidthsEnabled = !useDifferentBorderWidths;
          setUseDifferentBorderWidths(differentWidthsEnabled);

          if (differentWidthsEnabled) {
            setAttributes({
              containerBorder: {
                ...containerBorder,
                width: "1px 1px 1px 1px",
              },
            });
          } else {
            setAttributes({
              containerBorder: { ...containerBorder, width: "1px" },
            });
          }
        }}
      />
      {!useDifferentBorderWidths && (
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Please select the border width (px) for the container.",
            "caledros-basic-blocks"
          )}
          value={parseInt(containerBorder.width)}
          max={50}
          min={0}
          step={1}
          onChange={(newWidth) => {
            setAttributes({
              containerBorder: { ...containerBorder, width: `${newWidth}px` },
            });
          }}
        />
      )}

      {useDifferentBorderWidths && (
        <>
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the top border width (px) for the container.",
              "caledros-basic-blocks"
            )}
            value={topBorder}
            max={50}
            min={0}
            step={1}
            onChange={(newWidth) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  width: `${newWidth}px ${rightBorder}px ${bottomBorder}px ${leftBorder}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the right border width (px) for the container.",
              "caledros-basic-blocks"
            )}
            value={rightBorder}
            max={50}
            min={0}
            step={1}
            onChange={(newWidth) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  width: `${topBorder}px ${newWidth}px ${bottomBorder}px ${leftBorder}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the bottom border width (px) for the container.",
              "caledros-basic-blocks"
            )}
            value={bottomBorder}
            max={50}
            min={0}
            step={1}
            onChange={(newWidth) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  width: `${topBorder}px ${rightBorder}px ${newWidth}px ${leftBorder}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the left border width (px) for the container.",
              "caledros-basic-blocks"
            )}
            value={leftBorder}
            max={50}
            min={0}
            step={1}
            onChange={(newWidth) => {
              setAttributes({
                containerBorder: {
                  ...containerBorder,
                  width: `${topBorder}px ${rightBorder}px ${bottomBorder}px ${newWidth}px`,
                },
              });
            }}
          />
        </>
      )}
    </PanelBody>
  );
}
