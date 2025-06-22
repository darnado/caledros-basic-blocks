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
$bird_image_url = plugins_url('build/images/bird.a6a2c4c9.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($bird_image_url, FILTER_VALIDATE_URL)) { 
    $bird_image_url = ''; 
}
$flower_image_url = plugins_url('build/images/flower.0f364da1.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($flower_image_url, FILTER_VALIDATE_URL)) { 
    $flower_image_url = ''; 
}
$pier_image_url = plugins_url('build/images/pier.d4435397.webp', dirname(dirname(dirname(__FILE__))));
if (!filter_var($pier_image_url, FILTER_VALIDATE_URL)) { 
    $pier_image_url = ''; 
}

// BLOCK ATTRIBUTES
$images = $attributes['images'] ?? [];
$enable_loop = filter_var($attributes['enableLoop'] ?? false, FILTER_VALIDATE_BOOLEAN);
$identifier = sanitize_text_field($attributes['identifier'] ?? '');
$enable_pagination = filter_var($attributes['enablePagination'] ?? true, FILTER_VALIDATE_BOOLEAN);
$pagination_type = sanitize_text_field($attributes['paginationType'] ?? 'bullets');
$autoplay_enabled = filter_var($attributes['autoplay']['enableAutoplay'] ?? false, FILTER_VALIDATE_BOOLEAN);
$autoplay_delay = intval($attributes['autoplay']['delay'] ?? 3000);
$light_color = sanitize_text_field($attributes['lightColor'] ?? '#000');
$dark_color = sanitize_text_field($attributes['darkColor'] ?? '#fff');
$enable_navigation_arrows = filter_var($attributes['enableNavigationArrows'] ?? true, FILTER_VALIDATE_BOOLEAN);
$width = sanitize_text_field($attributes['width']);
$height = sanitize_text_field($attributes['minHeight']);
$gallery_effect = sanitize_text_field($attributes['galleryEffect'] ?? 'none');
$show_demo_data = filter_var($attributes['showDemoData'] ?? false, FILTER_VALIDATE_BOOLEAN);

// Prepare the context JSON content
$wp_context = [
    "loopEnabled" => $enable_loop ? true : false,
    "identifier" => $identifier,
    "pagination" => $enable_pagination ? true : false,
    "paginationType" => $pagination_type,
    "autoPlayEnabled" => $autoplay_enabled,
    "autoplayDelay" => $autoplay_delay,
    "enableNavigationArrows" => $enable_navigation_arrows ? true : false,    
    "galleryEffect" => $gallery_effect
];

$wp_context_json = htmlspecialchars(json_encode($wp_context), ENT_QUOTES, 'UTF-8');

// Variables
$number_of_images = count($images);

// General styles
$style = "--cbb-slider-light-color:$light_color";
$style .= ";--cbb-slider-dark-color:$dark_color";
$style .= ";width:100%;max-width:$width";
$style .= ";height:$height";

// Image styles
$img_style = "width:$width";
$img_style .= ";height:$height";

// BUFFERING
// Start output buffering
ob_start(); 
?> 
<div class="swiper cbb-image-gallery cbb-image-gallery-<?php echo esc_attr($identifier);?>" data-wp-interactive="cbb-image-gallery-store" data-wp-context='<?php echo esc_attr($wp_context_json);?>' data-wp-init--log="callbacks.onInit" style="<?php echo esc_attr($style);?>">
    <div class="swiper-wrapper">
        <?php       
        if(!$show_demo_data){
            // Loop through the card slugs and output slides only up to the number of cards
            foreach ($images as $image) {
                $image_id = intval($image['id']);
                $image_alt = sanitize_text_field($image['alt']);
                echo '<div class="swiper-slide">';
                echo wp_get_attachment_image( $image_id, 'full', false, array('alt'=> esc_attr($image_alt), "style" => esc_attr($img_style)));
                echo '</div>';            
            }  
        }else{
            ?>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($bird_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="bird" style="<?php echo esc_attr($style);?>">
            </div>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($pier_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="pier" style="<?php echo esc_attr($style);?>">
            </div>
            <div class="swiper-slide">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img decoding="async" width="800" height="600" src=<?php echo esc_url($flower_image_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?> class="attachment-full size-full" alt="flower" style="<?php echo esc_attr($style);?>">
            </div>
            <?php
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
echo wp_kses_post($output);
