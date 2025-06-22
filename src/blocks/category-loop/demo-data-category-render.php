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

 function caledros_basic_blocks_get_demo_category_data($placeholder_background_url, $placeholder_url) {
    ob_start();
    ?>
    <div class="cbb-categories-loop">
        <div class="cbb-categories-loop__container">

            <?php
            $demo_categories = [
                ['title' => 'Marketing', 'count' => 6],
                ['title' => 'Web Design', 'count' => 4],
                ['title' => 'Graphic Design', 'count' => 10],
                ['title' => 'Latest News', 'count' => 1],
            ];

            foreach ($demo_categories as $category) :
            ?>
                <div class="cbb-categories-loop__card"> 
                    <div class="cbb-categories-loop_post-header">
                        <p class="cbb-categories-loop_website-title">
                            <img 
                                class="cbb-categories-loop_website-title-icon" 
                                src="<?php echo esc_url($placeholder_url); ?>" 
                                alt="placeholder"
                            >
                            My Website
                        </p>
                    </div>  

                    <div class="cbb-categories-loop__img-container">
                        <a class="cbb-categories-loop__img-link" href="#">
                            <img 
                                src="<?php echo esc_url($placeholder_background_url); ?>" 
                                alt="placeholder"
                            >
                            <span class="cbb-categories-loop__post-title">
                                <?php echo esc_html($category['title']); ?>
                            </span>
                        </a>                       
                    </div> 

                    <div class="cbb-categories-loop__post-info">
                        <div class="cbb-categories-loop__category-and-tag">                              
                            <span class="cbb-categories-loop__number-of-publications">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-journals"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 
                                    2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 
                                    1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 
                                    0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 
                                    2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 
                                    0 0 0-1 1H3a2 2 0 0 1 2-2" />
                                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 
                                    0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 
                                    0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 
                                    0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 
                                    0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                                </svg>    
                                <?php echo esc_html($category['count']); ?>
                                <?php echo $category['count'] === 1 
                                    ? esc_html__('publication', 'caledros-basic-blocks') 
                                    : esc_html__('publications', 'caledros-basic-blocks'); ?>
                            </span>    
                        </div> 
                    </div>                   
                </div> 
            <?php endforeach; ?>
        </div>
    </div>
    <?php

    // Return buffered content
    return ob_get_clean();
}
