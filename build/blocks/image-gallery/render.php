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

// Demo images
$caledros_basic_blocks_bird_image_url = plugins_url('build/images/bird.8dbbb5a8.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($caledros_basic_blocks_bird_image_url, FILTER_VALIDATE_URL)) { 
    $caledros_basic_blocks_bird_image_url = ''; 
}
$caledros_basic_blocks_flower_image_url = plugins_url('build/images/flower.1092b3c8.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($caledros_basic_blocks_flower_image_url, FILTER_VALIDATE_URL)) { 
    $caledros_basic_blocks_flower_image_url = ''; 
}
$caledros_basic_blocks_mountains_image_url = plugins_url('build/images/mountains.2b50cd4a.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($caledros_basic_blocks_mountains_image_url, FILTER_VALIDATE_URL)) { 
    $caledros_basic_blocks_mountains_image_url = ''; 
}

// BLOCK ATTRIBUTES
$caledros_basic_blocks_images = $attributes['images'] ?? [];
$caledros_basic_blocks_enable_loop = filter_var($attributes['enableLoop'] ?? false, FILTER_VALIDATE_BOOLEAN);
$caledros_basic_blocks_identifier = sanitize_text_field($attributes['identifier'] ?? '');
$caledros_basic_blocks_enable_pagination = filter_var($attributes['enablePagination'] ?? true, FILTER_VALIDATE_BOOLEAN);
$caledros_basic_blocks_pagination_type = sanitize_text_field($attributes['paginationType'] ?? 'bullets');
$caledros_basic_blocks_autoplay_enabled = filter_var($attributes['autoplay']['enableAutoplay'] ?? false, FILTER_VALIDATE_BOOLEAN);
$caledros_basic_blocks_autoplay_delay = intval($attributes['autoplay']['delay'] ?? 3000);
$caledros_basic_blocks_light_color = sanitize_text_field($attributes['lightColor'] ?? '#000');
$caledros_basic_blocks_dark_color = sanitize_text_field($attributes['darkColor'] ?? '#fff');
$caledros_basic_blocks_enable_navigation_arrows = filter_var($attributes['enableNavigationArrows'] ?? true, FILTER_VALIDATE_BOOLEAN);
$caledros_basic_blocks_width = sanitize_text_field($attributes['width']);
$caledros_basic_blocks_height = sanitize_text_field($attributes['minHeight']);
$caledros_basic_blocks_gallery_effect = sanitize_text_field($attributes['galleryEffect'] ?? 'none');
$caledros_basic_blocks_show_demo_data = filter_var($attributes['showDemoData'] ?? false, FILTER_VALIDATE_BOOLEAN);

// Prepare the context JSON content
$caledros_basic_blocks_wp_context = [
    "loopEnabled" => $caledros_basic_blocks_enable_loop ? true : false,
    "identifier" => $caledros_basic_blocks_identifier,
    "pagination" => $caledros_basic_blocks_enable_pagination ? true : false,
    "paginationType" => $caledros_basic_blocks_pagination_type,
    "autoPlayEnabled" => $caledros_basic_blocks_autoplay_enabled,
    "autoplayDelay" => $caledros_basic_blocks_autoplay_delay,
    "enableNavigationArrows" => $caledros_basic_blocks_enable_navigation_arrows ? true : false,    
    "galleryEffect" => $caledros_basic_blocks_gallery_effect
];

$caledros_basic_blocks_wp_context_json = htmlspecialchars(json_encode($caledros_basic_blocks_wp_context), ENT_QUOTES, 'UTF-8');

// Variables
$caledros_basic_blocks_number_of_images = count($caledros_basic_blocks_images);

// General styles
$caledros_basic_blocks_style = "--cbb-slider-light-color:$caledros_basic_blocks_light_color";
$caledros_basic_blocks_style .= ";--cbb-slider-dark-color:$caledros_basic_blocks_dark_color";
$caledros_basic_blocks_style .= ";width:100%;max-width:$caledros_basic_blocks_width";
$caledros_basic_blocks_style .= ";height:$caledros_basic_blocks_height";

// Image styles
$caledros_basic_blocks_img_style = "width:$caledros_basic_blocks_width";
$caledros_basic_blocks_img_style .= ";height:$caledros_basic_blocks_height";

// BUFFERING
// Start output buffering
ob_start(); 
?> 
<div class="swiper cbb-image-gallery cbb-image-gallery-<?php echo esc_attr($caledros_basic_blocks_identifier);?>" data-wp-interactive="cbb-image-gallery-store" data-wp-context='<?php echo esc_attr($caledros_basic_blocks_wp_context_json);?>' data-wp-init--log="callbacks.onInit" style="<?php echo esc_attr($caledros_basic_blocks_style);?>">
    <div class="swiper-wrapper">
        <?php       
        if(!$caledros_basic_blocks_show_demo_data){
            // Loop through the card slugs and output slides only up to the number of cards
            foreach ($caledros_basic_blocks_images as $caledros_basic_blocks_image) {
                $caledros_basic_blocks_image_id = intval($caledros_basic_blocks_image['id']);
                $caledros_basic_blocks_image_alt = sanitize_text_field($caledros_basic_blocks_image['alt']);
                echo '<div class="swiper-slide">';
                echo wp_get_attachment_image( $caledros_basic_blocks_image_id, 'full', false, array('alt'=> esc_attr($caledros_basic_blocks_image_alt), "style" => esc_attr($caledros_basic_blocks_img_style)));
                echo '</div>';            
            }  
        }else{
            ?>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($caledros_basic_blocks_bird_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="bird" style="<?php echo esc_attr($caledros_basic_blocks_style);?>">
            </div>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($caledros_basic_blocks_mountains_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="pier" style="<?php echo esc_attr($caledros_basic_blocks_style);?>">
            </div>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($caledros_basic_blocks_flower_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="flower" style="<?php echo esc_attr($caledros_basic_blocks_style);?>">
            </div>
            <?php
        }  
        ?>
    </div>
    <?php if($caledros_basic_blocks_enable_navigation_arrows): ?>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>         
    <?php endif; ?>
    <?php if($caledros_basic_blocks_enable_pagination): ?>
        <div class="swiper-pagination"></div>           
    <?php endif; ?>
</div>
<?php 

// Fetch the content of the output buffer
$caledros_basic_blocks_output = ob_get_contents();
// Stop output buffering
ob_end_clean();
// Output the stored content
echo wp_kses_post($caledros_basic_blocks_output);
