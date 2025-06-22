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

import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function CloseButtonStylesSettings({
  attributes,
  setAttributes,
}) {
  // Block attributes
  const { closeButtonStyles } = attributes;

  return (
    <PanelBody
      title={__("Close button styles", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button height", "caledros-basic-blocks")}
        help={__(
          "Please select the value (px) for the button height. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={100}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.buttonHeight)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              buttonHeight: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button width", "caledros-basic-blocks")}
        help={__(
          "Please select the value (px) for the button width. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={100}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.buttonWidth)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              buttonWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button border width", "caledros-basic-blocks")}
        help={__(
          "Please select the width (px) for the button border. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={10}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.buttonBorderWidth)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              buttonBorderWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button border radius", "caledros-basic-blocks")}
        help={__(
          "Please select the radius (px) for the button border. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.buttonBorderRadius)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              buttonBorderRadius: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button bars' height", "caledros-basic-blocks")}
        help={__(
          "Please select the height (px) of the button bars. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={10}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.barsHeight)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              barsHeight: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button bars' width", "caledros-basic-blocks")}
        help={__(
          "Please select the width (px) of the button bars. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.barsWidth)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              barsWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label={__("Button bars' border radius", "caledros-basic-blocks")}
        help={__(
          "Please select the border radius (px) for the button bars. This feature is only visible in the frontend.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(closeButtonStyles.barsBorderRadius)}
        onChange={(newValue) =>
          setAttributes({
            closeButtonStyles: {
              ...closeButtonStyles,
              barsBorderRadius: `${newValue}px`,
            },
          })
        }
      />
    </PanelBody>
  );
}
