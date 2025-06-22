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
import ContentTypeGroupSettings from "./settings/content-type/content-type-group-settings";
import TypographyGroupSettings from "./settings/typography/typography-group-settings";
import AnimationTypeSettings from "./settings/animation-type-settings";
import DarkColorSettings from "./settings/dark-color-settings";
import DarkHoverColorSettings from "./settings/dark-hover-color-settings";
import FontSizeSettings from "./settings/font-size-settings";
import LabelSettings from "./settings/label-settings";
import LetterCaseSettings from "./settings/letter-case-settings";
import LetterSpacingSettings from "./settings/letter-spacing-settings";
import LightColorSettings from "./settings/light-color-settings";
import LightHoverColorSettings from "./settings/light-hover-color-settings";
import LineHeightSettings from "./settings/line-height-settings";
import MegaMenuTemplateSettings from "./settings/mega-menu/mega-menu-template-settings";
import MegaMenuWidthSettings from "./settings/mega-menu/mega-menu-width-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const {
    menuLabel,
    animationType,
    menuTextLightColor,
    menuTextDarkColor,
    menuFontFamily,
    menuFontWeight,
    menuFontStyle,
    menuFontSize,
    menuLineHeight,
    menuLetterSpacing,
    menuLetterCase,
    menuLightHoverColor,
    menuDarkHoverColor,
    menuType,
  } = attributes;

  // Block props
  const blockProps = useBlockProps({
    className: `cbb-menu-link ${
      animationType === "none" ? "" : `cbb-menu-link--${animationType}`
    }`,
    style: {
      "--cbb-menu-light-color": menuTextLightColor,
      "--cbb-menu-light-hover": menuLightHoverColor,
      "--cbb-menu-dark-color": menuTextDarkColor,
      "--cbb-menu-dark-hover": menuDarkHoverColor,
      fontWeight: menuFontWeight,
      fontStyle: menuFontStyle,
      fontSize: menuFontSize,
      ...(menuFontFamily !== "" && {
        fontFamily: `var(--wp--preset--font-family--${menuFontFamily})`,
      }),
      ...(menuLineHeight !== "" && {
        lineHeight: menuLineHeight,
      }),
      ...(menuLetterSpacing !== "normal" && {
        letterSpacing: menuLetterSpacing,
      }),
      ...(menuLetterCase !== "none" && {
        textTransform: menuLetterCase,
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
              if (menuType === "simple") {
                return (
                  <>
                    <LabelSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></LabelSettings>
                    <ContentTypeGroupSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ContentTypeGroupSettings>
                  </>
                );
              } else {
                return (
                  <>
                    <LabelSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></LabelSettings>
                    <ContentTypeGroupSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ContentTypeGroupSettings>
                    <MegaMenuTemplateSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></MegaMenuTemplateSettings>
                    <MegaMenuWidthSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></MegaMenuWidthSettings>
                  </>
                );
              }
            }
            if (tab.name === "style") {
              return (
                <>
                  <AnimationTypeSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AnimationTypeSettings>
                  <LightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LightColorSettings>
                  <DarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></DarkColorSettings>
                  <TypographyGroupSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></TypographyGroupSettings>
                  <FontSizeSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></FontSizeSettings>
                  <LineHeightSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LineHeightSettings>
                  <LetterSpacingSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LetterSpacingSettings>
                  <LetterCaseSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LetterCaseSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <LightHoverColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LightHoverColorSettings>
                  <DarkHoverColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></DarkHoverColorSettings>
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      <a {...blockProps}>{menuLabel}</a>
    </>
  );
}
