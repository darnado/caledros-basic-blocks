<?php
/**
 * Renders the content of the menu link block
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

// Recover current URL.
global $wp;
$caledros_basic_blocks_permalink_structure = get_option( 'permalink_structure' );
$caledros_basic_blocks_permalink_structure = sanitize_option( 'permalink_structure', $caledros_basic_blocks_permalink_structure );
$caledros_basic_blocks_current_url         = '';
if ( '' === $caledros_basic_blocks_permalink_structure ) {
	$caledros_basic_blocks_current_url = add_query_arg( $wp->query_vars, home_url( $wp->request ) );
} elseif ( substr( $caledros_basic_blocks_permalink_structure, -1 ) === '/' ) {
		$caledros_basic_blocks_current_url = trailingslashit( home_url( $wp->request ) );
} else {
	$caledros_basic_blocks_current_url = home_url( $wp->request );
}
$caledros_basic_blocks_current_url = sanitize_url( $caledros_basic_blocks_current_url );

// Recover block attributes.
$caledros_basic_blocks_menu_link                   = sanitize_text_field( $attributes['menuLink'] ?? '#' );
$caledros_basic_blocks_mega_menu_width             = intval( $attributes['megaMenuWidth'] ?? 0 );
$caledros_basic_blocks_menu_label                  = sanitize_text_field( $attributes['menuLabel'] ?? 'Menu link' );
$caledros_basic_blocks_animation_type              = sanitize_text_field( $attributes['animationType'] ?? '' );
$caledros_basic_blocks_menu_text_light_color       = sanitize_text_field( $attributes['menuTextLightColor'] ?? '#000000' );
$caledros_basic_blocks_menu_text_light_hover_color = sanitize_text_field( $attributes['menuLightHoverColor'] ?? '#000000' );
$caledros_basic_blocks_menu_text_dark_color        = sanitize_text_field( $attributes['menuTextDarkColor'] ?? '#ffffff' );
$caledros_basic_blocks_menu_text_dark_hover_color  = sanitize_text_field( $attributes['menuDarkHoverColor'] ?? '#ffffff' );
$caledros_basic_blocks_menu_font_weight            = intval( $attributes['menuFontWeight'] ?? 400 );
$caledros_basic_blocks_menu_font_style             = sanitize_text_field( $attributes['menuFontStyle'] ?? 'normal' );
$caledros_basic_blocks_menu_font_size              = sanitize_text_field( $attributes['menuFontSize'] ?? 'var(--wp--preset--font-size--medium)' );
$caledros_basic_blocks_menu_font_family            = sanitize_text_field( $attributes['menuFontFamily'] ?? '' );
$caledros_basic_blocks_menu_line_height            = sanitize_text_field( $attributes['menuLineHeight'] ?? '' );
$caledros_basic_blocks_menu_letter_spacing         = sanitize_text_field( $attributes['menuLetterSpacing'] ?? 'normal' );
$caledros_basic_blocks_menu_letter_case            = sanitize_text_field( $attributes['menuLetterCase'] ?? 'none' );
$caledros_basic_blocks_menu_type                   = sanitize_text_field( $attributes['menuType'] ?? 'simple' );
$caledros_basic_blocks_mega_menu_slug              = sanitize_text_field( $attributes['megaMenuSlug'] ?? '' );

// Check if menu link is active.
$caledros_basic_blocks_is_active_link = false;
if ( $caledros_basic_blocks_current_url === $caledros_basic_blocks_menu_link ) {
	$caledros_basic_blocks_is_active_link = true;
}
$caledros_basic_blocks_active_link_class = $caledros_basic_blocks_is_active_link ? ' cbb-menu-link--active' : '';
$caledros_basic_blocks_active_link_class = esc_attr( $caledros_basic_blocks_active_link_class );

// Set light-mode color.
$caledros_basic_blocks_menu_text_light_color = $caledros_basic_blocks_is_active_link ? $caledros_basic_blocks_menu_text_light_hover_color : $caledros_basic_blocks_menu_text_light_color;

// Set dark-mode color.
$caledros_basic_blocks_menu_text_dark_color = $caledros_basic_blocks_is_active_link ? $caledros_basic_blocks_menu_text_dark_hover_color : $caledros_basic_blocks_menu_text_dark_color;

// Set inline styles.
$caledros_basic_blocks_style  = "--cbb-menu-light-color:$caledros_basic_blocks_menu_text_light_color";
$caledros_basic_blocks_style .= ";--cbb-menu-light-hover:$caledros_basic_blocks_menu_text_light_hover_color";
$caledros_basic_blocks_style .= ";--cbb-menu-dark-color:$caledros_basic_blocks_menu_text_dark_color";
$caledros_basic_blocks_style .= ";--cbb-menu-dark-hover:$caledros_basic_blocks_menu_text_dark_hover_color";
$caledros_basic_blocks_style .= ";font-weight:$caledros_basic_blocks_menu_font_weight";
$caledros_basic_blocks_style .= ";font-style:$caledros_basic_blocks_menu_font_style";
$caledros_basic_blocks_style .= ";font-size:$caledros_basic_blocks_menu_font_size";
$caledros_basic_blocks_style .= '' !== $caledros_basic_blocks_menu_font_family ? ";font-family:var(--wp--preset--font-family--$caledros_basic_blocks_menu_font_family)" : '';
$caledros_basic_blocks_style .= '' !== $caledros_basic_blocks_menu_line_height ? ";line-height:$caledros_basic_blocks_menu_line_height" : '';
$caledros_basic_blocks_style .= 'normal' !== $caledros_basic_blocks_menu_letter_spacing ? ";letter-spacing:$caledros_basic_blocks_menu_letter_spacing" : '';
$caledros_basic_blocks_style .= 'none' !== $caledros_basic_blocks_menu_letter_case ? ";text-transform:$caledros_basic_blocks_menu_letter_case" : '';

// Set classes.
$caledros_basic_blocks_classes  = 'cbb-menu-link';
$caledros_basic_blocks_classes .= 'none' === $caledros_basic_blocks_animation_type ? '' : " cbb-menu-link--$caledros_basic_blocks_animation_type";
$caledros_basic_blocks_classes .= $caledros_basic_blocks_active_link_class;

// Start output buffering.
ob_start();
?>   
<?php
if ( 'simple' === $caledros_basic_blocks_menu_type && '' !== $caledros_basic_blocks_menu_label ) {
	?>
<a href="<?php echo esc_url( $caledros_basic_blocks_menu_link ); ?>" class="<?php echo esc_attr( $caledros_basic_blocks_classes ); ?>" style="<?php echo esc_attr( $caledros_basic_blocks_style ); ?>">
	<?php echo esc_html( $caledros_basic_blocks_menu_label ); ?>
</a>
	<?php
}
if ( 'mega-menu' === $caledros_basic_blocks_menu_type && '' !== $caledros_basic_blocks_menu_label && '' !== $caledros_basic_blocks_mega_menu_slug ) {
	?>
<div class="cbb-mega-menu">
	<a href="<?php echo esc_url( $caledros_basic_blocks_menu_link ); ?>" class="<?php echo esc_attr( $caledros_basic_blocks_classes ); ?>" style="<?php echo esc_attr( $caledros_basic_blocks_style ); ?>">
		<?php echo esc_html( $caledros_basic_blocks_menu_label ); ?>
	</a>
	<div class="cbb-mega-menu__container" style="width:<?php echo esc_attr( $caledros_basic_blocks_mega_menu_width ); ?>px;">        
		<?php block_template_part( $caledros_basic_blocks_mega_menu_slug ); ?>
	</div>    
</div>
	<?php
}
// Fetch the content of the ouput buffer.
$caledros_basic_blocks_output = ob_get_contents();
// Stop output buffering.
ob_end_clean();
// Ouput the stored content.
echo wp_kses_post( $caledros_basic_blocks_output );
