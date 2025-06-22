/*
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

import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function EditBlock() {
  // Block props
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p>
        The Content Renderer block allows you to display the content of a
        specific page or post dynamically. Unlike the default content block,
        this block seamlessly integrates the content without adding any extra
        wrapper or unnecessary markup, ensuring clean and minimal output. Ideal
        for developers and designers who want to maintain precise control over
        the structure and styling of their layouts.
      </p>
    </div>
  );
}
