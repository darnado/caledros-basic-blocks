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

export default function EditBlock({ attributes, setAttributes }) {
  const { socialMediaIcon } = attributes;

  // Block props
  const blockProps = useBlockProps({
    className: `cbb-social-icon cbb-social-icon--${socialMediaIcon}`,
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
      </InspectorControls>
      <div {...blockProps}>
        <span className="cbb-social-icon__icon-container"></span>
        <a className="cbb-social-icon__main-link"></a>
      </div>
    </>
  );
}
