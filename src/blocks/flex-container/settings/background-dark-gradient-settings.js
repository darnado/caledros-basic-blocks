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

import {
  PanelBody,
  CustomGradientPicker,
  ToggleControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

export default function BackgroundDarkGradientSettings({
  attributes,
  setAttributes,
}) {
  const { containerDarkBackgroundGradient } = attributes;
  const [enableGradient, setEnableGradient] = useState(
    containerDarkBackgroundGradient !== "" ? true : false
  );

  return (
    <PanelBody
      title={__("Background gradient (dark mode)", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Enable background gradient", "caledros-basic-blocks")}
        checked={enableGradient}
        onChange={() => {
          setEnableGradient((oldValue) => !oldValue);
          setAttributes({ containerDarkBackgroundGradient: "" });
        }}
      />
      {enableGradient && (
        <CustomGradientPicker
          onChange={(newGradient) => {
            setAttributes({
              containerDarkBackgroundGradient: newGradient,
            });
          }}
          value={
            containerDarkBackgroundGradient === ""
              ? "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
              : containerDarkBackgroundGradient
          }
        />
      )}
    </PanelBody>
  );
}
