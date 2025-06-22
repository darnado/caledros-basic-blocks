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
  const { icon } = attributes;
  return (
    <PanelBody title={__("Icon", "caledros-basic-blocks")} initialOpen={false}>
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__("Choose the icon", "caledros-basic-blocks")}
        value={icon}
        options={[
          { label: "Alarm Fill", value: "alarm-fill" },
          { label: "Award", value: "award" },
          { label: "Bricks", value: "bricks" },
          { label: "Brightness High", value: "brightness-high" },
          { label: "Building", value: "building" },
          { label: "Buildings", value: "buildings" },
          { label: "Cloud Sun", value: "cloud-sun" },
          { label: "Gear", value: "gear" },
          { label: "Hourglass", value: "hourglass" },
          { label: "Hourglass Bottom", value: "hourglass-bottom" },
          { label: "Hourglass Split", value: "hourglass-split" },
          { label: "Hourglass Top", value: "hourglass-top" },
          { label: "Lightbulb", value: "lightbulb" },
          { label: "Moon Stars", value: "moon-stars" },
          { label: "People Fill", value: "people-fill" },
          { label: "Person Circle", value: "person-circle" },
          { label: "Quote", value: "quote" },
          { label: "Robot", value: "robot" },
          { label: "Rocket Takeoff", value: "rocket-takeoff" },
          { label: "Star", value: "star" },
          { label: "Stickies", value: "stickies" },
          { label: "Tools", value: "tools" },
          { label: "Umbrella Fill", value: "umbrella-fill" },
          { label: "Watch", value: "watch" },
          { label: "Wind", value: "wind" },
          { label: "Wrench", value: "wrench" },
          { label: "Wrench Adjustable", value: "wrench-adjustable" },
          {
            label: "Wrench Adjustable Circle",
            value: "wrench-adjustable-circle",
          },
        ]}
        onChange={(newValue) => setAttributes({ icon: newValue })}
      />
    </PanelBody>
  );
}
