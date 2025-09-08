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
import { __ } from "@wordpress/i18n";

export default function SaveBlock({ attributes }) {
  const {
    buttonText,
    buttonLink,
    buttonLightColor,
    buttonDarkColor,
    buttonHoverLightColor,
    buttonHoverDarkColor,
    buttonTextLightColor,
    buttonTextDarkColor,
    buttonFontFamily,
    buttonFontWeight,
    buttonFontStyle,
    buttonFontSize,
    buttonLetterSpacing,
    buttonBorder,
    buttonMargin,
    buttonPadding,
    buttonType,
    buttonIcon,
    buttonIconSize,
    buttonIconColor,
    buttonIconDarkColor,
    buttonIconFlexDirection,
    buttonHoverTextLightColor,
    buttonHoverTextDarkColor,
    iconHoverLightColor,
    iconHoverDarkColor,
    borderHoverLightColor,
    borderHoverDarkColor,
    contentGap,
  } = attributes;

  // Class list
  const classesList = [
    "cbb-button",
    `${buttonType === "button-with-icon" ? "cbb-button-with-icon" : ""}`,
    `${
      buttonHoverTextLightColor.enabled
        ? "cbb-button--hover-text-light-color"
        : ""
    }`,
    `${
      buttonHoverTextDarkColor.enabled
        ? "cbb-button--hover-text-dark-color"
        : ""
    }`,
    `${iconHoverLightColor.enabled ? "cbb-button--icon-text-light-color" : ""}`,
    `${iconHoverDarkColor.enabled ? "cbb-button--icon-text-dark-color" : ""}`,
    `${
      borderHoverLightColor.enabled
        ? "cbb-button--hover-border-light-color"
        : ""
    }`,
    `${
      borderHoverDarkColor.enabled ? "cbb-button--hover-border-dark-color" : ""
    }`,
  ]
    .filter((classItem) => classItem)
    .join(" ");

  // Block properties
  const blockProperties = useBlockProps.save({
    className: classesList,
    style: {
      "--cbb-button-light-color": buttonLightColor,
      "--cbb-button-dark-color": buttonDarkColor,
      "--cbb-button-hover-light-color": buttonHoverLightColor,
      "--cbb-button-hover-dark-color": buttonHoverDarkColor,
      "--cbb-button-text-light-color": buttonTextLightColor,
      ...(buttonHoverTextLightColor.enabled && {
        "--cbb-button-hover-text-light-color": buttonHoverTextLightColor.value,
      }),
      "--cbb-button-text-dark-color": buttonTextDarkColor,
      ...(buttonHoverTextDarkColor.enabled && {
        "--cbb-button-hover-text-dark-color": buttonHoverTextDarkColor.value,
      }),
      ...(buttonType === "button-with-icon" && {
        "--cbb-button-flex-direction": buttonIconFlexDirection,
      }),
      ...(buttonFontFamily !== "" && {
        fontFamily: `var(--wp--preset--font-family--${buttonFontFamily})`,
      }),
      fontWeight: buttonFontWeight,
      fontStyle: buttonFontStyle,
      fontSize: buttonFontSize,
      ...(buttonBorder.width !== "0px" &&
        buttonBorder.style !== "none" &&
        (buttonBorder.lightColor !== "#00000000" ||
          buttonBorder.darkColor !== "#00000000") && {
          borderStyle: buttonBorder.style,
        }),
      ...(buttonBorder.width !== "0px" &&
        buttonBorder.style !== "none" &&
        (buttonBorder.lightColor !== "#00000000" ||
          buttonBorder.darkColor !== "#00000000") && {
          borderWidth: buttonBorder.width,
        }),
      ...(buttonBorder.width !== "0px" &&
        buttonBorder.style !== "none" &&
        buttonBorder.lightColor !== "#00000000" && {
          "--cbb-button-light-border-color": buttonBorder.lightColor,
        }),
      ...(buttonBorder.width !== "0px" &&
        buttonBorder.style !== "none" &&
        buttonBorder.darkColor !== "#00000000" && {
          "--cbb-button-dark-border-color": buttonBorder.darkColor,
        }),
      ...(borderHoverLightColor.enabled && {
        "--cbb-button-border-hover-light-color": borderHoverLightColor.value,
      }),
      ...(borderHoverDarkColor.enabled && {
        "--cbb-button-border-hover-dark-color": borderHoverDarkColor.value,
      }),
      ...(buttonBorder.radius !== "0px" &&
        buttonBorder.radius !== "0%" && {
          borderRadius: buttonBorder.radius,
        }),
      ...(buttonLetterSpacing !== "normal" && {
        letterSpacing: buttonLetterSpacing,
      }),
      margin: buttonMargin.differentMarginsEnabled
        ? `${buttonMargin.top} ${buttonMargin.right} ${buttonMargin.bottom} ${buttonMargin.left}`
        : `${buttonMargin.top}`,
      padding: buttonPadding.differentPaddingsEnabled
        ? `${buttonPadding.top} ${buttonPadding.right} ${buttonPadding.bottom} ${buttonPadding.left}`
        : `${buttonPadding.top}`,
      ...(contentGap.enabled && {
        "--cbb-content-gap": `${contentGap.value}px`,
      }),
    },
  });

  return (
    <>
      {buttonType === "simple-button" && (
        <a {...blockProperties} href={buttonLink}>
          {buttonText}
        </a>
      )}
      {buttonType !== "simple-button" && (
        <a {...blockProperties} href={buttonLink}>
          {buttonText}
          <span
            className={`cbb-button__icon cbb-button__icon--${buttonIcon}`}
            style={{
              "--cbb-icon-size": `${buttonIconSize}px`,
              "--cbb-icon-color": buttonIconColor,
              "--cbb-icon-dark-color": buttonIconDarkColor,
              ...(iconHoverLightColor.enabled && {
                "--cbb-hover-icon-light-color": iconHoverLightColor.value,
              }),
              ...(iconHoverDarkColor.enabled && {
                "--cbb-hover-icon-dark-color": iconHoverDarkColor.value,
              }),
            }}
          >
            <span className="cbb-button__icon-container"></span>
            <span className="cbb-button__icon-content"></span>
          </span>
        </a>
      )}
    </>
  );
}
