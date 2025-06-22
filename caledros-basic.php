<?php
/**
 * Plugin Name: Caledros Basic Blocks
 * Plugin URI: https://caledrosforge.com/
 * Description: Add easy-to-use Gutenberg blocks to your WordPress site.
 * Version: 1.0.1
 * Requires at least: 6.7
 * Requires PHP: 8.0
 * Author: David Arnado
 * Author URI: https://caledrosforge.com/about/
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 * Text Domain: caledros-basic-blocks
 * Domain Path: /languages
 * 
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

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

// Define base folder
define('CALEDROS_BASIC_BLOCKS_BASE_FOLDER', plugin_dir_path(__FILE__));

// Load core files
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/loaders/css-styles-loader.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/loaders/blocks-category-loader.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/loaders/blocks-loader.php');

// Load dynamic blocks' render callbacks
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/content-renderer/render-callback.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/category-loop/render-callback.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/posts-loop/render-callback.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/search-form/render-callback.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/sidebar-menu/render-callback.php');
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/slider/render-callback.php');

// Load template areas
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/loaders/template-areas-loader.php');

// Load plugin sidebar
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/loaders/plugin-sidebar-loader.php');

// Load custom rest api endpoints
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/rest-api/template-parts-api.php');

// Load demo data for the posts loop's block
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/posts-loop/demo-data-render.php');

// Load demo data for the categories' loop block
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'src/blocks/category-loop/demo-data-category-render.php');

// Load settings for the categories' featured images
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/category-featured-img/category-featured-img.php');

// Load plugin admin page
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/admin-page/admin-page.php');

// Load translations
require_once(CALEDROS_BASIC_BLOCKS_BASE_FOLDER . 'core/translations/load-translations.php');

// Function to run on plugin activation
function caledros_basic_blocks_activate_plugin() {    
    update_option('caledros_basic_blocks_enable_preload', 1);
}
register_activation_hook(__FILE__, 'caledros_basic_blocks_activate_plugin');