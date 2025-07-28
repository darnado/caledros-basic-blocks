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

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function SaveBlock({ attributes }) {
  const {
    containerWidth,
    containerMinHeight,
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
    containerRowGap,
    containerColumnGap,
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

  // Class Names List
  const classNamesList = [
    "cbb-flex-container",
    containerPadding.useGlobalPadding && "has-global-padding",
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
      containerDarkBackgroundGradient !== "") &&
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
  const blockProperties = useBlockProps.save({
    className: `${classNamesList}`,
    style: {
      maxWidth: containerWidth,
      width: "100%",
      margin: containerMargin.differentMarginsEnabled
        ? `${containerMargin.top} ${containerMargin.right} ${containerMargin.bottom} ${containerMargin.left}`
        : `${containerMargin.top}`,
      ...(!containerPadding.useGlobalPadding && {
        padding: containerPadding.differentPaddingsEnabled
          ? `${containerPadding.top} ${containerPadding.right} ${containerPadding.bottom} ${containerPadding.left}`
          : `${containerPadding.top}`,
      }),
      ...(containerLightBackgroundColor !== "#00000000" && {
        "--cbb-light-bg-color": containerLightBackgroundColor,
      }),
      ...(containerDarkBackgroundColor !== "#00000000" && {
        "--cbb-dark-bg-color": containerDarkBackgroundColor,
      }),
      ...(containerJustifyContent !== "flex-start" && {
        justifyContent: containerJustifyContent,
      }),
      ...(containerJustifyContentTablet.enabled && {
        "--cbb-just-content-md": containerJustifyContentTablet.value,
      }),
      ...(containerJustifyContentMobile.enabled && {
        "--cbb-just-content-sm": containerJustifyContentMobile.value,
      }),
      ...(containerAlignItems !== "normal" && {
        alignItems: containerAlignItems,
      }),
      ...(containerAlignItemsTablet.enabled && {
        "--cbb-align-items-md": containerAlignItemsTablet.value,
      }),
      ...(containerAlignItemsMobile.enabled && {
        "--cbb-align-items-sm": containerAlignItemsMobile.value,
      }),
      ...(containerMinHeight !== 0 && {
        minHeight: containerMinHeight,
      }),
      ...(containerRowGap !== "normal" && {
        rowGap: containerRowGap,
      }),
      ...(containerColumnGap !== "normal" && {
        columnGap: containerColumnGap,
      }),
      ...(containerLightBackgroundGradient !== "" ||
      containerDarkBackgroundGradient !== ""
        ? {
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
          }
        : {
            ...(containerBackgroundImage.url && {
              backgroundImage: `url(${containerBackgroundImage.url})`,
            }),
          }),
      ...(containerBackgroundImage.url !== "" && {
        backgroundPosition: `${containerBgImageFocalPoint.x * 100}% ${
          containerBgImageFocalPoint.y * 100
        }%`,
      }),
      ...(containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000") && {
          borderStyle: containerBorder.style,
        }),
      ...(containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        (containerBorder.lightColor !== "#00000000" ||
          containerBorder.darkColor !== "#00000000") && {
          borderWidth: containerBorder.width,
        }),
      ...(containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.lightColor !== "#00000000" && {
          "--cbb-light-border-color": containerBorder.lightColor,
        }),
      ...(containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.darkColor !== "#00000000" && {
          "--cbb-dark-border-color": containerBorder.darkColor,
        }),
      ...(containerBorder.radius !== "0px" &&
        containerBorder.radius !== "0%" && {
          borderRadius: containerBorder.radius,
        }),
      ...(containerBoxShadow.enabled && {
        "--cbb-light-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.lightColor}`,
      }),
      ...(containerBoxShadow.enabled && {
        "--cbb-dark-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.darkColor}`,
      }),
      ...(containerOverflow !== "visible" && {
        overflow: containerOverflow,
      }),
      "--cbb-fdir-lg": containerFlexDirection.desktop,
      "--cbb-fdir-md": containerFlexDirection.tablet,
      "--cbb-fdir-sm": containerFlexDirection.mobile,
    },
  });

  return (
    <div {...blockProperties}>
      <InnerBlocks.Content />
    </div>
  );
}
