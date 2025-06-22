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

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import IconSettings from "./settings/icon-settings";
import LinkSettings from "./settings/link-settings";
import IconsColorSettings from "./settings/icons-color-settings";
import IconsDarkColorSettings from "./settings/icons-dark-color-settings";
import IconsSizeSettings from "./settings/icons-size-settings";

export default function EditBlock({ attributes, setAttributes }) {
  const { icon, iconLinkEnabled, iconsSize, iconsColor, iconsDarkColor } =
    attributes;

  // Block props
  const blockProps = useBlockProps({
    className: `cbb-icon cbb-icon--${icon}`,
    style: {
      "--cbb-icon-size": `${iconsSize}px`,
      "--cbb-icon-color": `${iconsColor}`,
      "--cbb-icon-dark-color": `${iconsDarkColor}`,
    },
  });

  return (
    <>
      <InspectorControls>
        <IconSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></IconSettings>
        <LinkSettings
          attributes={attributes}
          setAttributes={setAttributes}
        ></LinkSettings>
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
      </InspectorControls>
      <div {...blockProps}>
        <span className="cbb-icon__icon-container"></span>
        {iconLinkEnabled && <a className="cbb-icon__main-link"></a>}
        {!iconLinkEnabled && <span className="cbb-icon__simple-icon"></span>}
      </div>
    </>
  );
}
