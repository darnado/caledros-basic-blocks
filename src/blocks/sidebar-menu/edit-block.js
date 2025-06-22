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
import SidebarTemplateSettings from "./settings/sidebar-template-settings";
import BackgroundLightColorSettings from "./settings/background-light-color-settings";
import BackgroundDarkColorSettings from "./settings/background-dark-color-settings";
import ButtonDarkColorSettings from "./settings/button-dark-color-settings";
import ButtonLightColorSettings from "./settings/button-light-color-settings";
import CloseButtonPositionSettings from "./settings/close-button-position-settings";
import CloseButtonStylesSettings from "./settings/close-button-styles-settings";
import OpenButtonStylesSettings from "./settings/open-button-styles-settings";
import OpenButtonPaddingSettings from "./settings/open-button-padding-settings";
import SidebarMinWidthSettings from "./settings/sidebar-min-width-settings";

export default function EditBlock({ attributes, setAttributes }) {
  // Block attributes
  const {
    buttonLightColor,
    buttonDarkColor,
    openButtonStyles,
    openButtonPadding,
  } = attributes;

  // Block properties
  const blockProps = useBlockProps();

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
                  <SidebarTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></SidebarTemplateSettings>
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
                  <ButtonLightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonLightColorSettings>
                  <ButtonDarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonDarkColorSettings>
                  <OpenButtonStylesSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OpenButtonStylesSettings>
                  <CloseButtonStylesSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CloseButtonStylesSettings>
                  <SidebarMinWidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></SidebarMinWidthSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <OpenButtonPaddingSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OpenButtonPaddingSettings>
                  <CloseButtonPositionSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CloseButtonPositionSettings>
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      <div {...blockProps}>
        <div
          className="cbb-sidebar-menu__button"
          style={{
            "--cbb-btn-light-color": buttonLightColor,
            "--cbb-btn-dark-color": buttonDarkColor,
            height: openButtonStyles.buttonHeight,
            gap: openButtonStyles.buttonGap,
            padding: openButtonPadding.differentPaddingsEnabled
              ? `${openButtonPadding.top} ${openButtonPadding.right} ${openButtonPadding.bottom} ${openButtonPadding.left}`
              : `${openButtonPadding.top}`,
            ...(openButtonStyles.buttonBorderWidth !== "0px" && {
              "--cbb-open-btn-border-width": openButtonStyles.buttonBorderWidth,
            }),
            ...(openButtonStyles.borderRadius !== "0px" && {
              borderRadius: openButtonStyles.buttonBorderRadius,
            }),
            "--cbb-open-btn-bar-height": openButtonStyles.barsHeight,
            "--cbb-open-btn-top-bottom-bar-width":
              openButtonStyles.topAndBottomBarsWidth,
            "--cbb-open-btn-center-bar-width": openButtonStyles.centerBarWidth,
            "--cbb-open-btn-bar-border-radius":
              openButtonStyles.barsBorderRadius,
          }}
        >
          <span></span>
        </div>
      </div>
    </>
  );
}
