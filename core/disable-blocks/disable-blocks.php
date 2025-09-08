<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
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

// Disable mega menu block variation
function caledros_basic_blocks_disable_mega_menu_for_posts_and_pages() {
	wp_enqueue_script(
		'caledros-basic-blocks-disable-mega-menu-posts-pages',
		plugin_dir_url(__FILE__) . 'js/disable-mega-menu.js',
		array('wp-plugins', 'wp-data', 'wp-element', 'wp-blocks'),
		'1.0',
		true
	);
}
add_action('enqueue_block_editor_assets', 'caledros_basic_blocks_disable_mega_menu_for_posts_and_pages');

// Disable blocks in the site editor
function caledros_basic_blocks_disable_blocks_site_editor() {
	wp_enqueue_script(
		'caledros-basic-blocks-disable-blocks-site-editor',
		plugin_dir_url(__FILE__) . 'js/disable-blocks-site-editor.js',
		array('wp-plugins', 'wp-data', 'wp-element', 'wp-edit-post'),
		'1.0',
		true
	);
}
add_action('enqueue_block_editor_assets', 'caledros_basic_blocks_disable_blocks_site_editor');
