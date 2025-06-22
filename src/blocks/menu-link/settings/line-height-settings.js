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
import { useState } from "@wordpress/element";

export default function LineHeightSettings({ attributes, setAttributes }) {
  const { menuLineHeight } = attributes;
  const [useDefaultLineHeight, setUseDefaultLineHeight] = useState(
    menuLineHeight === "" ? true : false
  );

  return (
    <PanelBody
      title={__("Line height", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Use theme line height (default)", "caledros-basic-blocks")}
        checked={useDefaultLineHeight}
        onChange={() => {
          const temporalValue = useDefaultLineHeight ? "1.2" : "";
          setUseDefaultLineHeight((oldValue) => !oldValue);
          setAttributes({
            menuLineHeight: temporalValue,
          });
        }}
      />
      {!useDefaultLineHeight && (
        <RangeControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          help={__(
            "Please, select the line height for the menu link.",
            "caledros-basic-blocks"
          )}
          max={5}
          min={0}
          step={0.1}
          value={
            isNaN(parseFloat(menuLineHeight)) ? 0 : parseFloat(menuLineHeight)
          }
          onChange={(newValue) => {
            setAttributes({
              menuLineHeight: `${newValue}`,
            });
          }}
        />
      )}
    </PanelBody>
  );
}
