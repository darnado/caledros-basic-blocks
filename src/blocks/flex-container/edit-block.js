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
import MinHeightSettings from "./settings/min-height-settings";
import BackgroundLightColorSettings from "./settings/background-light-color-settings";
import BackgroundDarkColorSettings from "./settings/background-dark-color-settings";
import BackgroundImageSettings from "./settings/background-image-settings";
import BackgroundLightGradientSettings from "./settings/background-light-gradient-settings";
import BackgroundDarkGradientSettings from "./settings/background-dark-gradient-settings";
import BorderStyleSettings from "./settings/border-style-settings";
import BorderWidthSettings from "./settings/border-width-settings";
import BorderLightColorSettings from "./settings/border-light-color-settings";
import BorderDarkColorSettings from "./settings/border-dark-color-settings";
import BorderRadiusSettings from "./settings/border-radius-settings";
import BoxShadowSettings from "./settings/box-shadow-settings";
import MarginSettings from "./settings/margin-settings";
import PaddingSettings from "./settings/padding-settings";
import FlexDirectionSettings from "./settings/flex-direction-settings";
import FlexDirectionTabletSettings from "./settings/flex-direction-tablet-settings";
import FlexDirectionMobileSettings from "./settings/flex-direction-mobile-settings";
import JustifyContentSettings from "./settings/justify-content-settings";
import AlignItemsSettings from "./settings/align-items-settings";
import RowGapSettings from "./settings/row-gap-settings";
import ColumnGapSettings from "./settings/column-gap-settings";
import OverflowSettings from "./settings/overflow-settings";
import FullWidthTabletSettings from "./settings/full-width-tablet-settings";
import FullWidthMobileSettings from "./settings/full-width-mobile-settings";
import JustifyContentTabletSettings from "./settings/justify-content-tablet-settings";
import JustifyContentMobileSettings from "./settings/justify-content-mobile-settings";
import AlignItemsTabletSettings from "./settings/align-items-tablet-settings";
import AlignItemsMobileSettings from "./settings/align-items-mobile-settings";

