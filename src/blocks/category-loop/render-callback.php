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

function caledros_basic_blocks_category_loop_render_cb($attributes){
    // Placeholder images
    $placeholder_background_url = plugins_url('build/images/placeholder-background.d25a2ca6.webp', dirname(dirname(dirname(__FILE__))));
    if (!filter_var($placeholder_background_url, FILTER_VALIDATE_URL)) { 
        $placeholder_background_url = ''; 
    }
    $placeholder_url = plugins_url('build/images/placeholder.06efdda2.webp', dirname(dirname(dirname(__FILE__))));
    if (!filter_var($placeholder_url, FILTER_VALIDATE_URL)) { 
        $placeholder_url = ''; 
    }

    // Access attributes
    $show_number_of_publications     = filter_var($attributes['showNumberOfPublications'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $categories_loop_title           = sanitize_text_field($attributes['categoriesLoopTitle'] ?? 'Website Title');
    $categories_loop_title_icon_url  = sanitize_url($attributes['categoriesLoopTitleIcon']['url'] ?? ''); 
    if (!filter_var($categories_loop_title_icon_url, FILTER_VALIDATE_URL)) {
        $categories_loop_title_icon_url = ''; 
    }
    $categories_loop_title_icon_alt  = sanitize_text_field($attributes['categoriesLoopTitleIcon']['alt'] ?? 'Icon');
    $show_demo_data                  = filter_var($attributes['showDemoData'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $show_uncategorized_category     = filter_var($attributes['showUncategorizedCategory'] ?? false, FILTER_VALIDATE_BOOLEAN);

    // Sanitize content
    $default_allowed_tags = wp_kses_allowed_html('post');
    $svg_sanitize_options = [
        'svg' => [
            'xmlns'   => true,
            'width'   => true,
            'height'  => true,
            'fill'    => true,
            'class'   => true,
            'viewBox' => true,
        ],
        'path' => [
            'd' => true,
        ],
    ];

    $allowed_tags = array_merge($default_allowed_tags, $svg_sanitize_options);

    // Start output buffering
    ob_start();
    ?>

    <?php if (!$show_demo_data): ?>
        <div class="cbb-categories-loop">
            <div class="cbb-categories-loop__container">
                <?php
                $categories = get_categories(['parent' => 0]);

                foreach ($categories as $category) {
                    if (!$show_uncategorized_category && ($category->slug === 'uncategorized' || $category->term_id === 1)) {
                        continue;
                    }

                    $category_id       = $category->cat_ID;
                    $category_name     = $category->name;
                    $category_link     = get_category_link($category_id);
                    $number_articles   = (int) $category->count;                
                    $category_image    = (int) get_term_meta($category_id, 'category_image', true);
                    $alt_text          = get_term_meta($category_id, 'alt_text_category_image', true) ?: 'placeholder';    

                    $text_number_articles = $number_articles === 1
                        ? __('publication', 'caledros-basic-blocks')
                        : __('publications', 'caledros-basic-blocks');

                    $category_loop_title_image_url = $categories_loop_title_icon_url ?: $placeholder_url;
                    ?>
                    <div class="cbb-categories-loop__card"> 
                        <div class="cbb-categories-loop_post-header">
                            <p class="cbb-categories-loop_website-title">
                                <img class="cbb-categories-loop_website-title-icon"
                                    src="<?php echo esc_url($category_loop_title_image_url); ?>"
                                    alt="<?php echo esc_attr($categories_loop_title_icon_alt); ?>">
                                <?php echo esc_html($categories_loop_title); ?>
                            </p>
                        </div>  
                        <div class="cbb-categories-loop__img-container">
                            <a class="cbb-categories-loop__img-link" href="<?php echo esc_url($category_link); ?>">
                                <?php                               
                                echo wp_get_attachment_image($category_image, 'full', false, array('alt'=>$alt_text));
                                ?>
                                <span class="cbb-categories-loop__post-title"><?php echo esc_html($category_name); ?></span>
                            </a>                       
                        </div> 
                        <div class="cbb-categories-loop__post-info">
                            <?php if ($show_number_of_publications): ?>
                            <div class="cbb-categories-loop__category-and-tag">                              
                                <span class="cbb-categories-loop__number-of-publications">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16">
                                        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                                        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                                    </svg>
                                    <?php echo esc_html($number_articles); ?>
                                    <?php echo esc_html($text_number_articles); ?>                             
                                </span>    
                            </div> 
                            <?php endif; ?>
                        </div>                   
                    </div>
                <?php } ?>
            </div>  
        </div>
    <?php else: ?>
        <?php echo wp_kses(caledros_basic_blocks_get_demo_category_data($placeholder_background_url, $placeholder_url), $allowed_tags); ?>
    <?php endif; ?>

    <?php
    // Fetch the content of the output buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Output buffered content
    return $output;
}

