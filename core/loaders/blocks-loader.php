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

function caledros_basic_blocks_loader(){
    $caledros_blocks =[    
        ['block_name' => 'button'],
        ['block_name' => 'content-renderer', 'block_options' => ['render_callback' => 'caledros_basic_blocks_content_renderer_render_cb']],
        ['block_name' => 'category-loop', 'block_options' => ['render_callback' => 'caledros_basic_blocks_category_loop_render_cb']],
        ['block_name' => 'dark-light-mode-switcher'],  
        ['block_name' => 'desktop-menu-container'], 
        ['block_name' => 'flex-container'],
        ['block_name' => 'grid-container'],
        ['block_name' => 'icon'],
        ['block_name' => 'image-gallery'],              
        ['block_name' => 'menu-link'],   
        ['block_name' => 'mobile-menu-container'],   
        ['block_name' => 'posts-loop', 'block_options' => ['render_callback' => 'caledros_basic_blocks_posts_loop_render_cb']],
        ['block_name' => 'responsive-image'],
        ['block_name' => 'search-form', 'block_options' => ['render_callback' => 'caledros_basic_blocks_search_form_render_cb']],   
        ['block_name' => 'sidebar-menu', 'block_options' => ['render_callback' => 'caledros_basic_blocks_sidebar_menu_render_cb']],     
        ['block_name' => 'slider', 'block_options' => ['render_callback' => 'caledros_basic_blocks_slider_render_cb']],
        ['block_name' => 'social-icon'],
        ['block_name' => 'social-icons-group']                
    ];

    foreach($caledros_blocks as $caledros_block){
        register_block_type(
            CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'build/blocks/' . $caledros_block['block_name'],
            isset($caledros_block['block_options']) ? $caledros_block['block_options'] : []
        );
    }
}

add_action('init', 'caledros_basic_blocks_loader');
