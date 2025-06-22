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

import { PanelBody, SelectControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function DateSettings({ attributes, setAttributes }) {
  const { dateOptions } = attributes;

  return (
    <PanelBody
      title={__("Date options", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Show date", "caledros-basic-blocks")}
        help={__(
          "Each post card will show its publication date",
          "caledros-basic-blocks"
        )}
        checked={dateOptions.showDate}
        onChange={(newValue) => {
          setAttributes({
            dateOptions: { ...dateOptions, showDate: newValue },
          });
        }}
      />
      {dateOptions.showDate && (
        <SelectControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help={__("Choose the date format", "caledros-basic-blocks")}
          value={dateOptions.dateFormat}
          options={[
            {
              label: "MM/DD/YYYY",
              value: "MM/DD/YYYY",
            },
            {
              label: "DD/MM/YYYY",
              value: "DD/MM/YYYY",
            },
            {
              label: "YYYY-MM-DD",
              value: "YYYY-MM-DD",
            },
            {
              label: "Month DD, YYYY",
              value: "Month DD, YYYY",
            },
            {
              label: "DD Month YYYY",
              value: "DD Month YYYY",
            },
            {
              label: "Day, Month DD, YYYY",
              value: "Day, Month DD, YYYY",
            },
            {
              label: "Month DD",
              value: "Month DD",
            },
          ]}
          onChange={(newValue) => {
            setAttributes({
              dateOptions: { ...dateOptions, dateFormat: newValue },
            });
          }}
        />
      )}
    </PanelBody>
  );
}
