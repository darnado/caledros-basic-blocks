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

import { PanelBody, ToggleControl, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";

export default function BorderStyleSettings({ attributes, setAttributes }) {
  const { imgBorder } = attributes;

  const borderArray = imgBorder.style.split(" ");
  const topBorder = borderArray[0] || "solid";
  const rightBorder = borderArray[1] || "none";
  const bottomBorder = borderArray[2] || "none";
  const leftBorder = borderArray[3] || "none";

  const [useDifferentBorderStyles, setUseDifferentBorderStyles] = useState(
    imgBorder.style.includes(" ") ? true : false
  );
  return (
    <PanelBody
      title={__("Border style", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label="Use different border styles for each side"
        checked={useDifferentBorderStyles}
        onChange={() => {
          const newValue = !useDifferentBorderStyles;
          setUseDifferentBorderStyles(newValue);

          if (newValue) {
            setAttributes({
              imgBorder: {
                ...imgBorder,
                style: "solid none none none",
              },
            });
          } else {
            setAttributes({
              imgBorder: { ...imgBorder, style: "solid" },
            });
          }
        }}
      />
      {!useDifferentBorderStyles && (
        <SelectControl
          __nextHasNoMarginBottom
          help={__("Choose the border style.", "caledros-basic-blocks")}
          value={imgBorder.style}
          options={[
            {
              disabled: true,
              label: "Select an option",
              value: "",
            },
            {
              label: "None",
              value: "none",
            },
            {
              label: "Dotted",
              value: "dotted",
            },
            {
              label: "Dashed",
              value: "dashed",
            },
            {
              label: "Solid",
              value: "solid",
            },
            {
              label: "Double",
              value: "double",
            },
            {
              label: "Groove",
              value: "groove",
            },
            {
              label: "Ridge",
              value: "ridge",
            },
            {
              label: "Inset",
              value: "inset",
            },
            {
              label: "Outset",
              value: "outset",
            },
          ]}
          onChange={(newValue) => {
            setAttributes({
              imgBorder: { ...imgBorder, style: newValue },
            });
          }}
        />
      )}

      {useDifferentBorderStyles && (
        <>
          <SelectControl
            __nextHasNoMarginBottom
            help={__(
              "Choose the style for the top border.",
              "caledros-basic-blocks"
            )}
            value={topBorder}
            options={[
              {
                disabled: true,
                label: "Select an option",
                value: "",
              },
              {
                label: "None",
                value: "none",
              },
              {
                label: "Dotted",
                value: "dotted",
              },
              {
                label: "Dashed",
                value: "dashed",
              },
              {
                label: "Solid",
                value: "solid",
              },
              {
                label: "Double",
                value: "double",
              },
              {
                label: "Groove",
                value: "groove",
              },
              {
                label: "Ridge",
                value: "ridge",
              },
              {
                label: "Inset",
                value: "inset",
              },
              {
                label: "Outset",
                value: "outset",
              },
            ]}
            onChange={(newValue) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  style: `${newValue} ${rightBorder} ${bottomBorder} ${leftBorder}`,
                },
              });
            }}
          />
          <SelectControl
            __nextHasNoMarginBottom
            help={__(
              "Choose the style for the right border.",
              "caledros-basic-blocks"
            )}
            value={rightBorder}
            options={[
              {
                disabled: true,
                label: "Select an option",
                value: "",
              },
              {
                label: "None",
                value: "none",
              },
              {
                label: "Dotted",
                value: "dotted",
              },
              {
                label: "Dashed",
                value: "dashed",
              },
              {
                label: "Solid",
                value: "solid",
              },
              {
                label: "Double",
                value: "double",
              },
              {
                label: "Groove",
                value: "groove",
              },
              {
                label: "Ridge",
                value: "ridge",
              },
              {
                label: "Inset",
                value: "inset",
              },
              {
                label: "Outset",
                value: "outset",
              },
            ]}
            onChange={(newValue) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  style: `${topBorder} ${newValue} ${bottomBorder} ${leftBorder}`,
                },
              });
            }}
          />
          <SelectControl
            __nextHasNoMarginBottom
            help={__(
              "Choose the style for the bottom border.",
              "caledros-basic-blocks"
            )}
            value={bottomBorder}
            options={[
              {
                disabled: true,
                label: "Select an option",
                value: "",
              },
              {
                label: "None",
                value: "none",
              },
              {
                label: "Dotted",
                value: "dotted",
              },
              {
                label: "Dashed",
                value: "dashed",
              },
              {
                label: "Solid",
                value: "solid",
              },
              {
                label: "Double",
                value: "double",
              },
              {
                label: "Groove",
                value: "groove",
              },
              {
                label: "Ridge",
                value: "ridge",
              },
              {
                label: "Inset",
                value: "inset",
              },
              {
                label: "Outset",
                value: "outset",
              },
            ]}
            onChange={(newValue) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  style: `${topBorder} ${rightBorder} ${newValue} ${leftBorder}`,
                },
              });
            }}
          />
          <SelectControl
            __nextHasNoMarginBottom
            help={__(
              "Choose the style for the left border.",
              "caledros-basic-blocks"
            )}
            value={leftBorder}
            options={[
              {
                disabled: true,
                label: "Select an option",
                value: "",
              },
              {
                label: "None",
                value: "none",
              },
              {
                label: "Dotted",
                value: "dotted",
              },
              {
                label: "Dashed",
                value: "dashed",
              },
              {
                label: "Solid",
                value: "solid",
              },
              {
                label: "Double",
                value: "double",
              },
              {
                label: "Groove",
                value: "groove",
              },
              {
                label: "Ridge",
                value: "ridge",
              },
              {
                label: "Inset",
                value: "inset",
              },
              {
                label: "Outset",
                value: "outset",
              },
            ]}
            onChange={(newValue) => {
              setAttributes({
                imgBorder: {
                  ...imgBorder,
                  style: `${topBorder} ${rightBorder} ${bottomBorder} ${newValue}`,
                },
              });
            }}
          />
        </>
      )}
    </PanelBody>
  );
}
