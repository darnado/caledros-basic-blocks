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

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ButtonLightColorSettings from "./settings/button-light-color-settings";
import ButtonDarkColorSettings from "./settings/button-dark-color-settings";
import ButtonLightColorHoverSettings from "./settings/button-light-color-hover-settings";
import ButtonDarkColorHoverSettings from "./settings/button-dark-color-hover-settings";
import ButtonTextLightColorSettings from "./settings/button-text-light-color-settings";
import ButtonTextDarkColorSettings from "./settings/button-text-dark-color-settings";
import TypographyGroupSettings from "./settings/typography/typography-group-settings";
import BorderDarkColorSettings from "./settings/border-dark-color-settings";
import BorderLightColorSettings from "./settings/border-light-color-settings";
import BorderRadiusSettings from "./settings/border-radius-settings";
import BorderStyleSettings from "./settings/border-style-settings";
import BorderWidthSettings from "./settings/border-width-settings";
import ButtonTextContentSettings from "./settings/button-text-content-settings";
import ButtonLinkSettings from "./settings/button-link-settings";
import MarginSettings from "./settings/margin-settings";
import PaddingSettings from "./settings/padding-settings";
import LetterSpacingSettings from "./settings/letter-spacing-settings";
import FontSizeSettings from "./settings/font-size-settings";
import IconSettings from "./settings/icon/icon-settings";
import IconColorSettings from "./settings/icon/icon-color-settings";
import IconDarkColorSettings from "./settings/icon/icon-dark-color-settings";
import IconSizeSettings from "./settings/icon/icon-size-settings";
import IconFlexDirectionSettings from "./settings/icon/icon-flex-direction-settings";
import ButtonHoverTextLightColorSettings from "./settings/button-hover-text-light-color-settings";
import ButtonHoverTextDarkColorSettings from "./settings/button-hover-text-dark-color-settings";
import IconHoverLightColorSettings from "./settings/icon/icon-hover-light-color-settings";
import IconHoverDarkColorSettings from "./settings/icon/icon-hover-dark-color-settings";
import BorderHoverLightColorSettings from "./settings/border-hover-light-color-settings";
import BorderHoverDarkColorSettings from "./settings/border-hover-dark-color-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const {
    buttonText,
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

  // Block props
  const blockProps = useBlockProps({
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
      ...(buttonLetterSpacing !== "normal" && {
        letterSpacing: buttonLetterSpacing,
      }),
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
      margin: buttonMargin.differentMarginsEnabled
        ? `${buttonMargin.top} ${buttonMargin.right} ${buttonMargin.bottom} ${buttonMargin.left}`
        : `${buttonMargin.top}`,
      padding: buttonPadding.differentPaddingsEnabled
        ? `${buttonPadding.top} ${buttonPadding.right} ${buttonPadding.bottom} ${buttonPadding.left}`
        : `${buttonPadding.top}`,
    },
  });

  return (
    <>
      <InspectorControls>
        <TabPanel
          activeClass="cbb-active-tab"
          tabs={[
            {
              name: "content",
              title: "Content",
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
            if (tab.name === "content") {
              if (buttonType === "simple-button") {
                return (
                  <>
                    <ButtonTextContentSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextContentSettings>
                    <ButtonLinkSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLinkSettings>
                    <TypographyGroupSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></TypographyGroupSettings>
                    <FontSizeSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></FontSizeSettings>
                    <LetterSpacingSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></LetterSpacingSettings>
                  </>
                );
              } else {
                return (
                  <>
                    <ButtonTextContentSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextContentSettings>
                    <ButtonLinkSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLinkSettings>
                    <TypographyGroupSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></TypographyGroupSettings>
                    <FontSizeSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></FontSizeSettings>
                    <LetterSpacingSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></LetterSpacingSettings>
                    <IconSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconSettings>
                    <IconSizeSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconSizeSettings>
                  </>
                );
              }
            }
            if (tab.name === "style") {
              if (buttonType === "simple-button") {
                return (
                  <>
                    <ButtonLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLightColorSettings>
                    <ButtonDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonDarkColorSettings>
                    <ButtonLightColorHoverSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLightColorHoverSettings>
                    <ButtonDarkColorHoverSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonDarkColorHoverSettings>
                    <ButtonTextLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextLightColorSettings>
                    <ButtonTextDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextDarkColorSettings>
                    <ButtonHoverTextLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonHoverTextLightColorSettings>
                    <ButtonHoverTextDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonHoverTextDarkColorSettings>
                  </>
                );
              } else {
                return (
                  <>
                    <ButtonLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLightColorSettings>
                    <ButtonDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonDarkColorSettings>
                    <ButtonLightColorHoverSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonLightColorHoverSettings>
                    <ButtonDarkColorHoverSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonDarkColorHoverSettings>
                    <ButtonTextLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextLightColorSettings>
                    <ButtonTextDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonTextDarkColorSettings>
                    <ButtonHoverTextLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonHoverTextLightColorSettings>
                    <ButtonHoverTextDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ButtonHoverTextDarkColorSettings>
                    <IconColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconColorSettings>
                    <IconDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconDarkColorSettings>
                    <IconHoverLightColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconHoverLightColorSettings>
                    <IconHoverDarkColorSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconHoverDarkColorSettings>
                    <IconFlexDirectionSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></IconFlexDirectionSettings>
                  </>
                );
              }
            }
            if (tab.name === "additional") {
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
                  <BorderLightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderLightColorSettings>
                  <BorderDarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderDarkColorSettings>
                  <BorderHoverLightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderHoverLightColorSettings>
                  <BorderHoverDarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderHoverDarkColorSettings>
                  <BorderRadiusSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></BorderRadiusSettings>
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
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      {buttonType === "simple-button" && <a {...blockProps}>{buttonText}</a>}
      {buttonType !== "simple-button" && (
        <a {...blockProps}>
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
