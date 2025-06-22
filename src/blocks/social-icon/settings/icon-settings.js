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

import { PanelBody, SelectControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function IconSettings({ attributes, setAttributes }) {
  const { socialMediaIcon } = attributes;
  return (
    <PanelBody
      title={__("Social media icon", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__("Choose your social media icon", "caledros-basic-blocks")}
        value={socialMediaIcon}
        options={[
          {
            label: "Amazon",
            value: "amazon",
          },
          {
            label: "Behance",
            value: "behance",
          },
          {
            label: "Dropbox",
            value: "dropbox",
          },
          {
            label: "Facebook",
            value: "facebook",
          },
          {
            label: "Github",
            value: "github",
          },
          {
            label: "Instagram",
            value: "instagram",
          },
          {
            label: "Link",
            value: "link",
          },
          {
            label: "Linkedin",
            value: "linkedin",
          },
          {
            label: "Mail",
            value: "envelope",
          },
          {
            label: "Mail (filled)",
            value: "envelope-fill",
          },
          {
            label: "Pinterest",
            value: "pinterest",
          },
          {
            label: "Skype",
            value: "skype",
          },
          {
            label: "Snapchat",
            value: "snapchat",
          },
          {
            label: "Spotify",
            value: "spotify",
          },
          {
            label: "Threads",
            value: "threads",
          },
          {
            label: "Tiktok",
            value: "tiktok",
          },
          {
            label: "Twitch",
            value: "twitch",
          },
          {
            label: "Twitter (X)",
            value: "twitter-x",
          },
          {
            label: "Twitter",
            value: "twitter",
          },
          {
            label: "Vimeo",
            value: "vimeo",
          },
          {
            label: "Whatsapp",
            value: "whatsapp",
          },
          {
            label: "Wordpress",
            value: "wordpress",
          },
          {
            label: "Youtube",
            value: "youtube",
          },
        ]}
        onChange={(newValue) => setAttributes({ socialMediaIcon: newValue })}
      />
    </PanelBody>
  );
}
