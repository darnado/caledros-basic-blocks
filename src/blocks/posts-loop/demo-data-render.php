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

function caledros_basic_blocks_render_card($placeholder_url, $placeholder_background_url, $title, $date) {
    ?>
    <div class="cbb-posts-loop__card">
        <div class="cbb-posts-loop_post-header">
            <p class="cbb-posts-loop_website-title">
                <img
                    decoding="async"
                    class="cbb-posts-loop_website-title-icon"
                    src="<?php echo esc_url($placeholder_url); ?>"
                    alt="placeholder"
                />
                Basic Theme
            </p>
            <div class="cbb-posts-loop_post-author-and-date">
                <span class="cbb-posts-loop__author">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
                    </svg>
                    John Doe
                </span>
                <span class="cbb-posts-loop__date">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         class="bi bi-calendar2-event" viewBox="0 0 16 16">
                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
                    </svg>
                    <?php echo esc_html($date, "caledros-basic-blocks"); ?>
                </span>
            </div>
        </div>
        <div class="cbb-posts-loop__img-container">
            <a class="cbb-posts-loop__img-link" href="#">
                <?php 
                // I'm using a direct <img> tag because the image is a static plugin asset,
                // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                // is not applicable, as it requires an attachment ID and is intended for media uploads.?>
                <img src="<?php echo esc_url($placeholder_background_url); // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage ?>" alt="Placeholder"/>
                <span class="cbb-posts-loop__post-title">
                    <?php echo esc_html($title, "caledros-basic-blocks"); ?> 
                </span>
            </a>
        </div>
        <div class="cbb-posts-loop__post-info">
            <div class="cbb-posts-loop__category-and-tag">
                <a class="cbb-posts-loop__category" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path>
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path>
                    </svg>
                    Blogs
                </a>
                <a class="cbb-posts-loop__tag" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                        <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"></path>
                        <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"></path>
                    </svg>
                    Marketing
                </a>
            </div>
        </div>
    </div>
    <?php
}

function caledros_basic_blocks_get_demo_data($placeholder_background_url, $placeholder_url) {
    $cards = [
        ['title' => 'Marketing Moves That Matter', 'date' => 'May 15, 2025'],
        ['title' => 'What’s Working in 2025', 'date' => 'May 16, 2025'],
        ['title' => 'Quick Wins for Smart Marketers', 'date' => 'May 16, 2025'],
        ['title' => 'Trends to Watch this Quarter', 'date' => 'May 17, 2025']        
    ];

    ob_start();
    ?>
    <div class="cbb-posts-loop">
        <div class="cbb-posts-loop__container">
            <?php foreach ($cards as $card) {
                caledros_basic_blocks_render_card($placeholder_url, $placeholder_background_url, $card['title'], $card['date']);
            } ?>
        </div>
    </div>
    <?php
    // Fetch the content of the ouput buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Ouput the stored content
    return $output;
}
