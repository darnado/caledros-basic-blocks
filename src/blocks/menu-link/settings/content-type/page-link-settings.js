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

import { ComboboxControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";

export default function PageLinkSettings({ attributes, setAttributes }) {
  const { menuLink } = attributes;
  let linkOptions = [];

  // Fetch available links for the menu item (pages, posts)
  const { hasResolved, records } = useEntityRecords("postType", "page", {
    per_page: -1,
    status: "publish",
  });

  // Recover the available links
  if (hasResolved) {
    linkOptions = records.map((item) => ({
      label: item.title.rendered,
      value: item.link,
    }));
  }

  return (
    <ComboboxControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      label={__("Page link", "caledros-basic-blocks")}
      help={__(
        "Select the page to link with the menu item.",
        "caledros-basic-blocks"
      )}
      value={menuLink}
      options={linkOptions}
      onChange={(linkValue) => setAttributes({ menuLink: linkValue })}
    />
  );
}
