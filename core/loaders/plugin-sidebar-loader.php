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

function caledros_basic_blocks_plugin_sidebar() {
    wp_register_script(
        'cbb-plugin-editor-sidebar',
        plugins_url('plugin-sidebar/build/index.js', dirname(__DIR__)),
        array( 'wp-editor', 'wp-components', "wp-element", "wp-i18n" ),
        "1.0",
        array('strategy' => 'defer')
    );
}
add_action( 'init', 'caledros_basic_blocks_plugin_sidebar' );

function caledros_basic_blocks_plugin_sidebar_enqueue() {
    if ( is_admin() ){
        wp_enqueue_script( 'cbb-plugin-editor-sidebar' );
    }    
}
add_action( 'enqueue_block_editor_assets', 'caledros_basic_blocks_plugin_sidebar_enqueue' );