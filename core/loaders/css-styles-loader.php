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

// Enqueue front-end styles
function caledros_basic_blocks_enqueue_frontend_styles() {
    wp_enqueue_style('caledros-general-css', plugin_dir_url(dirname(__FILE__)) . 'resources/dist/cbb-frontend-styles.min.css', array(), '1.0');
}
add_action('wp_enqueue_scripts', 'caledros_basic_blocks_enqueue_frontend_styles');

// Enqueue editor-only styles
function caledros_basic_blocks_enqueue_editor_styles() {
    if (is_admin()){
        wp_enqueue_style('caledros-editor-css', plugin_dir_url(dirname(__FILE__)) . 'resources/dist/cbb-editor-styles.min.css', array(), '1.0');
    }
}
add_action('enqueue_block_assets', 'caledros_basic_blocks_enqueue_editor_styles');

// Preload all enqueued stylesheets
function caledros_basic_blocks_preload_all_stylesheets($html, $handle, $href, $media) {
    if (!is_admin() && get_option('caledros_basic_blocks_enable_preload', 1)){
        // Replace `rel="stylesheet"` with `rel="preload"` for all stylesheets
        $html = str_replace("rel='stylesheet'", "rel='preload' as='style' onload=\"this.onload=null;this.rel='stylesheet'\"", $html);

        // Generate noscript fallback  
        // Note: WordPress does not provide a built-in function to add <noscript> tags.
        $resourceType = "stylesheet";      
        $noscript_tag = sprintf(
            '<noscript><link rel="%s" id="%s-css" href="%s" media="%s" /></noscript>',
            esc_attr($resourceType),
            esc_attr($handle),
            esc_url($href),
            esc_attr($media)
        );
        return $html .  $noscript_tag . "\n" ;
    }
    return $html;
}
add_filter('style_loader_tag', 'caledros_basic_blocks_preload_all_stylesheets', 10, 4);

// Load custom CSS for wp site blocks
function caledros_basic_blocks_load_custom_css_wp_site_blocks(){
    if (!is_admin()){
        $custom_css_wp_site_blocks = "";
        $add_column_layout = get_option('caledros_basic_blocks_add_column_layout_to_wp_site_blocks', 1);
        $set_custom_height = get_option('caledros_basic_blocks_set_custom_height_to_wp_site_blocks', 1);

        if ($add_column_layout){
            $custom_css_wp_site_blocks .= ".wp-site-blocks{display:flex; flex-direction:column;}";            
        }

        if ($set_custom_height){
           if($add_column_layout){
             $custom_css_wp_site_blocks = str_replace("}", " height:100vh;}", $custom_css_wp_site_blocks);
           }else{
             $custom_css_wp_site_blocks = ".wp-site-blocks{height:100vh;}";
           }
        }

        if (!empty($custom_css_wp_site_blocks)){
            wp_add_inline_style('caledros-general-css', $custom_css_wp_site_blocks );
        }

    }  
}
add_action( 'wp_enqueue_scripts', 'caledros_basic_blocks_load_custom_css_wp_site_blocks' );