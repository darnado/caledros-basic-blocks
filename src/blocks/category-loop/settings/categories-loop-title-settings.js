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

import { Button, PanelBody, TextControl } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import placeholder from "../assets/placeholder.webp";

export default function CategoriesLoopTitle({ attributes, setAttributes }) {
  const { categoriesLoopTitle, categoriesLoopTitleIcon } = attributes;

  // Function for choosing the image
  const selectImg = (image) => {
    setAttributes({
      categoriesLoopTitleIcon: {
        id: image.id,
        alt: image.alt,
        url: image.url,
      },
    });
  };

  // Function for removing the image
  const removeImg = () => {
    setAttributes({
      categoriesLoopTitleIcon: {
        id: "",
        alt: "",
        url: "",
      },
    });
  };

  return (
    <>
      <PanelBody
        title={__("Posts loop title", "caledros-basic-blocks")}
        initialOpen={false}
      >
        <TextControl
          __nextHasNoMarginBottom
          help={__(
            "Write the title for the posts loop.",
            "caledros-basic-blocks"
          )}
          value={categoriesLoopTitle}
          onChange={(newValue) => {
            setAttributes({
              categoriesLoopTitle: newValue,
            });
          }}
        />
      </PanelBody>
      <PanelBody
        title={__("Post title icon", "caledros-basic-blocks")}
        initialOpen={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "0px 5px 10px 5px",
          }}
        >
          <img
            src={
              categoriesLoopTitleIcon.url === ""
                ? placeholder
                : categoriesLoopTitleIcon.url
            }
          ></img>
        </div>
        <MediaUploadCheck>
          <MediaUpload
            allowedTypes={["image"]}
            value={categoriesLoopTitleIcon.id}
            render={({ open }) => (
              <>
                <div style={{ display: "flex", gap: "10px" }}>
                  <Button variant="primary" onClick={open}>
                    Select image
                  </Button>
                  {categoriesLoopTitleIcon.url !== "" && (
                    <Button variant="secondary" onClick={removeImg}>
                      Remove image
                    </Button>
                  )}
                </div>
              </>
            )}
            onSelect={selectImg}
          />
        </MediaUploadCheck>
      </PanelBody>
    </>
  );
}
