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
  InnerBlocks,
} from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import WidthSettings from "./settings/width-settings";
import HeightSettings from "./settings/height-settings";
import BackgroundImageSettings from "./settings/background-image-settings";
import BackgroundLightGradientSettings from "./settings/background-light-gradient-settings";
import BackgroundDarkGradientSettings from "./settings/background-dark-gradient-settings";
import BackgroundDarkColorSettings from "./settings/background-dark-color-settings";
import BackgroundLightColorSettings from "./settings/background-light-color-settings";
import BorderStyleSettings from "./settings/border-style-settings";
import BorderWidthSettings from "./settings/border-width-settings";
import BorderLightColorSettings from "./settings/border-light-color-settings";
import BorderRadiusSettings from "./settings/border-radius-settings";
import BoxShadowSettings from "./settings/box-shadow-settings";
import MarginSettings from "./settings/margin-settings";
import PaddingSettings from "./settings/padding-settings";
import JustifyContentSettings from "./settings/justify-content-settings";
import AlignItemsSettings from "./settings/align-items-settings";
import ColumnGapSettings from "./settings/column-gap-settings";
import OverflowSettings from "./settings/overflow-settings";
import EnableStickyNavSettings from "./settings/sticky-navigation/enable-sticky-nav-settings";
import StickyNavHeightSettings from "./settings/sticky-navigation/sticky-nav-height-settings";
import StickyNavLightBackgroundColorSettings from "./settings/sticky-navigation/sticky-nav-light-background-color-settings";
import StickyNavDarkBackgroundColorSettings from "./settings/sticky-navigation/sticky-nav-dark-background-color-settings";
import BorderDarkColorSettings from "./settings/border-dark-color-settings";
import CenterStickyNavSettings from "./settings/sticky-navigation/center-sticky-nav-settings";
import OverlayStickyNavSettings from "./settings/sticky-navigation/overlay-sticky-nav-settings";
import OverlayNavSettings from "./settings/overlay-nav-settings";
import StickyNavBoxShadowSettings from "./settings/sticky-navigation/sticky-nav-box-shadow-settings";
import BlurSettings from "./settings/blur-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const {
    containerWidth,
    containerHeight,
    containerColumnGap,
    containerLightBackgroundColor,
    containerBackgroundImage,
    containerBgImageFocalPoint,
    containerLightBackgroundGradient,
    containerBorder,
    containerBoxShadow,
    containerMargin,
    containerPadding,
    containerJustifyContent,
    containerAlignItems,
    containerOverflow,
    containerDarkBackgroundColor,
    containerDarkBackgroundGradient,
    containerBlur,
  } = attributes;

  // Function to generate the content of background-image
  const bgImageCssVariable = (imgUrl, gradient, theme) => {
    if (!imgUrl && !gradient) {
      return {};
    }
    return {
      [`--cbb-mm-${theme}-bg-gradient`]: [gradient, imgUrl && `url(${imgUrl})`]
        .filter((value) => value)
        .join(", "),
    };
  };

  // Class Names List
  const classNamesList = [
    "cbb-mobile-menu-container",
    containerBoxShadow.enabled && "cbb-mobile-menu-container--has-box-shadow",
    containerBorder.width !== "0px" &&
      containerBorder.style !== "none" &&
      (containerBorder.lightColor !== "#00000000" ||
        containerBorder.darkColor !== "#00000000") &&
      "cbb-mobile-menu-container--has-border",
    (containerLightBackgroundGradient !== "" ||
      containerDarkBackgroundGradient !== "") &&
      "cbb-mobile-menu-container--has-bg-gradient",
    containerBlur.enabled && "cbb-mobile-menu-container--has-blur",
  ]
    .filter((className) => className)
    .join(" ");

  // Block properties
  const blockProperties = useBlockProps({
    className: `${classNamesList}`,
    style: {
      maxWidth: `${containerWidth}`,
      width: "100%",
      margin: containerMargin.differentMarginsEnabled
        ? `${containerMargin.top} ${containerMargin.right} ${containerMargin.bottom} ${containerMargin.left}`
        : `${containerMargin.top}`,
      ...(containerPadding.useGlobalPadding
        ? {
            "--cbb-mm-fc-padding":
              "0px var(--wp--style--root--padding-right, 0px) 0px var(--wp--style--root--padding-left, 0px)",
          }
        : {
            "--cbb-mm-fc-padding": containerPadding.differentPaddingsEnabled
              ? `${containerPadding.top} ${containerPadding.right} ${containerPadding.bottom} ${containerPadding.left}`
              : `${containerPadding.top}`,
          }),
      "--cbb-mm-light-bg-color": containerLightBackgroundColor,
      "--cbb-mm-dark-bg-color": containerDarkBackgroundColor,
      "--cbb-mm-just-content": containerJustifyContent,
      "--cbb-mm-align-items": containerAlignItems,
      "--cbb-mm-height": containerHeight,
      "--cbb-mm-column-gap": containerColumnGap,
      ...bgImageCssVariable(
        containerBackgroundImage.url,
        containerDarkBackgroundGradient,
        "dark"
      ),
      ...bgImageCssVariable(
        containerBackgroundImage.url,
        containerLightBackgroundGradient,
        "light"
      ),
      "--cbb-mm-bg-position": `${containerBgImageFocalPoint.x * 100}% ${
        containerBgImageFocalPoint.y * 100
      }%`,
      "--cbb-mm-br-style":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000")
          ? containerBorder.style
          : "none",
      "--cbb-mm-br-width":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000")
          ? containerBorder.width
          : "0px",
      "--cbb-mm-light-border-color":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.lightColor !== "#00000000"
          ? containerBorder.lightColor
          : "#00000000",
      "--cbb-mm-dark-border-color":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.darkColor !== "#00000000"
          ? containerBorder.darkColor
          : "#00000000",
      "--cbb-mm-br-radius": containerBorder.radius,
      "--cbb-mm-light-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.lightColor}`,
      "--cbb-mm-dark-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.darkColor}`,
      "--cbb-mm-overflow": containerOverflow,
      ...(containerBlur.enabled && {
        "--cbb-blur": `${containerBlur.value}`,
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
              name: "sticky-navbar",
              title: "Sticky",
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
                  <ColumnGapSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ColumnGapSettings>
                  <MarginSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></MarginSettings>
                  <PaddingSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PaddingSettings>
                  <JustifyContentSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></JustifyContentSettings>
                  <AlignItemsSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AlignItemsSettings>
                  <OverflowSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OverflowSettings>
                  <OverlayNavSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OverlayNavSettings>
                </>
              );
            }
            if (tab.name === "style") {
              return (
                <>
                  <BackgroundLightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BackgroundLightColorSettings>
                  <BackgroundDarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BackgroundDarkColorSettings>
                  <BackgroundImageSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BackgroundImageSettings>
                  <BackgroundLightGradientSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BackgroundLightGradientSettings>
                  <BackgroundDarkGradientSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BackgroundDarkGradientSettings>
                  <BorderStyleSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderStyleSettings>
                  <BorderWidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderWidthSettings>
                  <BorderLightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderLightColorSettings>
                  <BorderDarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderDarkColorSettings>
                  <BorderRadiusSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderRadiusSettings>
                  <BoxShadowSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BoxShadowSettings>
                  <BlurSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BlurSettings>
                </>
              );
            }
            if (tab.name === "sticky-navbar") {
              return (
                <>
                  <EnableStickyNavSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></EnableStickyNavSettings>
                  <StickyNavHeightSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></StickyNavHeightSettings>
                  <StickyNavLightBackgroundColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></StickyNavLightBackgroundColorSettings>
                  <StickyNavDarkBackgroundColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></StickyNavDarkBackgroundColorSettings>
                  <CenterStickyNavSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CenterStickyNavSettings>
                  <OverlayStickyNavSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OverlayStickyNavSettings>
                  <StickyNavBoxShadowSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></StickyNavBoxShadowSettings>
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      <div {...blockProperties}>
        <InnerBlocks />
      </div>
    </>
  );
}
