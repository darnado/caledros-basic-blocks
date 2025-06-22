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

export default function LetterCaseSettings({ attributes, setAttributes }) {
  const { menuLetterCase } = attributes;

  return (
    <PanelBody
      title={__("Letter case", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__(
          "Select the letter case transformation.",
          "caledros-basic-blocks"
        )}
        value={menuLetterCase}
        options={[
          {
            label: "Capitalize",
            value: "capitalize",
          },
          {
            label: "Uppercase",
            value: "uppercase",
          },
          {
            label: "Lowercase",
            value: "lowercase",
          },
          {
            label: "None",
            value: "none",
          },
        ]}
        onChange={(newValue) => {
          setAttributes({
            menuLetterCase: newValue,
          });
        }}
      />
    </PanelBody>
  );
}
