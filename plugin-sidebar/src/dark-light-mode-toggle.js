/**
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

import { ToggleControl } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { PluginSidebar, PluginSidebarMoreMenuItem } from "@wordpress/editor";
import { __ } from "@wordpress/i18n";

export default function DarkLightModeToggle() {
  // Declare state to manage the toggle
  const [toggleState, setToggleState] = useState(false);

  // Function to change the theme mode
  const changeThemeMode = () => {
    // Select iframe editor
    const iframe =
      document.querySelector(".edit-site-visual-editor__editor-canvas") ||
      document.querySelector('iframe[name="editor-canvas"]');

    if (!iframe) {
      console.error("Iframe editor not found. Please refresh and try again.");
      return;
    }

    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;

    if (!iframeDocument || iframeDocument.readyState !== "complete") {
      console.error("Iframe document not ready. Please refresh and try again.");
      return;
    }

    const iframeEditor = iframeDocument.querySelector(
      ".block-editor-iframe__html"
    );

    if (!iframeEditor) {
      console.error("Iframe editor not found. Please refresh and try again.");
      return;
    }

    // Toggle data-attribute
    iframeEditor.setAttribute(
      "data-theme",
      `${toggleState ? "light" : "dark"}`
    );

    // Change toggle state
    setToggleState((oldToggleState) => !oldToggleState);
  };

  return (
    <>
      <PluginSidebarMoreMenuItem target="dark-light-mode-sidebar">
        Dark/Light Mode
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="dark-light-mode-sidebar"
        title="Dark/Light Mode"
        icon="admin-appearance"
      >
        <div style={{ padding: "16px" }}>
          <ToggleControl
            __nextHasNoMarginBottom
            label={__("Enable dark mode", "caledros-blocks")}
            checked={toggleState}
            onChange={changeThemeMode}
            help={__(
              "Enable this option to preview the dark theme in the editor.",
              "caledros-blocks"
            )}
          />
        </div>
      </PluginSidebar>
    </>
  );
}
