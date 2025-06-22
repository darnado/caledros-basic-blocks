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

export default function NumberOfColumnsTabletSettings({
  attributes,
  setAttributes,
}) {
  const { columnNoTablet } = attributes;

  return (
    <PanelBody
      title={__("Number of columns (tablet)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable custom columns number", "caledros-basic-blocks")}
        help={__(
          "Use a custom number of columns for tablet screens. If this option is not enabled, the default value is 2 columns.",
          "caledros-basic-blocks"
        )}
        checked={columnNoTablet.enableCustomValue}
        onChange={(newValue) => {
          setAttributes({
            columnNoTablet: {
              ...columnNoTablet,
              enableCustomValue: newValue,
            },
          });
        }}
      />
      {columnNoTablet.enableCustomValue && (
        <RangeControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          help={__(
            "Please select the number columns for the posts container (tablet screens).",
            "caledros-basic-blocks"
          )}
          value={columnNoTablet.columnNo}
          max={6}
          min={1}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              columnNoTablet: { ...columnNoTablet, columnNo: newValue },
            })
          }
        />
      )}
    </PanelBody>
  );
}
