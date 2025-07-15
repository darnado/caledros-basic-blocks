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

wp.plugins.registerPlugin(
  "caledros-basic-blocks-disable-mega-menu-posts-pages-in-editor",
  {
    render: () => {
      // Get current post type
      const currentPostType = wp.data
        .select("core/editor")
        .getCurrentPostType();

      // Return if current post type is undefined
      if (currentPostType === undefined) {
        return null;
      }

      // Disable mega menu block variation
      if (currentPostType === "post" || currentPostType === "page") {
        wp.blocks.unregisterBlockVariation(
          "caledros-basic-blocks/menu-link",
          "caledros-basic-blocks/mega-menu"
        );
      }

      // The plugin is solely for disabling blocks, so there's no need to render anything.
      return null;
    },
  }
);
