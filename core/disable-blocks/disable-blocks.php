<?php
/**
 * Disables blocks based on post types
 *
 * @package Caledros_Basic_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Caledros Basic Blocks - Easy to use Gutenberg blocks
 * Copyright (C) 2025-2026  David Arnado
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

/**
 * Load JS to disable mega menu block variation
 *
 * The mega menu block is a variation of the menu link block. The
 * following function disables this block variation on any
 * post type that is not a header. Thus, the user can only use this
 * block variation on header template parts.
 *
 * This function is hooked to 'enqueue_block_editor_assets'
 *
 * @return void
 */
function caledros_basic_blocks_disable_mega_menu_for_posts_and_pages() {
	wp_enqueue_script(
		'caledros-basic-blocks-disable-mega-menu-posts-pages',
		plugin_dir_url( __FILE__ ) . 'js/disable-mega-menu.js',
		array( 'wp-plugins', 'wp-data', 'wp-element', 'wp-blocks' ),
		'1.0',
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'caledros_basic_blocks_disable_mega_menu_for_posts_and_pages' );

/**
 * Load JS to disable various blocks
 *
 * - The content renderer block is enabled only in WordPress templates.
 * - The dark/light mode switcher, desktop menu container, mobile menu
 *   container, and sidebar menu blocks are enabled only in the header
 *   template area.
 *
 * The aforementioned blocks are disabled in other post types. This
 * function is hooked to 'enqueue_block_editor_assets'.
 *
 * @return void
 */
function caledros_basic_blocks_disable_blocks_site_editor() {
	wp_enqueue_script(
		'caledros-basic-blocks-disable-blocks-site-editor',
		plugin_dir_url( __FILE__ ) . 'js/disable-blocks-site-editor.js',
		array( 'wp-plugins', 'wp-data', 'wp-element', 'wp-edit-post' ),
		'1.0',
		true
	);
}
add_action( 'enqueue_block_editor_assets', 'caledros_basic_blocks_disable_blocks_site_editor' );
