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

export default function ColumnGapSettings({ attributes, setAttributes }) {
  const { containerColumnGap } = attributes;
  const [useNormalColumnGap, setUseNormalColumnGap] = useState(
    containerColumnGap === "normal" ? true : false
  );
  return (
    <PanelBody
      title={__("Column gap", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__(
          "Use normal column gap (default value)",
          "caledros-basic-blocks"
        )}
        checked={useNormalColumnGap}
        onChange={() => {
          const temporalValue = useNormalColumnGap ? "0" : "normal";
          setUseNormalColumnGap((oldValue) => !oldValue);
          setAttributes({ containerColumnGap: temporalValue });
        }}
      />
      {!useNormalColumnGap && (
        <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__(
            "Please select the column gap (px) for the flex container.",
            "caledros-basic-blocks"
          )}
          value={
            isNaN(parseInt(containerColumnGap))
              ? 0
              : parseInt(containerColumnGap)
          }
          max={200}
          min={0}
          step={1}
          onChange={(newColumnGap) =>
            setAttributes({ containerColumnGap: `${newColumnGap}px` })
          }
        />
      )}
    </PanelBody>
  );
}
