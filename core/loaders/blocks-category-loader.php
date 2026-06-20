<?php
/**
 * Loads custom block category
 *
 * @package Caledros_Basic_Blocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
/**
 * Caledros Basic Blocks - Easy to use Gutenberg blocks
 * Copyright (C) 2025-2026  David Arnado
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

/**
 * Prepend custom block category
 *
 * Prepends 'Caledros Basic Blocks' to the block category list. This callback is
 * hooked to the 'block_categories_all' filter.
 *
 * @param array $caledros_basic_blocks_category Block category list.
 * @return array Updated block category list.
 */
function caledros_basic_blocks_category_loader( $caledros_basic_blocks_category ) {
	array_unshift(
		$caledros_basic_blocks_category,
		array(
			'slug'  => 'caledros-basic-blocks',
			'title' => 'Caledros Basic Blocks',
			'icon'  => null,
		)
	);
	return $caledros_basic_blocks_category;
}

add_filter( 'block_categories_all', 'caledros_basic_blocks_category_loader', 10, 1 );
