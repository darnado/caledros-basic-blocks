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

export default function AuthorFilterSettings({ attributes, setAttributes }) {
  const { authorFilter, pageType } = attributes;

  let authorOptions = [];

  // Fetch all categories
  const { hasResolved, records } = useEntityRecords("root", "user", {
    who: "authors",
    per_page: -1,
  });

  // Build options once data is fetched
  if (hasResolved && records) {
    authorOptions = records.map((author) => ({
      label: author.name,
      value: author.id,
    }));
  }

  return (
    <PanelBody
      title={__("Filter by author", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Filter posts by author", "caledros-basic-blocks")}
        help={__(
          "Choose whether or not the posts will be filtered by author.",
          "caledros-basic-blocks"
        )}
        checked={authorFilter.enable}
        disabled={pageType === "author-template"}
        onChange={(newValue) => {
          setAttributes({
            authorFilter: {
              ...authorFilter,
              enable: newValue,
            },
          });
        }}
      />
      {authorFilter.enable && (
        <ComboboxControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__("Choose the author.", "caledros-basic-blocks")}
          value={authorFilter.authorId}
          options={authorOptions}
          onChange={(selectedValue) => {
            setAttributes({
              authorFilter: {
                ...authorFilter,
                authorId: selectedValue,
              },
            });
          }}
        />
      )}
    </PanelBody>
  );
}
