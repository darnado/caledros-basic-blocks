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
  ComboboxControl,
  ToggleControl,
} from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import { __ } from "@wordpress/i18n";

export default function TagFilterSettings({ attributes, setAttributes }) {
  const { tagFilter, pageType } = attributes;

  let tagsOptions = [];

  // Fetch all tags
  const { hasResolved, records } = useEntityRecords("taxonomy", "post_tag", {
    per_page: -1,
  });

  // Build options once data is fetched
  if (hasResolved && records) {
    tagsOptions = records.map((tag) => ({
      label: tag.name,
      value: tag.id,
    }));
  }

  return (
    <PanelBody
      title={__("Filter by tag", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Filter posts by tag", "caledros-basic-blocks")}
        help={__(
          "Choose whether or not the posts will be filtered by tag.",
          "caledros-basic-blocks"
        )}
        checked={tagFilter.enable}
        disabled={pageType === "tag-template"}
        onChange={(newValue) => {
          setAttributes({
            tagFilter: {
              ...tagFilter,
              enable: newValue,
            },
          });
        }}
      />
      {tagFilter.enable && (
        <ComboboxControl
          __nextHasNoMarginBottom
          help={__("Choose the tag.", "caledros-basic-blocks")}
          value={tagFilter.tagId}
          options={tagsOptions}
          onChange={(selectedValue) => {
            setAttributes({
              tagFilter: {
                ...tagFilter,
                tagId: selectedValue,
              },
            });
          }}
        />
      )}
    </PanelBody>
  );
}
