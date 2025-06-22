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

import { PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function AlignmentSettings({ attributes, setAttributes }) {
  const { containerAlignment } = attributes;
  return (
    <PanelBody
      title={__("Content alignment", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __nextHasNoMarginBottom
        help={__(
          "Choose the vertical alignment for the container items.",
          "caledros-basic-blocks"
        )}
        value={containerAlignment.verticalAlignment}
        options={[
          {
            label: "Start",
            value: "start",
          },
          {
            label: "Center",
            value: "center",
          },
          {
            label: "End",
            value: "end",
          },
          {
            label: "Stretch",
            value: "stretch",
          },
          {
            label: "Normal (default value)",
            value: "normal",
          },
        ]}
        onChange={(newAlignment) => {
          setAttributes({
            containerAlignment: {
              ...containerAlignment,
              verticalAlignment: newAlignment,
            },
          });
        }}
      />
      <SelectControl
        __nextHasNoMarginBottom
        help={__(
          "Choose the horizontal alignment for the container items.",
          "caledros-basic-blocks"
        )}
        value={containerAlignment.horizontalAlignment}
        options={[
          {
            label: "Start",
            value: "start",
          },
          {
            label: "Center",
            value: "center",
          },
          {
            label: "End",
            value: "end",
          },
          {
            label: "Stretch",
            value: "stretch",
          },
          {
            label: "Legacy (default value)",
            value: "legacy",
          },
        ]}
        onChange={(newAlignment) => {
          setAttributes({
            containerAlignment: {
              ...containerAlignment,
              horizontalAlignment: newAlignment,
            },
          });
        }}
      />
    </PanelBody>
  );
}
