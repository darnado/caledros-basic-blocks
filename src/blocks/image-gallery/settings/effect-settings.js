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

export default function EffectSettings({ attributes, setAttributes }) {
  const { galleryEffect } = attributes;

  return (
    <PanelBody
      title={__("Effect", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__("Choose the effect for the gallery.", "caledros-basic-blocks")}
        value={galleryEffect}
        options={[
          {
            label: "None",
            value: "none",
          },
          {
            label: "Fade",
            value: "fade",
          },
          {
            label: "Coverflow",
            value: "coverflow",
          },
        ]}
        onChange={(newValue) => {
          setAttributes({
            galleryEffect: newValue,
          });
        }}
      />
    </PanelBody>
  );
}
