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

export default function RowGapSettings({ attributes, setAttributes }) {
  const { containerRowGap } = attributes;
  const [useNormalRowGap, setUseNormalRowGap] = useState(
    containerRowGap === "normal" ? true : false
  );
  return (
    <PanelBody
      title={__("Row gap", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__(
          "Use normal row gap (default value)",
          "caledros-basic-blocks"
        )}
        checked={useNormalRowGap}
        onChange={() => {
          let temporalValue = useNormalRowGap ? "0" : "normal";
          setUseNormalRowGap((oldValue) => !oldValue);
          setAttributes({ containerRowGap: temporalValue });
        }}
      />
      {!useNormalRowGap && (
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Please select the row gap (px) for the grid container.",
            "caledros-basic-blocks"
          )}
          value={
            isNaN(parseInt(containerRowGap)) ? 0 : parseInt(containerRowGap)
          }
          max={200}
          min={0}
          step={1}
          onChange={(newRowGap) =>
            setAttributes({ containerRowGap: `${newRowGap}px` })
          }
        />
      )}
    </PanelBody>
  );
}
