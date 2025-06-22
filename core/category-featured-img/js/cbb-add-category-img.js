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

jQuery(document).ready(function ($) {
  $("#category_media_button").click(function (e) {
    e.preventDefault();
    const image = wp.media({
      title: "Upload Image",
      multiple: false,
      library: {
        type: "image",
      },
      button: {
        text: "Use this image",
      },
    });
    image.on("select", function (e) {
      const uploaded_image = image.state().get("selection").first();
      const image_url = uploaded_image.toJSON().url;
      $("#category_image").val(uploaded_image.id);
      $("#category_image_url").val(image_url);
      $("#image-preview").html(
        "<img src='" + image_url + "' style='max-width: 200px;'>"
      );
      image.close();
    });
    image.open();
  });
});
