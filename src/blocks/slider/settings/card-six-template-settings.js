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

import { PanelBody, ComboboxControl } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";

export default function CardSixTemplateSettings({ attributes, setAttributes }) {
  const { cardSixSlug } = attributes;

  let overlayOptions = [];

  // Fetch available template parts
  const { hasResolved, records } = useEntityRecords(
    "postType",
    "wp_template_part",
    { per_page: -1 }
  );

  // Recover the available template parts for the mega menu
  if (hasResolved) {
    overlayOptions = records
      .filter((item) => item.area === "slider-card")
      .map((item) => ({
        label: item.title.rendered,
        value: item.slug,
      }));
  }

  return (
    <PanelBody
      title={__("6th Card Template", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ComboboxControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__(
          "Select the template for the 6th card.",
          "caledros-basic-blocks"
        )}
        value={cardSixSlug}
        options={overlayOptions}
        onChange={(slugValue) => {
          setAttributes({ cardSixSlug: slugValue });
        }}
      />
    </PanelBody>
  );
}
