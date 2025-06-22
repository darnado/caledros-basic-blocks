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

import { useBlockProps } from "@wordpress/block-editor";
import { escapeHTML } from "@wordpress/escape-html";
import { __ } from "@wordpress/i18n";

export default function SaveBlock({ attributes }) {
  const {
    sourceImage,
    imgWidth,
    imgHeight,
    imgObjectFit,
    imgMargin,
    imgPadding,
    imgLazyLoad,
    imgCaption,
    imgBorder,
    imgBoxShadow,
    imgFilter,
    imgLink,
  } = attributes;

  // Function to ouput the margin and padding
  const outputStyles = (
    dimensionName,
    dimensionValue,
    differentValuesEnabled
  ) => {
    const { top, right, bottom, left } = dimensionValue;

    if (!differentValuesEnabled && parseInt(top) === 0) {
      return {};
    }
    if (differentValuesEnabled) {
      return {
        [dimensionName]: `${top} ${right} ${bottom} ${left}`,
      };
    }
    return {
      [dimensionName]: `${top}`,
    };
  };

  const blockProps = useBlockProps.save({
    className: `cbb-resp-img${
      (imgBoxShadow.enabled && imgBoxShadow.style) === "inset"
        ? " inset-shadow"
        : ""
    }`,
    style: {
      ...outputStyles("margin", imgMargin, imgMargin.differentMarginsEnabled),
      ...outputStyles(
        "padding",
        imgPadding,
        imgPadding.differentPaddingsEnabled
      ),
      maxWidth: imgWidth.defaultWidthEnabled
        ? `${sourceImage.width}px`
        : imgWidth.content,
      height: imgHeight.defaultHeightEnabled
        ? `${sourceImage.height}px`
        : imgHeight.content,
      ...(imgBoxShadow.enabled &&
        imgBoxShadow.style === "inset" && {
          "--inset-box-shadow": `${imgBoxShadow.style} ${imgBoxShadow.hOffset} ${imgBoxShadow.vOffset} ${imgBoxShadow.blur} ${imgBoxShadow.spread} ${imgBoxShadow.color}`,
        }),
      ...(imgBoxShadow.enabled &&
        imgBoxShadow.style === "inset" &&
        imgBorder.radius !== "0px" &&
        imgBorder.radius !== "0%" && {
          "--inset-border-radius": imgBorder.radius,
        }),
    },
  });
  return (
    <>
      {imgLink && (
        <figure {...blockProps}>
          <a className="cbb-resp-img__link" href={imgLink}>
            <img
              src={sourceImage.url}
              alt={escapeHTML(sourceImage.alt)}
              width={sourceImage.width}
              height={sourceImage.height}
              {...(imgLazyLoad && { loading: "lazy" })}
              {...(imgLazyLoad && { className: "lazy-image" })}
              style={{
                objectFit: `${imgObjectFit}`,
                width: "100%",
                height: "100%",
                aspectRatio: `${sourceImage.width}/${sourceImage.height}`,
                ...(imgBorder.width !== "0px" &&
                  imgBorder.style !== "none" &&
                  imgBorder.color !== "#00000000" && {
                    borderStyle: imgBorder.style,
                  }),
                ...(imgBorder.width !== "0px" &&
                  imgBorder.style !== "none" &&
                  imgBorder.color !== "#00000000" && {
                    borderWidth: imgBorder.width,
                  }),
                ...(imgBorder.width !== "0px" &&
                  imgBorder.style !== "none" &&
                  imgBorder.color !== "#00000000" && {
                    borderColor: imgBorder.color,
                  }),
                ...(imgBorder.radius !== "0px" &&
                  imgBorder.radius !== "0%" && {
                    borderRadius: imgBorder.radius,
                  }),
                ...(imgBoxShadow.enabled &&
                  imgBoxShadow.style !== "inset" && {
                    boxShadow: `${imgBoxShadow.style} ${imgBoxShadow.hOffset} ${imgBoxShadow.vOffset} ${imgBoxShadow.blur} ${imgBoxShadow.spread} ${imgBoxShadow.color}`,
                  }),
                ...(!["none", "drop-shadow"].includes(imgFilter.type) && {
                  filter: `${imgFilter.type}(${imgFilter.content})`,
                }),
                ...(imgFilter.type === "drop-shadow" && {
                  filter: `${imgFilter.type}(${imgFilter.hOffset} ${imgFilter.vOffset} ${imgFilter.blur} ${imgFilter.color})`,
                }),
              }}
              srcSet={sourceImage.srcSet}
              sizes={sourceImage.sizes}
            />
          </a>
          {imgCaption.enabled && <figcaption>{imgCaption.content}</figcaption>}
        </figure>
      )}
      {!imgLink && (
        <figure {...blockProps}>
          <img
            src={sourceImage.url}
            alt={escapeHTML(sourceImage.alt)}
            width={sourceImage.width}
            height={sourceImage.height}
            {...(imgLazyLoad && { loading: "lazy" })}
            {...(imgLazyLoad && { className: "lazy-image" })}
            style={{
              objectFit: `${imgObjectFit}`,
              width: "100%",
              height: "100%",
              aspectRatio: `${sourceImage.width}/${sourceImage.height}`,
              ...(imgBorder.width !== "0px" &&
                imgBorder.style !== "none" &&
                imgBorder.color !== "#00000000" && {
                  borderStyle: imgBorder.style,
                }),
              ...(imgBorder.width !== "0px" &&
                imgBorder.style !== "none" &&
                imgBorder.color !== "#00000000" && {
                  borderWidth: imgBorder.width,
                }),
              ...(imgBorder.width !== "0px" &&
                imgBorder.style !== "none" &&
                imgBorder.color !== "#00000000" && {
                  borderColor: imgBorder.color,
                }),
              ...(imgBorder.radius !== "0px" &&
                imgBorder.radius !== "0%" && {
                  borderRadius: imgBorder.radius,
                }),
              ...(imgBoxShadow.enabled &&
                imgBoxShadow.style !== "inset" && {
                  boxShadow: `${imgBoxShadow.style} ${imgBoxShadow.hOffset} ${imgBoxShadow.vOffset} ${imgBoxShadow.blur} ${imgBoxShadow.spread} ${imgBoxShadow.color}`,
                }),
              ...(!["none", "drop-shadow"].includes(imgFilter.type) && {
                filter: `${imgFilter.type}(${imgFilter.content})`,
              }),
              ...(imgFilter.type === "drop-shadow" && {
                filter: `${imgFilter.type}(${imgFilter.hOffset} ${imgFilter.vOffset} ${imgFilter.blur} ${imgFilter.color})`,
              }),
            }}
            srcSet={sourceImage.srcSet}
            sizes={sourceImage.sizes}
          />
          {imgCaption.enabled && <figcaption>{imgCaption.content}</figcaption>}
        </figure>
      )}
    </>
  );
}
