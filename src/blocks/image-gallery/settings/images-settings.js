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

import { PanelBody, Button } from "@wordpress/components";
import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function ImagesSettings({ attributes, setAttributes }) {
  const { images } = attributes;

  // Functions
  const onSelectImages = (newImages) => {
    setAttributes({
      images: newImages.map((image) => ({
        id: image.id,
        url: image.url,
        alt: image.alt,
      })),
    });
  };

  return (
    <PanelBody
      title={__("Image Settings", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <MediaUploadCheck>
        <MediaUpload
          onSelect={onSelectImages}
          allowedTypes={["image"]}
          multiple={true}
          gallery={true}
          value={images.map((image) => image.id)}
          render={({ open }) => (
            <Button onClick={open} variant="secondary">
              {images.length === 0
                ? __("Add Images", "caledros-basic-blocks")
                : __("Edit Gallery", "caledros-basic-blocks")}
            </Button>
          )}
        />
      </MediaUploadCheck>
    </PanelBody>
  );
}
