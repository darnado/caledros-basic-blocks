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

export default function NumberOfColumnsMobileSettings({
  attributes,
  setAttributes,
}) {
  const { columnNoMobile } = attributes;

  return (
    <PanelBody
      title={__("Number of columns (mobile)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable custom columns number", "caledros-basic-blocks")}
        help={__(
          "Use a custom number of columns for mobile screens. If this option is not enabled, the default value is 1 column.",
          "caledros-basic-blocks"
        )}
        checked={columnNoMobile.enableCustomValue}
        onChange={(newValue) => {
          setAttributes({
            columnNoMobile: {
              ...columnNoMobile,
              enableCustomValue: newValue,
            },
          });
        }}
      />
      {columnNoMobile.enableCustomValue && (
        <RangeControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          help={__(
            "Please select the number columns for the categories container (mobile screens).",
            "caledros-basic-blocks"
          )}
          value={columnNoMobile.columnNo}
          max={6}
          min={1}
          step={1}
          onChange={(newValue) =>
            setAttributes({
              columnNoMobile: { ...columnNoMobile, columnNo: newValue },
            })
          }
        />
      )}
    </PanelBody>
  );
}
