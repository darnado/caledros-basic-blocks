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

function caledros_basic_blocks_slider_render_cb($attributes){
    
    // BLOCK ATTRIBUTES
    $card_one_slug = sanitize_text_field($attributes['cardOneSlug'] ?? '');
    $card_two_slug = sanitize_text_field($attributes['cardTwoSlug'] ?? '');
    $card_three_slug = sanitize_text_field($attributes['cardThreeSlug'] ?? '');
    $card_four_slug = sanitize_text_field($attributes['cardFourSlug'] ?? '');
    $card_five_slug = sanitize_text_field($attributes['cardFiveSlug'] ?? '');
    $card_six_slug = sanitize_text_field($attributes['cardSixSlug'] ?? '');
    $number_of_cards = intval($attributes['numberOfCards'] ?? 6);
    $enable_loop = filter_var($attributes['enableLoop'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $identifier = sanitize_text_field($attributes['identifier'] ?? '');
    $enable_pagination =  filter_var($attributes['enablePagination'] ?? true, FILTER_VALIDATE_BOOLEAN);
    $pagination_type = sanitize_text_field($attributes['paginationType'] ?? 'bullets');
    $autoplayEnabled = filter_var($attributes['autoplay']['enableAutoplay'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $autoplayDelay = intval($attributes['autoplay']['delay'] ?? 3000);
    $light_color = sanitize_text_field($attributes['lightColor'] ?? '#000');
    $dark_color = sanitize_text_field($attributes['darkColor'] ?? '#fff');
    $enable_navigation_arrows = filter_var($attributes['enableNavigationArrows'] ?? true, FILTER_VALIDATE_BOOLEAN);
    $width = sanitize_text_field($attributes['width'] ?? '100%');
    $height = sanitize_text_field($attributes['minHeight'] ?? 'auto');
    $slider_effect = sanitize_text_field($attributes['sliderEffect'] ?? 'none');

    // Prepare the card slugs in an array for easier iteration
    $card_slugs = [
        $card_one_slug,
        $card_two_slug,
        $card_three_slug,
        $card_four_slug,
        $card_five_slug,
        $card_six_slug,
    ];

    // Prepare the context JSON content
    $wp_context = [
        "loopEnabled" => $enable_loop ? true : false,
        "identifier" => $identifier,
        "pagination" => $enable_pagination ? true : false,
        "paginationType" => $pagination_type,
        "autoPlayEnabled" => $autoplayEnabled,
        "autoplayDelay" => $autoplayDelay,
        "enableNavigationArrows" => $enable_navigation_arrows ? true : false,    
        "sliderEffect" => $slider_effect
    ];

    $wp_context_json = htmlspecialchars(json_encode($wp_context), ENT_QUOTES, 'UTF-8');

    // GENERAL STYLES
    $style = "--cbb-slider-light-color:$light_color";
    $style .= ";--cbb-slider-dark-color:$dark_color";
    $style .= ";width:100%;max-width:$width";
    $style .= ";height:$height";

    // BUFFERING
    // Start output buffering
    ob_start(); 
    ?> 
    <div class="swiper cbb-slider cbb-swiper-<?php echo esc_attr($identifier);?>" data-wp-interactive="cbb-slider-store" data-wp-context='<?php echo esc_attr($wp_context_json);?>' data-wp-init--log="callbacks.onInit" style="<?php echo esc_attr($style);?>">
        <div class="swiper-wrapper">
            <?php 
            // Loop through the card slugs and output slides only up to the number of cards
            for ($i = 0; $i < $number_of_cards; $i++) {
                if (!empty($card_slugs[$i])) { // Check if there's a valid slug
                    ?>
                    <div class="swiper-slide">
                        <?php block_template_part($card_slugs[$i]); ?> 
                    </div>
                    <?php
                }
            }
            ?>
        </div>
        <?php if($enable_navigation_arrows): ?>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>         
        <?php endif; ?>
        <?php if($enable_pagination): ?>
            <div class="swiper-pagination"></div>           
        <?php endif; ?>
    </div>
    <?php 

    // Fetch the content of the output buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Output the stored content
    return $output; 
}

