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
  } = attributes;

  // Block props
  const blockProps = useBlockProps({
    className: "cbb-button",
    style: {
      "--cbb-button-light-color": buttonLightColor,
      "--cbb-button-dark-color": buttonDarkColor,
      "--cbb-button-hover-light-color": buttonHoverLightColor,
      "--cbb-button-hover-dark-color": buttonHoverDarkColor,
      "--cbb-button-text-light-color": buttonTextLightColor,
      "--cbb-button-text-dark-color": buttonTextDarkColor,
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
            }
            if (tab.name === "style") {
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
                </>
              );
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
      <a {...blockProps}>{buttonText}</a>
    </>
  );
}
