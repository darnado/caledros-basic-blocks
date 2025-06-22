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

function caledros_basic_blocks_sidebar_menu_render_cb($attributes){
    // BLOCK ATTRIBUTES
    // Sidebar slug
    $sidebar_slug = sanitize_text_field($attributes['sidebarSlug'] ?? '');

    // Sidebar minimum width
    $sidebar_min_width = sanitize_text_field($attributes['sidebarMinWidth'] ?? '50%');

    // Colors
    $light_background_color = sanitize_text_field($attributes['lightBackgroundColor'] ?? '#f4f4f4');
    $dark_background_color = sanitize_text_field($attributes['darkBackgroundColor'] ?? '#333333');
    $button_light_color = sanitize_text_field($attributes['buttonLightColor'] ?? '#333333');
    $button_dark_color = sanitize_text_field($attributes['buttonDarkColor'] ?? '#f4f4f4');

    // Close button
    $close_button_position = $attributes['closeButtonPosition'] ?? '';
    $close_button_position_top = sanitize_text_field($close_button_position['top'] ?? '20px');
    $close_button_position_right = sanitize_text_field($close_button_position['right'] ?? '20px');

    // Open button padding
    $open_button_padding = $attributes['openButtonPadding'] ?? '';
    $open_button_top_padding = sanitize_text_field($open_button_padding['top'] ?? '0px');
    $open_button_right_padding = sanitize_text_field($open_button_padding['right'] ?? '0px');
    $open_button_bottom_padding = sanitize_text_field($open_button_padding['bottom'] ?? '0px');
    $open_button_left_padding = sanitize_text_field($open_button_padding['left'] ?? '0px');
    $open_button_different_paddings_enabled = filter_var($open_button_padding['differentPaddingsEnabled'] ?? false, FILTER_VALIDATE_BOOLEAN);

    // Open button styles
    $open_button_styles = $attributes['openButtonStyles'] ?? '';
    $open_button_height = sanitize_text_field($open_button_styles['buttonHeight'] ?? '45px');
    $open_button_gap = sanitize_text_field($open_button_styles['buttonGap'] ?? '5px');
    $open_button_border_width = sanitize_text_field($open_button_styles['buttonBorderWidth'] ?? '0px');
    $open_button_border_radius = sanitize_text_field($open_button_styles['buttonBorderRadius'] ?? '0px');
    $open_button_bar_height = sanitize_text_field($open_button_styles['barsHeight'] ?? '3px');
    $open_button_top_and_bottom_bar_width = sanitize_text_field($open_button_styles['topAndBottomBarsWidth'] ?? '30px');
    $open_button_center_bar_width = sanitize_text_field($open_button_styles['centerBarWidth'] ?? '30px');
    $open_button_bar_border_radius = sanitize_text_field($open_button_styles['barsBorderRadius'] ?? '100px');

    // Close button styles
    $close_button_styles = $attributes['closeButtonStyles'] ?? '';
    $close_button_height = sanitize_text_field($close_button_styles['buttonHeight'] ?? '40px');
    $close_button_width = sanitize_text_field($close_button_styles['buttonWidth'] ?? '40px');
    $close_button_border_width = sanitize_text_field($close_button_styles['buttonBorderWidth'] ?? '1px');
    $close_button_border_radius = sanitize_text_field($close_button_styles['buttonBorderRadius'] ?? '5px');
    $close_button_bar_height = sanitize_text_field($close_button_styles['barsHeight'] ?? '4px');
    $close_button_bar_width = sanitize_text_field($close_button_styles['barsWidth'] ?? '35px');
    $close_button_bar_border_radius = sanitize_text_field($close_button_styles['barsBorderRadius'] ?? '50px');

    // GENERAL STYLES
    $style = "--cbb-light-bg-color:$light_background_color";
    $style .= ";--cbb-dark-bg-color:$dark_background_color";
    $style .= ";--cbb-btn-light-color:$button_light_color";
    $style .= ";--cbb-btn-dark-color:$button_dark_color";
    $style .= ";--cbb-close-btn-position-top:$close_button_position_top";
    $style .= ";--cbb-close-btn-position-right:$close_button_position_right";
    $style .= ";--cbb-open-btn-bar-height:$open_button_bar_height";
    $style .= ";--cbb-open-btn-top-bottom-bar-width:$open_button_top_and_bottom_bar_width";
    $style .= ";--cbb-open-btn-center-bar-width:$open_button_center_bar_width";
    $style .= ";--cbb-open-btn-bar-border-radius:$open_button_bar_border_radius";

    // OPEN BUTTON SPECIFIC STYLES
    $open_button_styles_array = ["height:$open_button_height", "gap:$open_button_gap"];

    // Add styles conditionally
    if($open_button_different_paddings_enabled){
        $open_button_styles_array[] = "padding:$open_button_top_padding $open_button_right_padding $open_button_bottom_padding $open_button_left_padding";
    }

    if(!$open_button_different_paddings_enabled && floatval($open_button_top_padding) !== 0.0){
        $open_button_styles_array[] =  "padding:$open_button_top_padding";
    }

    if ($open_button_border_radius !== "0px") {
        $open_button_styles_array[] = "border-radius:$open_button_border_radius";
    }

    if ($open_button_border_width !== "0px") {
        $open_button_styles_array[] = "--cbb-open-btn-border-width:$open_button_border_width";
    }

    // Join the styles with a semicolon
    $open_button_styles = implode(';', $open_button_styles_array);

    // Prepare the final string for inline CSS
    $open_button_styles = !empty($open_button_styles) ? 'style="' . $open_button_styles . '"' : "";

    // CLOSE BUTTON SPECIFIC STYLES
    $close_button_styles_array = ["width:$close_button_width", "height:$close_button_height", "--cbb-close-btn-bar-height:$close_button_bar_height", "--cbb-close-btn-bar-width:$close_button_bar_width", "--cbb-close-btn-bar-border-radius:$close_button_bar_border_radius"];

    // Add styles conditionally
    if($close_button_border_width !== "0px"){
        $close_button_styles_array[] = "--cbb-close-btn-border-width:$close_button_border_width";
    }

    if ($close_button_border_radius !== "0px") {
        $close_button_styles_array[] = "border-radius:$close_button_border_radius";
    }

    // Join the styles with a semicolon
    $close_button_styles = implode(';', $close_button_styles_array);

    // Prepare the final string for inline CSS
    $close_button_styles = !empty($close_button_styles) ? 'style="' . $close_button_styles . '"' : "";

    // SIDEBAR MENU SPECIFIC STYLES
    $sidebar_styles = "min-width: $sidebar_min_width";
    $sidebar_styles = 'style="' . $sidebar_styles . '"';

    // SANITIZE CONTENT
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

    // BUFFERING
    // Start ouput buffering
    ob_start(); 
    ?> 
    <div class="cbb-sidebar-menu" data-wp-interactive="mobile-overlay" data-wp-context='{"visible":false}' style="<?php echo esc_attr($style); ?>">
        <div class="cbb-sidebar-menu__header">
            <div class="cbb-sidebar-menu__button" <?php echo wp_kses_post($open_button_styles);?> data-wp-on--click="actions.click"> 
                <span></span>           
            </div>
        </div>
        <div class="cbb-sidebar-menu__container" <?php echo wp_kses_post($sidebar_styles); ?> data-wp-class--cbb-sidebar-menu-container--visible="context.visible">
            <div class="cbb-sidebar-menu__close-button" <?php echo wp_kses_post($close_button_styles);?> data-wp-on--click="actions.click"></div>
            <?php echo wp_kses(block_template_part( $sidebar_slug ) ?? '', $allowed_tags); ?> 
        </div>    
        <div class="cbb-sidebar-menu__hidden-overlay" data-wp-on--click="actions.click" data-wp-class--cbb-sidebar-menu__hidden-overlay--visible ="context.visible"></div>
    </div>
    <?php 

    // Fetch the content of the ouput buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Ouput the stored content
    return $output; 
}


