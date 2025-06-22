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

import { Button, PanelBody, FocalPointPicker } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";

export default function BackgroundImageSettings({ attributes, setAttributes }) {
  const { containerBackgroundImage, containerBgImageFocalPoint } = attributes;

  // Function for choosing the image
  const selectImg = (image) => {
    setAttributes({
      containerBackgroundImage: {
        id: image.id,
        alt: image.alt,
        url: image.url,
      },
    });
  };

  // Function for removing the image
  const removeImg = () => {
    setAttributes({
      containerBackgroundImage: {
        id: "",
        alt: "",
        url: "",
      },
    });
  };
  return (
    <PanelBody
      title={__("Background image", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <MediaUploadCheck>
        <MediaUpload
          allowedTypes={["image"]}
          value={containerBackgroundImage.id}
          render={({ open }) => (
            <>
              {containerBackgroundImage.url && (
                <FocalPointPicker
                  __nextHasNoMarginBottom
                  onChange={(newValue) => {
                    setAttributes({
                      containerBgImageFocalPoint: newValue,
                    });
                  }}
                  url={containerBackgroundImage.url}
                  value={containerBgImageFocalPoint}
                />
              )}

              <div style={{ display: "flex", gap: "10px" }}>
                <Button variant="primary" onClick={open}>
                  Select image
                </Button>
                <Button variant="secondary" onClick={removeImg}>
                  Remove image
                </Button>
              </div>
            </>
          )}
          onSelect={selectImg}
        />
      </MediaUploadCheck>
    </PanelBody>
  );
}
