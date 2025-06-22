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

export default function OverflowSettings({ attributes, setAttributes }) {
  const { containerOverflow } = attributes;

  return (
    <PanelBody
      title={__("Overflow", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__(
          "Select the value for the overflow property. The container will automatically have 'overflow:hidden' applied if it's the parent of a slider or image gallery block.",
          "caledros-basic-blocks"
        )}
        value={containerOverflow}
        options={[
          {
            label: "Visible (default)",
            value: "visible",
          },
          {
            label: "Hidden",
            value: "hidden",
          },
          {
            label: "Scroll",
            value: "scroll",
          },
          {
            label: "Auto",
            value: "auto",
          },
        ]}
        onChange={(newValue) => {
          setAttributes({
            containerOverflow: newValue,
          });
        }}
      />
    </PanelBody>
  );
}
