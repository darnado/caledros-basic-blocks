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

import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function SaveBlock({ attributes }) {
  const {
    iconsGap,
    groupMargin,
    socialIconsSize,
    socialIconsColor,
    socialIconsDarkColor,
  } = attributes;

  // Block props
  const blockProps = useBlockProps.save({
    className: "cbb-social-icons-group",
    style: {
      margin: groupMargin.differentMarginsEnabled
        ? `${groupMargin.top} ${groupMargin.right} ${groupMargin.bottom} ${groupMargin.left}`
        : `${groupMargin.top}`,
      gap: `${iconsGap}px`,
      "--cbb-social-icon-size": `${socialIconsSize}px`,
      "--cbb-social-icon-color": `${socialIconsColor}`,
      "--cbb-social-icon-dark-color": `${socialIconsDarkColor}`,
    },
  });
  return (
    <div {...blockProps}>
      <InnerBlocks.Content />
    </div>
  );
}
