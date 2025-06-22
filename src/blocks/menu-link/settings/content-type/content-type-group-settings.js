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
import PageLinkSettings from "./page-link-settings";
import PostLinkSettings from "./post-link-settings";
import CustomLinkSettings from "./custom-link-settings";

export default function ContentTypeGroupSettings({
  attributes,
  setAttributes,
}) {
  const { contentType } = attributes;

  return (
    <PanelBody title={__("Link", "caledros-basic-blocks")} initialOpen={false}>
      <SelectControl
        __nextHasNoMarginBottom
        label={__("Content type", "caledros-basic-blocks")}
        help={__(
          "Select the content type to link to.",
          "caledros-basic-blocks"
        )}
        value={contentType}
        options={[
          {
            label: "Page",
            value: "page",
          },
          {
            label: "Post",
            value: "post",
          },
          {
            label: "Custom link",
            value: "custom",
          },
        ]}
        onChange={(newValue) => {
          setAttributes({
            contentType: newValue,
          });
        }}
      />
      {contentType === "page" && (
        <PageLinkSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></PageLinkSettings>
      )}
      {contentType === "post" && (
        <PostLinkSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></PostLinkSettings>
      )}
      {contentType === "custom" && (
        <CustomLinkSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></CustomLinkSettings>
      )}
    </PanelBody>
  );
}
