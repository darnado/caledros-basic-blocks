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

import { MediaPlaceholder } from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { __ } from "@wordpress/i18n";

export default function MediaPlaceholderSettings({
  attributes,
  setAttributes,
  showSpinner,
  setShowSpinner,
}) {
  const { sourceImage } = attributes;

  // Function for formatting the srcset
  const formatSrcset = (imgSizes) => {
    return Object.keys(imgSizes)
      .filter((imgSize) => imgSize !== "thumbnail")
      .map((imgSize) => {
        const { url, width, source_url } = imgSizes[imgSize];
        return `${url || source_url} ${width}w`;
      })
      .join(", ");
  };

  // Function for choosing the image
  const selectImg = (image) => {
    if (isBlobURL(image.url)) {
      setShowSpinner(true);
    } else {
      setShowSpinner(false);
      setAttributes({
        sourceImage: {
          id: image.id,
          alt: image.alt,
          url: image.url,
          height: image.media_details?.height || image.height,
          width: image.media_details?.width || image.width,
          srcSet: `${formatSrcset(image.media_details?.sizes || image.sizes)}`,
          sizes: `(max-width:${
            image.media_details?.width || image.width
          }px) 100vw, ${image.media_details?.width || image.width}px`,
        },
      });
      revokeBlobURL(image.url);
    }
  };

  return (
    <>
      <MediaPlaceholder
        allowedTypes={["image"]}
        accept={"image/*"}
        icon={"camera"}
        onSelect={selectImg}
        onError={(error) => console.error(error)}
        disableMediaButtons={sourceImage.url || showSpinner}
      />
    </>
  );
}
