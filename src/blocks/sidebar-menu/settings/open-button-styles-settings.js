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

export default function OpenButtonStylesSettings({
  attributes,
  setAttributes,
}) {
  // Block attributes
  const { openButtonStyles } = attributes;

  return (
    <PanelBody
      title={__("Open button styles", "caledros-basic-blocks")}
      initialOpen={false}
    >
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button height", "caledros-basic-blocks")}
        help={__(
          "Please select the value (px) for the button height.",
          "caledros-basic-blocks"
        )}
        max={100}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.buttonHeight)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              buttonHeight: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button gap", "caledros-basic-blocks")}
        help={__(
          "Please select the value (px) for the gap between the button bars.",
          "caledros-basic-blocks"
        )}
        max={15}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.buttonGap)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              buttonGap: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button border width", "caledros-basic-blocks")}
        help={__(
          "Please select the width (px) for the button border.",
          "caledros-basic-blocks"
        )}
        max={10}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.buttonBorderWidth)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              buttonBorderWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button border radius", "caledros-basic-blocks")}
        help={__(
          "Please select the radius (px) for the button border.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.buttonBorderRadius)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              buttonBorderRadius: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button bars' height", "caledros-basic-blocks")}
        help={__(
          "Please select the height (px) of the button bars.",
          "caledros-basic-blocks"
        )}
        max={10}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.barsHeight)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              barsHeight: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__(
          "Width of the button's top and bottom bars",
          "caledros-basic-blocks"
        )}
        help={__(
          "Please select the width (px) of the button's top and bottom bars.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.topAndBottomBarsWidth)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              topAndBottomBarsWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Width of the button's center bar", "caledros-basic-blocks")}
        help={__(
          "Please select the width (px) of the button's center bar.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.centerBarWidth)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              centerBarWidth: `${newValue}px`,
            },
          })
        }
      />
      <RangeControl
        __nextHasNoMarginBottom
        label={__("Button bars' border radius", "caledros-basic-blocks")}
        help={__(
          "Please select the border radius (px) for the button bars.",
          "caledros-basic-blocks"
        )}
        max={50}
        min={0}
        step={1}
        value={parseInt(openButtonStyles.barsBorderRadius)}
        onChange={(newValue) =>
          setAttributes({
            openButtonStyles: {
              ...openButtonStyles,
              barsBorderRadius: `${newValue}px`,
            },
          })
        }
      />
    </PanelBody>
  );
}
