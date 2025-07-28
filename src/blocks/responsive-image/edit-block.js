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
  useBlockProps,
  InspectorControls,
  BlockControls,
} from "@wordpress/block-editor";
import { Spinner, TabPanel } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { escapeHTML } from "@wordpress/escape-html";
import { __ } from "@wordpress/i18n";
import WidthSettings from "./settings/width-settings";
import HeightSettings from "./settings/height-settings";
import ObjectFitSettings from "./settings/object-fit-settings";
import MarginSettings from "./settings/margin-settings";
import PaddingSettings from "./settings/padding-settings";
import ToolbarGroupSettings from "./settings/toolbar-group-settings";
import MediaPlaceholderSettings from "./settings/media-placeholder-settings";
import LazyLoadSettings from "./settings/lazy-load-settings";
import CaptionSettings from "./settings/caption-settings";
import AltTextSettings from "./settings/alt-text-settings";
import BorderStyleSettings from "./settings/border-style-settings";
import BorderWidthSettings from "./settings/border-width-settings";
import BorderColorSettings from "./settings/border-color-settings";
import BorderRadiusSettings from "./settings/border-radius-settings";
import BoxShadowSettings from "./settings/box-shadow-settings";
import FilterSettings from "./settings/filter-settings";
import ImgLinkSettings from "./settings/image-link-settings";
import LazyLoadingOverlayColorSettings from "./settings/lazy-loading-overlay-color-settings";

export default function EditBlock({ attributes, setAttributes }) {
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
    lazyLoadingOverlayColor,
  } = attributes;

  const [showSpinner, setShowSpinner] = useState(false);

  // Block props
  const blockProps = useBlockProps({
    className: `cbb-resp-img${
      (imgBoxShadow.enabled && imgBoxShadow.style) === "inset"
        ? " inset-shadow"
        : ""
    }`,
    style: {
      margin: imgMargin.differentMarginsEnabled
        ? `${imgMargin.top} ${imgMargin.right} ${imgMargin.bottom} ${imgMargin.left}`
        : `${imgMargin.top}`,
      padding: imgPadding.differentPaddingsEnabled
        ? `${imgPadding.top} ${imgPadding.right} ${imgPadding.bottom} ${imgPadding.left}`
        : `${imgPadding.top}`,
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
      ...(lazyLoadingOverlayColor !== "#00000000" && {
        "--lazy-loading-overlay-color": lazyLoadingOverlayColor,
      }),
    },
  });

  return (
    <>
      <InspectorControls>
        <TabPanel
          activeClass="cbb-active-tab"
          tabs={[
            {
              name: "layout",
              title: "Layout",
            },
            {
              name: "style",
              title: "Style",
            },
            {
              name: "additional",
              title: "Additional",
            },
          ]}
        >
          {(tab) => {
            if (tab.name === "layout") {
              return (
                <>
                  <WidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></WidthSettings>
                  <HeightSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></HeightSettings>
                  <MarginSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></MarginSettings>
                  <PaddingSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PaddingSettings>
                </>
              );
            }
            if (tab.name === "style") {
              return (
                <>
                  <BorderStyleSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderStyleSettings>
                  <BorderWidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderWidthSettings>
                  <BorderColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderColorSettings>
                  <BorderRadiusSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderRadiusSettings>
                  <BoxShadowSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BoxShadowSettings>
                  <FilterSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FilterSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <CaptionSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CaptionSettings>
                  <AltTextSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AltTextSettings>
                  <ImgLinkSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ImgLinkSettings>
                  <ObjectFitSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ObjectFitSettings>
                  <LazyLoadSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LazyLoadSettings>
                  <LazyLoadingOverlayColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LazyLoadingOverlayColorSettings>
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      {sourceImage.url && (
        <BlockControls>
          <ToolbarGroupSettings
            attributes={attributes}
            setAttributes={setAttributes}
            setShowSpinner={setShowSpinner}
          ></ToolbarGroupSettings>
        </BlockControls>
      )}
      <figure {...blockProps}>
        <MediaPlaceholderSettings
          attributes={attributes}
          setAttributes={setAttributes}
          showSpinner={showSpinner}
          setShowSpinner={setShowSpinner}
        ></MediaPlaceholderSettings>
        {showSpinner && (
          <Spinner
            style={{
              height: "60px",
              width: "60px",
              position: "absolute",
              right: "50%",
              transform: "translateX(50%)",
              top: "50px",
              zIndex: "99",
            }}
          />
        )}
        {sourceImage.url && (
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
        )}
        {imgCaption.enabled && <figcaption>{imgCaption.content}</figcaption>}
      </figure>
    </>
  );
}
