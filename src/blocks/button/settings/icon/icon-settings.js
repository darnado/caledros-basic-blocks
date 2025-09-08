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
  const { buttonIcon } = attributes;
  return (
    <PanelBody
      title={__("Button Icon", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <SelectControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        help={__("Choose the icon", "caledros-basic-blocks")}
        value={buttonIcon}
        options={[
          { label: "Alarm Fill", value: "alarm-fill" },
          { label: "Arrow Left Circle Fill", value: "arrow-left-circle-fill" },
          { label: "Arrow Left Circle", value: "arrow-left-circle" },
          {
            label: "Arrow Right Circle Fill",
            value: "arrow-right-circle-fill",
          },
          {
            label: "Arrow Right Circle",
            value: "arrow-right-circle",
          },
          {
            label: "Arrow Up Left Square",
            value: "arrow-up-left-square",
          },
          {
            label: "Arrow Up Right Circle Fill",
            value: "arrow-up-right-circle-fill",
          },
          {
            label: "Arrow Up Right Circle",
            value: "arrow-up-right-circle",
          },
          {
            label: "Arrow Up Right Square Fill",
            value: "arrow-up-right-square-fill",
          },
          {
            label: "Arrow Up Right Square",
            value: "arrow-up-right-square",
          },
          { label: "Award", value: "award" },
          { label: "Battery Charging", value: "battery-charging" },
          { label: "Box", value: "box-seam" },
          { label: "Boxes", value: "boxes" },
          { label: "Bricks", value: "bricks" },
          { label: "Brightness High", value: "brightness-high" },
          { label: "Bug", value: "bug" },
          { label: "Building", value: "building" },
          { label: "Buildings", value: "buildings" },
          { label: "Chat Text", value: "chat-text" },
          { label: "Cloud Check", value: "cloud-check" },
          { label: "Cloud Sun", value: "cloud-sun" },
          { label: "Code", value: "code-square" },
          { label: "Coin", value: "coin" },
          { label: "Columns", value: "columns" },
          { label: "Columns Gap", value: "columns-gap" },
          { label: "Database Down", value: "database-down" },
          { label: "Database Up", value: "database-up" },
          { label: "File Bar Graph", value: "file-bar-graph" },
          { label: "Fire", value: "fire" },
          { label: "Gear", value: "gear" },
          { label: "Globe", value: "globe2" },
          { label: "Graph Down Arrow", value: "graph-down-arrow" },
          { label: "Graph Up Arrow", value: "graph-up-arrow" },
          { label: "Hourglass", value: "hourglass" },
          { label: "Hourglass Bottom", value: "hourglass-bottom" },
          { label: "Hourglass Split", value: "hourglass-split" },
          { label: "Hourglass Top", value: "hourglass-top" },
          { label: "Lightbulb", value: "lightbulb" },
          { label: "Magic", value: "magic" },
          { label: "Moon Stars", value: "moon-stars" },
          { label: "People Fill", value: "people-fill" },
          { label: "Person Circle", value: "person-circle" },
          { label: "Quote", value: "quote" },
          { label: "Robot", value: "robot" },
          { label: "Rocket Takeoff", value: "rocket-takeoff" },
          { label: "Star", value: "star" },
          { label: "Stars", value: "stars" },
          { label: "Stickies", value: "stickies" },
          { label: "Telephone", value: "telephone" },
          { label: "Tools", value: "tools" },
          { label: "UI Checks Grid", value: "ui-checks-grid" },
          { label: "UI Checks", value: "ui-checks" },
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
        onChange={(newValue) => setAttributes({ buttonIcon: newValue })}
      />
    </PanelBody>
  );
}
