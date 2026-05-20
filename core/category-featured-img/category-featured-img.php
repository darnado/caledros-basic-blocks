<?php
/**
 * Manages category featured images
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

/**
 * Renders button for selecting the category featured image
 *
 * After choosing an image, a preview of such image will
 * be visible below the button. This function is hooked to 'category_add_form_fields'.
 *
 * @return void
 */
function caledros_basic_blocks_add_category_image_field() {
	wp_enqueue_media();
	?>
	<div class="form-field">
		<p style="margin-bottom:5px;color:#1d2327;font-weight:400;"><?php esc_html_e( 'Category Image', 'caledros-basic-blocks' ); ?></p>
		<input type="button" style="margin-bottom:10px;" class="button button-secondary category_media_button" id="category_media_button" name="category_media_button" value="<?php esc_attr_e( 'Select image', 'caledros-basic-blocks' ); ?>" />
		<input type="hidden" id="category_image" name="category_image">
		<input type="hidden" id="category_image_url" name="category_image_url">
		<?php wp_nonce_field( 'save_category_image_action', 'category_image_nonce' ); ?>
		<div id='image-preview'></div>
	</div>
	<?php
}
add_action( 'category_add_form_fields', 'caledros_basic_blocks_add_category_image_field' );

/**
 * Enqueue JS for adding the category featured image
 *
 * The JS code populates the content for the hidden inputs and the image preview
 * in the custom form field. This callback is hooked into 'admin_enqueue_scripts'.
 *
 * @return void
 */
function caledros_basic_blocks_add_category_image_script() {
	wp_enqueue_media();
	wp_enqueue_script(
		'caledros-basic-blocks-add-category-image-js',
		plugin_dir_url( __FILE__ ) . 'js/cbb-add-category-img.js',
		array( 'jquery' ),
		'1.0',
		true
	);
}
add_action( 'admin_enqueue_scripts', 'caledros_basic_blocks_add_category_image_script' );

/**
 * Renders the form field for editing the category featured image
 *
 * @param WP_Term $term WordPress object that represents a category.
 * @return void
 */
function caledros_basic_blocks_edit_category_image_field( $term ) {
	// Category image id.
	$category_image_raw = get_term_meta( $term->term_id, 'category_image', true );
	$category_image     = intval( $category_image_raw ); // Sanitize: force to integer (safe to store or use).
	if ( $category_image <= 0 ) { // Validate: must be a positive integer (0 is invalid for attachment ID).
		$category_image = 0;
	}
	// Category image URL.
	$category_image_url = get_term_meta( $term->term_id, 'category_image_url', true ); // Sanitize: none (raw URL comes from database).
	$category_image_url = filter_var( $category_image_url, FILTER_VALIDATE_URL ) ? $category_image_url : ''; // Validate: must be a valid URL.
	// Category image alt.
	$alt_text_category_image = get_term_meta( $term->term_id, 'alt_text_category_image', true );
	$alt_text_category_image = sanitize_text_field( $alt_text_category_image ); // Sanitize: remove unwanted characters. Validation is not critical, as alt text is free-form.
	?>
	<tr class="form-field">
		<th scope="row" valign="top"><label for="category_image"><?php esc_html_e( 'Category image', 'caledros-basic-blocks' ); ?></label></th>
		<td>
			<input type="button" style="margin-bottom:10px;" class="button button-secondary category_media_button" id="category_media_button" name="category_media_button" value="<?php esc_attr_e( 'Select image', 'caledros-basic-blocks' ); ?>" />
			<input type="hidden" id="category_image" name="category_image" value="<?php echo esc_attr( $category_image ); ?>">
			<?php wp_nonce_field( 'save_category_image_action', 'category_image_nonce' ); ?>
			<input type="hidden" id="category_image_url" name="category_image_url" value="<?php echo esc_url( $category_image_url ); ?>">
			<div id='image-preview'>
				<?php
				echo wp_get_attachment_image(
					$category_image,
					'full',
					false,
					array(
						'alt'   => esc_attr( $alt_text_category_image ),
						'style' => 'max-width:200px; height:auto',
					)
				);
				?>
			</div>         
		</td>
	</tr>    
	<?php
}
add_action( 'category_edit_form_fields', 'caledros_basic_blocks_edit_category_image_field' );

/**
 * Enqueues JS for editing the category featured image
 *
 * Populates the content of the form fields used for editing the category featured image.
 * This callback is hooked into 'admin_enqueue_scripts'.
 *
 * @return void
 */
function caledros_basic_blocks_edit_category_image_script() {
	wp_enqueue_media();
	wp_enqueue_script(
		'caledros-basic-blocks-edit-category-image-js',
		plugin_dir_url( __FILE__ ) . 'js/cbb-edit-category-img.js',
		array( 'jquery' ),
		'1.0',
		true
	);
}
add_action( 'admin_enqueue_scripts', 'caledros_basic_blocks_edit_category_image_script' );

/**
 * Renders 'alt text' form field when creating a new category
 *
 * Adds an 'alt text' form field for the category featured image.
 * This form field is rendered in the Add Category form.
 * This callback is hooked into 'category_add_form_fields'.
 *
 * @return void
 */
