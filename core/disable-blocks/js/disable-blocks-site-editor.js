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

// Disable blocks in the site editor
const caledrosBasicBlocksDisableBlocksSiteEditor = () => {
  // Get current post type
  const currentPostType = wp.data.useSelect((select) => {
    const editor = select("core/editor");
    return editor?.getCurrentPostType();
  }, []);

  // Get current template area
  const currentTemplateArea = wp.data.useSelect((select) => {
    const editor = select("core/editor");
    return editor?.getCurrentPostAttribute("area");
  }, []);

  // Return if current post type is undefined
  if (currentPostType === undefined) {
    return null;
  }

  wp.element.useEffect(() => {
    if (currentPostType !== "wp_template") {
      wp.data
        .dispatch("core/edit-post")
        .hideBlockTypes(["caledros-basic-blocks/content-renderer"]);
    } else if (currentPostType === "wp_template") {
      wp.data
        .dispatch("core/edit-post")
        .showBlockTypes(["caledros-basic-blocks/content-renderer"]);
    }
  }, [currentPostType]);

  wp.element.useEffect(() => {
    if (currentTemplateArea !== "header") {
      wp.data
        .dispatch("core/edit-post")
        .hideBlockTypes([
          "caledros-basic-blocks/dark-light-mode-switcher",
          "caledros-basic-blocks/desktop-menu-container",
          "caledros-basic-blocks/mobile-menu-container",
          "caledros-basic-blocks/sidebar-menu",
        ]);
    } else if (currentTemplateArea === "header") {
      wp.data
        .dispatch("core/edit-post")
        .showBlockTypes([
          "caledros-basic-blocks/dark-light-mode-switcher",
          "caledros-basic-blocks/desktop-menu-container",
          "caledros-basic-blocks/mobile-menu-container",
          "caledros-basic-blocks/sidebar-menu",
        ]);
    }
  }, [currentTemplateArea]);

  // The plugin is solely for disabling blocks, so there's no need to render anything
  return null;
};

// Register plugin
wp.plugins.registerPlugin("caledros-basic-blocks-disable-blocks-site-editor", {
  render: caledrosBasicBlocksDisableBlocksSiteEditor,
});
