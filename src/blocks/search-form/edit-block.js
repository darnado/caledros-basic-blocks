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
import { __ } from "@wordpress/i18n";
import { TabPanel } from "@wordpress/components";
import ButtonDarkBackgroundColorSettings from "./settings/button-dark-background-color-settings";
import ButtonDarkTextColorSettings from "./settings/button-dark-text-color-settings";
import ButtonLightBackgroundColorSettings from "./settings/button-light-background-color-settings";
import ButtonLightTextColorSettings from "./settings/button-light-text-color-settings";
import ButtonTextSettings from "./settings/button-text-settings";
import PlaceholderTextSettings from "./settings/placeholder-text-settings";
import WidthSettings from "./settings/width-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const {
    buttonText,
    placeholderText,
    buttonLightBackgroundColor,
    buttonDarkBackgroundColor,
    buttonLightTextColor,
    buttonDarkTextColor,
    formWidth,
  } = attributes;

  // Block props
  const blockProps = useBlockProps({
    className: "cbb-search-form",
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
                  <ButtonTextSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonTextSettings>
                  <PlaceholderTextSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PlaceholderTextSettings>
                </>
              );
            }
            if (tab.name === "style") {
              return (
                <>
                  <ButtonLightBackgroundColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonLightBackgroundColorSettings>
                  <ButtonLightTextColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonLightTextColorSettings>
                  <ButtonDarkBackgroundColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonDarkBackgroundColorSettings>
                  <ButtonDarkTextColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ButtonDarkTextColorSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <WidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></WidthSettings>
                </>
              );
            }
          }}
        </TabPanel>
      </InspectorControls>
      <div {...blockProps}>
        <form
          role="search"
          className="cbb-search-form__form"
          style={{ maxWidth: `${formWidth}` }}
        >
          <input
            class="cbb-search-form__search-field"
            readOnly
            style={{ pointerEvents: "none" }}
            placeholder={placeholderText}
          />
          <button
            type="submit"
            class="cbb-search-form__button"
            style={{
              pointerEvents: "none",
              "--cbb-light-bg-color": `${buttonLightBackgroundColor}`,
              "--cbb-light-text-color": `${buttonLightTextColor}`,
              "--cbb-dark-bg-color": `${buttonDarkBackgroundColor}`,
              "--cbb-dark-text-color": `${buttonDarkTextColor}`,
            }}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  );
}
