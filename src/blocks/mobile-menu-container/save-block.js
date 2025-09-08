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
    stickyNavigationEnabled,
    stickyNavHeight,
    stickyNavLightBackgroundColor,
    stickyNavDarkBackgroundColor,
    containerDarkBackgroundColor,
    containerDarkBackgroundGradient,
    centerStickyNav,
    overlayStickyNav,
    overlayNav,
    stickyNavBoxShadow,
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
    containerPadding.useGlobalPadding && "has-global-padding",
    stickyNavigationEnabled && "cbb-mobile-menu-container--sticky",
    containerBoxShadow.enabled && "cbb-mobile-menu-container--has-box-shadow",
    (containerLightBackgroundColor !== "#00000000" ||
      containerDarkBackgroundColor !== "#00000000") &&
      "cbb-mobile-menu-container--has-bg-color",
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
        "--cbb-mm-light-bg-color": containerLightBackgroundColor,
      }),
      ...(containerDarkBackgroundColor !== "#00000000" && {
        "--cbb-mm-dark-bg-color": containerDarkBackgroundColor,
      }),
      ...(containerJustifyContent !== "flex-start" && {
        justifyContent: containerJustifyContent,
      }),
      ...(containerAlignItems !== "normal" && {
        alignItems: containerAlignItems,
      }),
      ...(containerHeight !== 0 && {
        "--cbb-mm-height": containerHeight,
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
          "--cbb-mm-light-border-color": containerBorder.lightColor,
        }),
      ...(containerBorder.width !== "0px" &&
        containerBorder.style !== "none" &&
        containerBorder.darkColor !== "#00000000" && {
          "--cbb-mm-dark-border-color": containerBorder.darkColor,
        }),
      ...(containerBorder.radius !== "0px" &&
        containerBorder.radius !== "0%" && {
          borderRadius: containerBorder.radius,
        }),
      ...(containerBoxShadow.enabled && {
        "--cbb-mm-light-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.lightColor}`,
      }),
      ...(containerBoxShadow.enabled && {
        "--cbb-mm-dark-box-shadow": `${containerBoxShadow.style} ${containerBoxShadow.hOffset} ${containerBoxShadow.vOffset} ${containerBoxShadow.blur} ${containerBoxShadow.spread} ${containerBoxShadow.darkColor}`,
      }),
      ...(containerOverflow !== "visible" && {
        overflow: containerOverflow,
      }),
      ...(stickyNavigationEnabled &&
        stickyNavHeight !== 0 && {
          "--cbb-mm-sticky-height": stickyNavHeight,
        }),
      ...(stickyNavigationEnabled && {
        "--cbb-mm-sticky-light-bg-color": stickyNavLightBackgroundColor,
      }),
      ...(stickyNavigationEnabled && {
        "--cbb-mm-sticky-dark-bg-color": stickyNavDarkBackgroundColor,
      }),
      ...(centerStickyNav && {
        left: 0,
        right: 0,
      }),
      ...(overlayNav
        ? {
            "--cbb-dm-position": "absolute",
            left: 0,
            right: 0,
          }
        : {
            "--cbb-dm-position": "relative",
          }),
      ...(stickyNavBoxShadow.enabled && {
        "--cbb-mm-sticky-light-box-shadow": `${stickyNavBoxShadow.style} ${stickyNavBoxShadow.hOffset} ${stickyNavBoxShadow.vOffset} ${stickyNavBoxShadow.blur} ${stickyNavBoxShadow.spread} ${stickyNavBoxShadow.lightColor}`,
      }),
      ...(stickyNavBoxShadow.enabled && {
        "--cbb-mm-sticky-dark-box-shadow": `${stickyNavBoxShadow.style} ${stickyNavBoxShadow.hOffset} ${stickyNavBoxShadow.vOffset} ${stickyNavBoxShadow.blur} ${stickyNavBoxShadow.spread} ${stickyNavBoxShadow.darkColor}`,
      }),
      ...(containerBlur.enabled && {
        "--cbb-blur": `${containerBlur.value}`,
      }),
    },
  });

  if (stickyNavigationEnabled) {
    return (
      <>
        <div className="cbb-mobile-menu-container__watcher"></div>
        <div {...blockProperties}>
          <InnerBlocks.Content />
        </div>
        <div
          className="cbb-mobile-menu-container__spacer-bottom"
          style={{
            "--cbb-spacer-bottom": `${
              overlayStickyNav ? "0px" : containerHeight
            }`,
          }}
        ></div>
      </>
    );
  } else {
    return (
      <div {...blockProperties}>
        <InnerBlocks.Content />
      </div>
    );
  }
}
