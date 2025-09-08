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

export default function ContentGapSettings({ attributes, setAttributes }) {
  const { contentGap } = attributes;

  return (
    <PanelBody
      title={__("Content gap", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable control", "caledros-basic-blocks")}
        help={__(
          "This control enables selecting a custom value for the button's content gap.",
          "caledros-basic-blocks"
        )}
        checked={contentGap.enabled}
        onChange={(newValue) => {
          setAttributes({
            contentGap: {
              ...contentGap,
              enabled: newValue,
            },
          });
        }}
      />
      {contentGap.enabled && (
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            `Please select the space between the icon and the text (px).`,
            "caledros-basic-blocks"
          )}
          value={contentGap.value}
          max={40}
          min={0}
          step={1}
          onChange={(newValue) => {
            setAttributes({
              contentGap: {
                ...contentGap,
                value: newValue,
              },
            });
          }}
        />
      )}
    </PanelBody>
  );
}
