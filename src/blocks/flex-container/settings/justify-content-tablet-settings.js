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

export default function JustifyContentTabletSettings({
  attributes,
  setAttributes,
}) {
  const { containerJustifyContentTablet } = attributes;

  return (
    <PanelBody
      title={__("Justify Content (Tablet and Mobile)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable control", "caledros-basic-blocks")}
        help={__(
          "This control enables selecting a custom value for the 'justify content' property in both tablet and mobile devices.",
          "caledros-basic-blocks"
        )}
        checked={containerJustifyContentTablet.enabled}
        onChange={(newValue) => {
          setAttributes({
            containerJustifyContentTablet: {
              ...containerJustifyContentTablet,
              enabled: newValue,
            },
          });
        }}
      />
      {containerJustifyContentTablet.enabled && (
        <SelectControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Select the value for the justify content property.",
            "caledros-basic-blocks"
          )}
          value={containerJustifyContentTablet.value}
          options={[
            {
              label: "Flex start (default)",
              value: "flex-start",
            },
            {
              label: "Flex end",
              value: "flex-end",
            },
            {
              label: "Center",
              value: "center",
            },
            {
              label: "Space between",
              value: "space-between",
            },
            {
              label: "Space around",
              value: "space-around",
            },
            {
              label: "Space evenly",
              value: "space-evenly",
            },
          ]}
          onChange={(newValue) => {
            setAttributes({
              containerJustifyContentTablet: {
                ...containerJustifyContentTablet,
                value: newValue,
              },
            });
          }}
        />
      )}
    </PanelBody>
  );
}
