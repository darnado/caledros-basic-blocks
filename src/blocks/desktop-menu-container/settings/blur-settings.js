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

import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function BlurSettings({ attributes, setAttributes }) {
  const { containerBlur } = attributes;

  return (
    <PanelBody title={__("Blur", "caledros-basic-blocks")} initialOpen={false}>
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable blur", "caledros-basic-blocks")}
        checked={containerBlur.enabled}
        onChange={(newValue) => {
          setAttributes({
            containerBlur: { ...containerBlur, enabled: newValue },
          });
        }}
      />
      {containerBlur.enabled && (
        <>
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the value for the blur filter (px).",
              "caledros-basic-blocks"
            )}
            value={parseInt(containerBlur.value)}
            max={100}
            min={0}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                containerBlur: {
                  ...containerBlur,
                  value: `${newValue}px`,
                },
              })
            }
          />
        </>
      )}
    </PanelBody>
  );
}
