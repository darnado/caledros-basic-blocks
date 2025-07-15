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

// Register settings 
function caledros_basic_blocks_register_settings() {
    // Preloader
    $preload_args = array(
        'type' => "integer", 
        'sanitize_callback' => 'caledros_basic_blocks_sanitize_enable_preload',
        'show_in_rest' => false,
        'default' => 1,
        );
    register_setting(
        'caledros_basic_blocks_settings_group',
        'caledros_basic_blocks_enable_preload',
        $preload_args
    );

    // Custom CSS for wp site blocks
    $column_layout_args = array(
        'type' => "integer", 
        'sanitize_callback' => 'caledros_basic_blocks_sanitize_add_column_layout_to_wp_site_blocks',
        'show_in_rest' => false,
        'default' => 1,
    );
    register_setting(
        'caledros_basic_blocks_settings_group',
        'caledros_basic_blocks_add_column_layout_to_wp_site_blocks',
        $column_layout_args
    );
}
add_action('admin_init', 'caledros_basic_blocks_register_settings');

// Sanitization callback functions
// Preload sanitization callback function
function caledros_basic_blocks_sanitize_enable_preload($input) {
    // Checkbox: save '1' if checked, otherwise '0'
    return ($input === '1') ? 1 : 0;
}

// Load optional CSS sanitization callback function
function caledros_basic_blocks_sanitize_add_column_layout_to_wp_site_blocks($input) {
    // Checkbox: save '1' if checked, otherwise '0'
    return ($input === '1') ? 1 : 0;
}

// Add admin page
function caledros_basic_blocks_add_settings_page() {
    add_menu_page(
        'Caledros Plugin',              
        'Caledros Plugin',             
        'manage_options',               
        'caledros-basic-blocks-settings',           
        'caledros_basic_blocks_render_settings_page',   
        'dashicons-admin-generic',        
        60                               
    );
}
add_action('admin_menu', 'caledros_basic_blocks_add_settings_page');

// Render the admin page content
function caledros_basic_blocks_render_settings_page() {
    ?>
    <div>
        <h1><?php esc_html_e('Caledros Plugin Settings', 'caledros-basic-blocks'); ?></h1>
        <form method="post" action="options.php">
            <?php settings_fields('caledros_basic_blocks_settings_group'); ?>            
            <div style="display:flex; flex-direction:row; column-gap:10px; margin-bottom:10px;">                
                <div><?php esc_html_e('Enable Stylesheet Preloading', 'caledros-basic-blocks'); ?></div>
                <div><input type="checkbox" name="caledros_basic_blocks_enable_preload" value="1" <?php checked(1, get_option('caledros_basic_blocks_enable_preload'), true); ?> /></div>
            </div>
            <div style="display:flex; flex-direction:row; column-gap:10px; margin-bottom:10px;">                
                <div><?php esc_html_e('Add flex-column layout to the "wp-site-blocks" container', 'caledros-basic-blocks'); ?></div>
                <div><input type="checkbox" name="caledros_basic_blocks_add_column_layout_to_wp_site_blocks" value="1" <?php checked(1, get_option('caledros_basic_blocks_add_column_layout_to_wp_site_blocks'), true); ?> /></div>
            </div>
            <?php submit_button('Save Changes', 'primary', 'submit', false); ?>
        </form>
    </div>
    <?php
}
