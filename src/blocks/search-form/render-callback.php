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

function caledros_basic_blocks_search_form_render_cb($attributes){
    // Recover block attributes
    $button_text = sanitize_text_field($attributes['buttonText'] ?? "Go");
    $placeholder_text = sanitize_text_field($attributes['placeholderText'] ?? "Search...");
    $button_light_background_color = sanitize_text_field($attributes['buttonLightBackgroundColor'] ?? "#000");
    $button_dark_background_color = sanitize_text_field($attributes['buttonDarkBackgroundColor'] ?? "#22aacc");
    $button_light_text_color = sanitize_text_field($attributes['buttonLightTextColor'] ?? "#fff");
    $button_dark_text_color = sanitize_text_field( $attributes['buttonDarkTextColor'] ?? "#fff");
    $form_width = sanitize_text_field( $attributes['formWidth'] ?? "200px");

    // Set inline styles
    $style = "--cbb-light-bg-color:$button_light_background_color";
    $style .= ";--cbb-light-text-color:$button_light_text_color";
    $style .= ";--cbb-dark-bg-color:$button_dark_background_color ";
    $style .= ";--cbb-dark-text-color:$button_dark_text_color";

    // Start ouput buffering
    ob_start(); 
    ?>     
    <div class="cbb-search-form">
        <form role="search" method="get" class="cbb-search-form__form" action="<?php echo esc_url(home_url('/'));?>" style="<?php echo esc_attr("max-width:$form_width");?>">    
            <input type="search" required class="cbb-search-form__search-field" placeholder="<?php echo esc_attr($placeholder_text)?>" value="" name="s">
            <button style="<?php echo esc_attr($style); ?>" type="submit" class="cbb-search-form__button"><?php echo esc_html($button_text); ?></button>
        </form>
    </div>
    <?php 
    // Fetch the content of the ouput buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Ouput the stored content
    return $output; 
}