function caledros_basic_blocks_add_alt_text_category_image() {
	?>
	<div class="form-field">
		<label for="alt-text-category-image"><?php esc_html_e( 'Alt text', 'caledros-basic-blocks' ); ?></label>
		<input type="text" id="alt-text-category-image" name="alt_text_category_image">
		<?php wp_nonce_field( 'save_category_alt_text_image_action', 'category_alt_text_image_nonce' ); ?>
		<p class="description"><?php esc_html_e( 'Write the alt text for the image', 'caledros-basic-blocks' ); ?></p>
	</div>
	<?php
}
add_action( 'category_add_form_fields', 'caledros_basic_blocks_add_alt_text_category_image' );

/**
 * Renders 'alt text' form field when editing an existing category
 *
 * Adds an 'alt text' form field for the category featured image.
 * This form field is rendered in the Edit Category form.
 * This callback is hooked into 'category_add_form_fields'.
 *
 * @param WP_Term $term A WordPress object that represents a category.
 *
 * @return void
 */
function caledros_basic_blocks_edit_alt_text_category_image( $term ) {
	$alt_text_category_image = get_term_meta( $term->term_id, 'alt_text_category_image', true );
	$alt_text_category_image = sanitize_text_field( $alt_text_category_image ); // Sanitize: remove unwanted characters. Validation is not critical, as alt text is free-form.
	?>
	<tr class="form-field">
		<?php wp_nonce_field( 'save_category_alt_text_image_action', 'category_alt_text_image_nonce' ); ?>
		<th scope="row"><label for="alt-text-category-image"><?php esc_html_e( 'Alt text', 'caledros-basic-blocks' ); ?></label></th>
		<td>
			<input type="text" id="alt-text-category-image" name="alt_text_category_image" value="<?php echo esc_attr( $alt_text_category_image ); ?>">
			<p class="description"><?php esc_html_e( 'Write the alt text for the image', 'caledros-basic-blocks' ); ?></p>
		</td>
	</tr>
	<?php
}
add_action( 'category_edit_form_fields', 'caledros_basic_blocks_edit_alt_text_category_image' );

/**
 * Save category image in WordPress database
 *
 * Saves the image ID, alt text, and image URL. This callback is hooked to:
 * - 'created_category'
 * - 'edited_category'
 *
 * @param integer $term_id The numeric ID of the category.
 * @return void
 */
function caledros_basic_blocks_save_category_image( $term_id ) {
	// Verify category image (ID, URL) nonce.
	if ( ! isset( $_POST['category_image_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['category_image_nonce'] ) ), 'save_category_image_action' ) ) {
		return;
	}
	// Verify category image alt text nonce.
	if ( ! isset( $_POST['category_alt_text_image_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['category_alt_text_image_nonce'] ) ), 'save_category_alt_text_image_action' ) ) {
		return;
	}
	// Save category image ID.
	if ( isset( $_POST['category_image'] ) ) {
		$image_id = intval( $_POST['category_image'] ); // Sanitize: force to integer (safer to store).
		if ( $image_id > 0 && strpos( get_post_mime_type( $image_id ), 'image/' ) === 0 ) { // Validate: Check if the image ID corresponds to an existing image.
			update_term_meta( $term_id, 'category_image', $image_id );
		}
	}
	// Save alt text.
	if ( isset( $_POST['alt_text_category_image'] ) ) {
		$alt_text = sanitize_text_field( wp_unslash( $_POST['alt_text_category_image'] ) ); // Sanitize: remove unwanted characters.
		if ( strlen( $alt_text ) <= 255 ) { // Validate: Alt text must not be longer than 255 characters.
			update_term_meta( $term_id, 'alt_text_category_image', $alt_text );
		}
	}
	// Save category image url.
	if ( isset( $_POST['category_image_url'] ) ) {
		$image_url = esc_url_raw( wp_unslash( $_POST['category_image_url'] ) ); // Sanitize: remove unwanted characters from the URL.
		if ( filter_var( $image_url, FILTER_VALIDATE_URL ) && preg_match( '/\.(jpg|jpeg|png|gif|webp)$/i', $image_url ) ) { // Validate: must be a valid image URL.
			update_term_meta( $term_id, 'category_image_url', $image_url );
		}
	}
}
add_action( 'created_category', 'caledros_basic_blocks_save_category_image' );
add_action( 'edited_category', 'caledros_basic_blocks_save_category_image' );

/**
 * Register category new meta keys
 *
 * The new registered meta keys are:
 * - category_image
 * - alt_text_category_image
 * - category_image_url
 *
 * This callback is hooked to 'init'.
 *
 * @return void
 */
add_action(
	'init',
	function () {
		register_term_meta(
			'category',
			'category_image',
			array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
			)
		);

		register_term_meta(
			'category',
			'alt_text_category_image',
			array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
			)
		);

		register_term_meta(
			'category',
			'category_image_url',
			array(
				'type'         => 'string',
				'single'       => true,
				'show_in_rest' => true,
			)
		);
	}
);