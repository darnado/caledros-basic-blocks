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

// Declare block and variation block
const caledrosBasicBlocksMenuLink = "caledros-basic-blocks/menu-link";
const caledrosBasicBlocksMegaMenu = "caledros-basic-blocks/mega-menu";

// Disable mega menu block variation
const caledrosBasicBlocksDisableMegaMenu = () => {
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

  // Original variation block settings
  const originalVariation = wp.element.useRef(null);

  // Capture the original variation block once, after the blocks have been initialized
  wp.element.useEffect(() => {
    // Return if the block variation is already stored
    if (originalVariation.current) return;

    // Get all block variations
    const activeBlockVariations =
      wp.blocks.getBlockVariations(caledrosBasicBlocksMenuLink) || [];

    // Store the settings of the original block variation
    originalVariation.current =
      activeBlockVariations.find(
        (blockVariation) => blockVariation.name === caledrosBasicBlocksMegaMenu
      ) || null;
  }, []);

  // Whenever the editing context changes, unregister or re-register
  wp.element.useEffect(() => {
    const currentBlockVariations =
      wp.blocks.getBlockVariations?.(caledrosBasicBlocksMenuLink) || [];

    const exists = currentBlockVariations.some(
      (variation) => variation.name === caledrosBasicBlocksMegaMenu
    );

    if (currentTemplateArea !== "header" && exists) {
      wp.blocks.unregisterBlockVariation(
        caledrosBasicBlocksMenuLink,
        caledrosBasicBlocksMegaMenu
      );
    } else if (currentTemplateArea === "header" && !exists) {
      wp.blocks.registerBlockVariation(
        caledrosBasicBlocksMenuLink,
        originalVariation.current
      );
    }
  }, [currentTemplateArea]);

  // The plugin is solely for disabling blocks, so there's no need to render anything
  return null;
};

// Register plugin
wp.plugins.registerPlugin(
  "caledros-basic-blocks-disable-mega-menu-posts-pages-in-editor",
  {
    render: caledrosBasicBlocksDisableMegaMenu,
  }
);
