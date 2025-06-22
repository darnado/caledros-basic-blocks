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

function caledros_basic_blocks_mega_menu_template_area( array $areas ) {
	$areas[] = array(
		'area'        => 'mega-menu',
		'area_tag'    => 'div',
		'description' => __( 'Template area used to create mega menus', 'caledros-basic-blocks' ),
		'icon'        => '',
		'label'       => __( 'Mega Menu', 'caledros-basic-blocks' ),
	);

	return $areas;
}
add_filter( 'default_wp_template_part_areas', 'caledros_basic_blocks_mega_menu_template_area' );

function caledros_basic_blocks_sidebar_menu_template_area( array $areas ) {
	$areas[] = array(
		'area'        => 'sidebar-menu',
		'area_tag'    => 'div',
		'description' => __( 'Template area for the sidebar menu', 'caledros-basic-blocks' ),
		'icon'        => '',
		'label'       => __( 'Sidebar Menu', 'caledros-basic-blocks' ),
	);

	return $areas;
}
add_filter( 'default_wp_template_part_areas', 'caledros_basic_blocks_sidebar_menu_template_area' );

function caledros_basic_blocks_slider_card_template_area( array $areas ) {
	$areas[] = array(
		'area'        => 'slider-card',
		'area_tag'    => 'div',
		'description' => __( 'Slider card area for the sidebar menu', 'caledros-basic-blocks' ),
		'icon'        => '',
		'label'       => __( 'Slider card', 'caledros-basic-blocks' ),
	);

	return $areas;
}
add_filter( 'default_wp_template_part_areas', 'caledros_basic_blocks_slider_card_template_area' );