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

import { PanelBody, RangeControl, ToggleControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function ExcerptSettings({ attributes, setAttributes }) {
  const { excerptOptions } = attributes;

  return (
    <PanelBody
      title={__("Excerpt options", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <ToggleControl
        __nextHasNoMarginBottom
        label={__("Show excerpt", "caledros-basic-blocks")}
        help={__(
          "Each post card will displayed a short excerpt",
          "caledros-basic-blocks"
        )}
        checked={excerptOptions.showExcerpt}
        onChange={(newValue) => {
          setAttributes({
            excerptOptions: { ...excerptOptions, showExcerpt: newValue },
          });
        }}
      />
      {excerptOptions.showExcerpt && (
        <>
          <ToggleControl
            __nextHasNoMarginBottom
            label={__("Show ellipsis", "caledros-basic-blocks")}
            help={__(
              "A ellipsis will appear at the end of the excerpt.",
              "caledros-basic-blocks"
            )}
            checked={excerptOptions.showEllipsis}
            onChange={(newValue) => {
              setAttributes({
                excerptOptions: { ...excerptOptions, showEllipsis: newValue },
              });
            }}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help={__(
              "Please select the excerpt length (number of words).",
              "caledros-basic-blocks"
            )}
            value={excerptOptions.excerptLength}
            label={__("Excerpt length", "caledros-basic-blocks")}
            max={50}
            min={1}
            step={1}
            onChange={(newValue) =>
              setAttributes({
                excerptOptions: { ...excerptOptions, excerptLength: newValue },
              })
            }
          />
        </>
      )}
    </PanelBody>
  );
}
