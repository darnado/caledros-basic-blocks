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

import {
  useBlockProps,
  InspectorControls,
  InnerBlocks,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import IconsColorSettings from "./settings/icons-color-settings";
import IconsDarkColorSettings from "./settings/icons-dark-color-settings";
import IconsSizeSettings from "./settings/icons-size-settings";
import MarginSettings from "./settings/margin-settings";
import SpaceBetweenIconsSettings from "./settings/space-between-icons-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const {
    iconsGap,
    groupMargin,
    socialIconsSize,
    socialIconsColor,
    socialIconsDarkColor,
  } = attributes;

  // Block props
  const blockProps = useBlockProps({
    className: "cbb-social-icons-group",
    style: {
      margin: groupMargin.differentMarginsEnabled
        ? `${groupMargin.top} ${groupMargin.right} ${groupMargin.bottom} ${groupMargin.left}`
        : `${groupMargin.top}`,
      "--cbb-icon-group-gap": `${iconsGap}px`,
      "--cbb-social-icon-size": `${socialIconsSize}px`,
      "--cbb-social-icon-color": `${socialIconsColor}`,
      "--cbb-social-icon-dark-color": `${socialIconsDarkColor}`,
    },
  });

  return (
    <>
      <InspectorControls>
        <IconsColorSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></IconsColorSettings>
        <IconsDarkColorSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></IconsDarkColorSettings>
        <IconsSizeSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></IconsSizeSettings>
        <SpaceBetweenIconsSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></SpaceBetweenIconsSettings>
        <MarginSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></MarginSettings>
      </InspectorControls>
      <div {...blockProps}>
        <InnerBlocks
          template={[
            ["caledros-basic-blocks/social-icon"],
            ["caledros-basic-blocks/social-icon"],
            ["caledros-basic-blocks/social-icon"],
          ]}
          allowedBlocks={["caledros-basic-blocks/social-icon"]}
        />
      </div>
    </>
  );
}
