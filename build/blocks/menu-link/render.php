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

// Recover current URL
global $wp;
$permalink_structure = get_option('permalink_structure');
$permalink_structure = sanitize_option('permalink_structure', $permalink_structure );
$current_url = "";
if($permalink_structure === ""){
    $current_url = add_query_arg( $wp->query_vars, home_url( $wp->request ) );
}else{ 
    if(substr($permalink_structure, -1) === "/"){
        $current_url =  trailingslashit( home_url( $wp->request ) );
    }else{
        $current_url =  home_url( $wp->request );
    }    
}
$current_url = sanitize_url($current_url);

// Recover block attributes
$menu_link = sanitize_text_field($attributes['menuLink'] ?? '#');
$mega_menu_width = intval($attributes['megaMenuWidth'] ?? 0);
$menu_label = sanitize_text_field( $attributes['menuLabel'] ?? 'Menu link' );
$animation_type = sanitize_text_field( $attributes['animationType'] ?? '');
$menu_text_light_color = sanitize_text_field( $attributes['menuTextLightColor'] ?? '#000000');
$menu_text_light_hover_color = sanitize_text_field( $attributes['menuLightHoverColor'] ?? '#000000');
$menu_text_dark_color = sanitize_text_field( $attributes['menuTextDarkColor'] ?? '#ffffff');
$menu_text_dark_hover_color = sanitize_text_field( $attributes['menuDarkHoverColor'] ?? '#ffffff');
$menu_font_weight = intval($attributes['menuFontWeight'] ?? 400);
$menu_font_style = sanitize_text_field( $attributes['menuFontStyle'] ?? 'normal');
$menu_font_size = sanitize_text_field($attributes['menuFontSize'] ?? 'var(--wp--preset--font-size--medium)');
$menu_font_family = sanitize_text_field( $attributes['menuFontFamily'] ?? '');
$menu_line_height = sanitize_text_field( $attributes['menuLineHeight'] ?? '');
$menu_letter_spacing = sanitize_text_field( $attributes['menuLetterSpacing'] ?? 'normal');
$menu_letter_case = sanitize_text_field( $attributes['menuLetterCase'] ?? 'none');
$menu_type = sanitize_text_field( $attributes['menuType'] ?? 'simple');
$mega_menu_slug = sanitize_text_field( $attributes['megaMenuSlug'] ?? '');

// Check if menu link is active
$is_active_link = false;
if($current_url === $menu_link){
  $is_active_link = true;
}
$active_link_class = $is_active_link ? " cbb-menu-link--active" : "";
$active_link_class = esc_attr( $active_link_class );

// Set light-mode color
$menu_text_light_color = $is_active_link ? $menu_text_light_hover_color : $menu_text_light_color;

// Set dark-mode color
$menu_text_dark_color = $is_active_link ? $menu_text_dark_hover_color : $menu_text_dark_color;

// Set inline styles
$style = "--cbb-menu-light-color:$menu_text_light_color";
$style .= ";--cbb-menu-light-hover:$menu_text_light_hover_color";
$style .= ";--cbb-menu-dark-color:$menu_text_dark_color";
$style .= ";--cbb-menu-dark-hover:$menu_text_dark_hover_color";
$style .= ";font-weight:$menu_font_weight";
$style .= ";font-style:$menu_font_style";
$style .= ";font-size:$menu_font_size";
$style .= $menu_font_family !== "" ? ";font-family:var(--wp--preset--font-family--$menu_font_family)" : "";
$style .= $menu_line_height !== "" ? ";line-height:$menu_line_height" : "";
$style .= $menu_letter_spacing !== "normal" ? ";letter-spacing:$menu_letter_spacing" : "";
$style .= $menu_letter_case !== "none" ? ";text-transform:$menu_letter_case" : "";

// Set classes
$classes = "cbb-menu-link";
$classes .= $animation_type === "none" ? "" : " cbb-menu-link--$animation_type";
$classes .= $active_link_class;

// Start output buffering
ob_start(); 
?>   
<?php 
if($menu_type === "simple" && $menu_label !== ""){
?>
<a href="<?php echo esc_url($menu_link); ?>" class="<?php echo esc_attr($classes); ?>" style="<?php echo esc_attr($style); ?>">
    <?php echo esc_html($menu_label); ?>
</a>
<?php
}
if($menu_type === "mega-menu" && $menu_label !== "" && $mega_menu_slug !== "" ){
?>
<div class="cbb-mega-menu">
    <a href="<?php echo esc_url($menu_link); ?>" class="<?php echo esc_attr($classes); ?>" style="<?php echo esc_attr($style); ?>">
        <?php echo esc_html($menu_label); ?>
    </a>
    <div class="cbb-mega-menu__container" style="width:<?php echo esc_attr($mega_menu_width); ?>px;">        
        <?php block_template_part( $mega_menu_slug ); ?>
    </div>    
</div>
<?php 
}
// Fetch the content of the ouput buffer
$output = ob_get_contents();
// Stop output buffering
ob_end_clean();
// Ouput the stored content
echo wp_kses_post($output); 
