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

import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function MegaMenuWidthSettings({ attributes, setAttributes }) {
  const { megaMenuWidth } = attributes;

  return (
    <PanelBody
      title={__("Mega menu width", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <RangeControl
        __nextHasNoMarginBottom
        help={__(
          "Please select the width for the mega menu. To ensure a more cohesive design, the width of the mega menu should match the container width specified in the mega menu template editor.",
          "caledros-basic-blocks"
        )}
        value={megaMenuWidth}
        max={2000}
        min={0}
        step={1}
        onChange={(newWidth) => {
          setAttributes({ megaMenuWidth: newWidth });
        }}
      />
    </PanelBody>
  );
}