export default function EditBlock({ attributes, setAttributes }) {
  // Block attributes
  const {
    containerWidth,
    containerMinHeight,
    containerColumnGap,
    containerRowGap,
    containerLightBackgroundColor,
    containerDarkBackgroundColor,
    containerBackgroundImage,
    containerBgImageFocalPoint,
    containerLightBackgroundGradient,
    containerDarkBackgroundGradient,
    containerBorder,
    containerBoxShadow,
    containerMargin,
    containerPadding,
    containerFlexDirection,
    containerJustifyContent,
    containerAlignItems,
    containerOverflow,
    fullWidthMobileEnabled,
    fullWidthTabletEnabled,
    containerJustifyContentTablet,
    containerJustifyContentMobile,
    containerAlignItemsTablet,
    containerAlignItemsMobile,
  } = attributes;

  // Function to generate the content of background-image
  const bgImageCssVariable = (imgUrl, gradient, theme) => {
    if (!imgUrl && !gradient) {
      return {};
    }
    return {
      [`--cbb-${theme}-bg-gradient`]: [gradient, imgUrl && `url(${imgUrl})`]
        .filter((value) => value)
        .join(", "),
    };
  };

  // Class names list
  const classNamesList = [
    "cbb-flex-container",
    containerBoxShadow.enabled && "cbb-flex-container--has-box-shadow",
    containerBorder.width !== "0px" &&
      containerBorder.style !== "none" &&
      (containerBorder.lightColor !== "#00000000" ||
        containerBorder.darkColor !== "#00000000") &&
      "cbb-flex-container--has-border",
    (containerLightBackgroundColor !== "#00000000" ||
      containerDarkBackgroundColor !== "#00000000") &&
      "cbb-flex-container--has-bg-color",
    (containerLightBackgroundGradient !== "" ||
      containerDarkBackgroundGradient !== "" ||
      containerBackgroundImage.url) &&
      "cbb-flex-container--has-bg-gradient",
    fullWidthTabletEnabled && "cbb-flex-container--full-width-tablet",
    fullWidthMobileEnabled && "cbb-flex-container--full-width-mobile",
    containerJustifyContentTablet.enabled &&
      "cbb-flex-container--custom-just-content-tablet",
    containerJustifyContentMobile.enabled &&
      "cbb-flex-container--custom-just-content-mobile",
    containerAlignItemsTablet.enabled &&
      "cbb-flex-container--custom-align-items-tablet",
    containerAlignItemsMobile.enabled &&
      "cbb-flex-container--custom-align-items-mobile",
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
            "--cbb-fc-padding":
              "0px var(--wp--style--root--padding-right, 0px) 0px var(--wp--style--root--padding-left, 0px)",
          }
        : {
            "--cbb-fc-padding": containerPadding.differentPaddingsEnabled
              ? `${containerPadding.top} ${containerPadding.right} ${containerPadding.bottom} ${containerPadding.left}`
              : `${containerPadding.top}`,
          }),
      "--cbb-fdir-lg": containerFlexDirection.desktop,
      "--cbb-fdir-md": containerFlexDirection.tablet,
      "--cbb-fdir-sm": containerFlexDirection.mobile,
      "--cbb-just-content": containerJustifyContent,
      ...(containerJustifyContentTablet.enabled && {
        "--cbb-just-content-md": containerJustifyContentTablet.value,
      }),
      ...(containerJustifyContentMobile.enabled && {
        "--cbb-just-content-sm": containerJustifyContentMobile.value,
      }),
      "--cbb-align-items": containerAlignItems,
      ...(containerAlignItemsTablet.enabled && {
        "--cbb-align-items-md": containerAlignItemsTablet.value,
      }),
      ...(containerAlignItemsMobile.enabled && {
        "--cbb-align-items-sm": containerAlignItemsMobile.value,
      }),
      "--cbb-min-height": containerMinHeight,
      "--cbb-row-gap": containerRowGap,
      "--cbb-column-gap": containerColumnGap,
      "--cbb-light-bg-color": containerLightBackgroundColor,
      "--cbb-dark-bg-color": containerDarkBackgroundColor,
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
      "--cbb-bg-position": `${containerBgImageFocalPoint.x * 100}% ${
        containerBgImageFocalPoint.y * 100
      }%`,
      "--cbb-br-style":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000")
          ? containerBorder.style
          : "none",
      "--cbb-br-width":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000")
          ? containerBorder.width
          : "0px",
      "--cbb-light-border-color":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.lightColor !== "#00000000"
          ? containerBorder.lightColor
          : "#00000000",
      "--cbb-dark-border-color":
        containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.darkColor !== "#00000000"
          ? containerBorder.darkColor
          : "#00000000",
      "--cbb-br-radius": containerBorder.radius,
      "--cbb-light-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.lightColor}`,
      "--cbb-dark-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.darkColor}`,
      "--cbb-overflow": containerOverflow,
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
                  <FlexDirectionSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FlexDirectionSettings>
                  <FlexDirectionTabletSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FlexDirectionTabletSettings>
                  <FlexDirectionMobileSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FlexDirectionMobileSettings>
                  <WidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></WidthSettings>
                  <FullWidthTabletSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FullWidthTabletSettings>
                  <FullWidthMobileSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FullWidthMobileSettings>
                  <MinHeightSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></MinHeightSettings>
                  <RowGapSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></RowGapSettings>
                  <ColumnGapSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ColumnGapSettings>
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
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
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
                  <JustifyContentTabletSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></JustifyContentTabletSettings>
                  <JustifyContentMobileSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></JustifyContentMobileSettings>
                  <AlignItemsSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AlignItemsSettings>
                  <AlignItemsTabletSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AlignItemsTabletSettings>
                  <AlignItemsMobileSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AlignItemsMobileSettings>
                  <OverflowSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OverflowSettings>
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
