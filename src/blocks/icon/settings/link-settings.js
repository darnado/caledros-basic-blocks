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

import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function LinkSettings({ attributes, setAttributes }) {
  const { iconLink, iconLinkEnabled } = attributes;
  return (
    <PanelBody
      title={__("Icon link", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        checked={iconLinkEnabled}
        label={__("Enable icon link", "caledros-basic-blocks")}
        onChange={(newValue) => {
          setAttributes({ iconLinkEnabled: newValue });
        }}
      />
      {iconLinkEnabled && (
        <TextControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          onChange={(newLink) => setAttributes({ iconLink: newLink })}
          value={__(iconLink, "caledros-basic-blocks")}
          help={__("Paste the link for the icon", "caledros-basic-blocks")}
        />
      )}
    </PanelBody>
  );
}
