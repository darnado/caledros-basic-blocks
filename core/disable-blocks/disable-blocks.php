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

// Disable template specific blocks for posts and pages
function caledros_basic_blocks_disable_blocks($allowed_block_types, $editor_context) {

    // Return if the editor context is not set
    if (!isset($editor_context->post)) {
        return $allowed_block_types;
    }    

    // Get post type
    $post_type = $editor_context->post->post_type;

    // Return if the post type is not set
    if (!isset($post_type)) {
        return $allowed_block_types;
    }

    // Declare initial empty list of disallowed blocks
    $disallowed_blocks = array('');

    // Disallowed blocks for posts and pages
    if ($post_type === 'post' || $post_type === 'page'){
        $disallowed_blocks = array(
			'caledros-basic-blocks/content-renderer',	 
            'caledros-basic-blocks/dark-light-mode-switcher',
            'caledros-basic-blocks/desktop-menu-container',            
            'caledros-basic-blocks/mobile-menu-container',
            'caledros-basic-blocks/sidebar-menu'           
		);
    }
    
    // Return if the disallowed blocks list is empty
    if (empty($disallowed_blocks)){
        return $allowed_block_types;
    }

    // Retrieve the list of all registered blocks
    if (!is_array($allowed_block_types) || empty($allowed_block_types)) {
        $registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
        $allowed_block_types = array_keys($registered_blocks);
    }

    // Declare empty list of active blocks
    $active_blocks = array();

    // Loop the list of registered blocks
    foreach ($allowed_block_types as $block) {
        // Verify that the block is not included in the disallowed blocks list
        if (!in_array($block, $disallowed_blocks, true)) {
            // If the block is not the disallowed blocks list, we add it to the active blocks list
            $active_blocks[] = $block;
        }
    }

    // Return the list of active blocks that appear in the Gutenberg editor
    return $active_blocks;
}

add_filter('allowed_block_types_all', 'caledros_basic_blocks_disable_blocks', 10, 2);

// Disable mega menu block variation for posts and pages
function caledros_basic_blocks_disable_mega_menu_for_posts_and_pages() {
	wp_enqueue_script(
		'caledros-basic-blocks-disable-mega-menu-posts-pages',
		plugin_dir_url(__FILE__) . 'js/disable-mega-menu.js',
		array('wp-blocks', 'wp-plugins'),
		'1.0',
		true
	);
}
add_action('enqueue_block_editor_assets', 'caledros_basic_blocks_disable_mega_menu_for_posts_and_pages');
