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

export default function OpenButtonPaddingSettings({
  attributes,
  setAttributes,
}) {
  const { openButtonPadding } = attributes;

  // Recover the paddings
  const topPadding = parseInt(openButtonPadding.top) || 0;
  const leftPadding = parseInt(openButtonPadding.left) || 0;
  const bottomPadding = parseInt(openButtonPadding.bottom) || 0;
  const rightPadding = parseInt(openButtonPadding.right) || 0;

  return (
    <PanelBody
      title={__("Open button padding", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable different paddings", "caledros-basic-blocks")}
        checked={openButtonPadding.differentPaddingsEnabled}
        onChange={(newValue) => {
          setAttributes({
            openButtonPadding: {
              ...openButtonPadding,
              differentPaddingsEnabled: newValue,
            },
          });
        }}
      />

      {!openButtonPadding.differentPaddingsEnabled && (
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Please select the padding (px) for the button",
            "caledros-basic-blocks"
          )}
          value={topPadding}
          max={30}
          min={0}
          step={1}
          onChange={(newPadding) => {
            setAttributes({
              openButtonPadding: {
                ...openButtonPadding,
                top: `${newPadding}px`,
              },
            });
          }}
        />
      )}
      {openButtonPadding.differentPaddingsEnabled && (
        <>
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the top padding (px) for the button",
              "caledros-basic-blocks"
            )}
            value={topPadding}
            max={30}
            min={0}
            step={1}
            onChange={(newPadding) => {
              setAttributes({
                openButtonPadding: {
                  ...openButtonPadding,
                  top: `${newPadding}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the right padding (px) for the button",
              "caledros-basic-blocks"
            )}
            value={rightPadding}
            max={30}
            min={0}
            step={1}
            onChange={(newPadding) => {
              setAttributes({
                openButtonPadding: {
                  ...openButtonPadding,
                  right: `${newPadding}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the bottom padding (px) for the button",
              "caledros-basic-blocks"
            )}
            value={bottomPadding}
            max={30}
            min={0}
            step={1}
            onChange={(newPadding) => {
              setAttributes({
                openButtonPadding: {
                  ...openButtonPadding,
                  bottom: `${newPadding}px`,
                },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the left padding (px) for the button",
              "caledros-basic-blocks"
            )}
            value={leftPadding}
            max={30}
            min={0}
            step={1}
            onChange={(newPadding) => {
              setAttributes({
                openButtonPadding: {
                  ...openButtonPadding,
                  left: `${newPadding}px`,
                },
              });
            }}
          />
        </>
      )}
    </PanelBody>
  );
}
