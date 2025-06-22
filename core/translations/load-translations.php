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

function caledros_basic_blocks_load_block_translations(){
    $blocks = [
        "caledros-basic-blocks-button-editor-script",
        "caledros-basic-blocks-content-renderer-editor-script",
        "caledros-basic-blocks-category-loop-editor-script",
        "caledros-basic-blocks-dark-light-mode-switcher-editor-script",
        "caledros-basic-blocks-desktop-menu-container-editor-script",
        "caledros-basic-blocks-flex-container-editor-script",
        "caledros-basic-blocks-grid-container-editor-script",
        "caledros-basic-blocks-icon-editor-script",
        "caledros-basic-blocks-image-gallery-editor-script",
        "caledros-basic-blocks-menu-link-editor-script",
        "caledros-basic-blocks-mobile-menu-container-editor-script",
        "caledros-basic-blocks-posts-loop-editor-script",
        "caledros-basic-blocks-responsive-image-editor-script",
        "caledros-basic-blocks-search-form-editor-script",
        "caledros-basic-blocks-sidebar-menu-editor-script",
        "caledros-basic-blocks-links-slider-editor-script",
        "caledros-basic-blocks-social-icon-editor-script",
        "caledros-basic-blocks-social-icons-group-editor-script"        
    ];

    foreach($blocks as $block){
        wp_set_script_translations($block, "caledros-basic-blocks", CALEDROS_BASIC_BLOCKS_BASE_FOLDER . "languages");
    }
}
add_action('wp_enqueue_scripts', 'caledros_basic_blocks_load_block_translations');