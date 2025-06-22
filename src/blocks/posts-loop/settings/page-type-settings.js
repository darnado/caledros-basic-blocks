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

export default function PageTypeSettings({ attributes, setAttributes }) {
  const { pageType, categoryFilter } = attributes;

  return (
    <PanelBody
      title={__("Page type", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__(
          "Choose the type of page where the loop will be displayed.",
          "caledros-basic-blocks"
        )}
        value={pageType}
        options={[
          {
            label: "Front page",
            value: "front-page",
          },
          {
            label: "Other static page",
            value: "regular-page",
          },
          {
            label: "Category template",
            value: "category-template",
          },
          {
            label: "Tag template",
            value: "tag-template",
          },
          {
            label: "Search results page",
            value: "search-results-page",
          },
        ]}
        onChange={(newValue) => {
          const newAttributes = {
            pageType: newValue,
          };

          if (newValue === "category-template") {
            newAttributes.categoryFilter = {
              ...categoryFilter,
              enable: false,
            };
          }
          setAttributes(newAttributes);
        }}
      />
    </PanelBody>
  );
}
