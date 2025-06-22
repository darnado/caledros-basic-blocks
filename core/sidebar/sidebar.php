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

function caledros_basic_blocks_sidebar_plugin_register() {
    wp_register_script(
        'plugin-sidebar-js',
        plugin_dir_url(plugin_dir_path(__DIR__) ) . 'build/plugin-sidebar/index.js',
        array( 'wp-plugins', 'wp-editor', 'react' ),
        "1.0",
        true
    );
}
add_action( 'init', 'caledros_basic_blocks_sidebar_plugin_register' );

function caledros_basic_blocks_sidebar_plugin_script_enqueue() {
    wp_enqueue_script( 'plugin-sidebar-js' );
}
add_action( 'enqueue_block_editor_assets', 'caledros_basic_blocks_sidebar_plugin_script_enqueue' );