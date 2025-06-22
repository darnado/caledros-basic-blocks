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
import { TabPanel } from "@wordpress/components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import { Placeholder } from "@wordpress/components";
import LoopSettings from "./settings/loop-settings";
import IdentifierSettings from "./settings/identifier-settings";
import PaginationSettings from "./settings/pagination-settings";
import AutoplaySettings from "./settings/autoplay-settings";
import LightColorSettings from "./settings/light-color-settings";
import DarkColorSettings from "./settings/dark-color-settings";
import NavigationArrowsSettings from "./settings/navigation-arrows-settings";
import ImagesSettings from "./settings/images-settings";
import WidthSettings from "./settings/width-settings";
import MinHeightSettings from "./settings/min-height-settings";
import EffectSettings from "./settings/effect-settings";
import ShowDemoDataSettings from "./settings/show-demo-data-settings";
import birdImage from "./assets/bird.webp";
import flowerImage from "./assets/flower.webp";
import pierImage from "./assets/pier.webp";

export default function EditBlock({ attributes, setAttributes }) {
  // Block attributes
  const {
    images,
    enableLoop,
    identifier,
    enablePagination,
    paginationType,
    autoplay,
    lightColor,
    darkColor,
    enableNavigationArrows,
    width,
    minHeight,
    galleryEffect,
    showDemoData,
  } = attributes;

  // Block properties
  const blockProps = useBlockProps({
    className: "cbb-image-gallery",
    style: {
      "--cbb-slider-light-color": lightColor,
      "--cbb-slider-dark-color": darkColor,
      width: width,
      height: minHeight,
    },
  });

  // Pagination Settings
  const paginationSettings = () => {
    if (enablePagination && paginationType === "bullets") {
      return { clickable: true, type: "bullets" };
    }
    if (enablePagination && paginationType === "fraction") {
      return { type: "fraction" };
    }
    if (enablePagination && paginationType === "progressbar") {
      return { type: "progressbar" };
    }
    if (!enablePagination) {
      return false;
    }
  };

  // Autoplay settings
  const autoplaySettings = () => {
    if (autoplay.enableAutoplay) {
      return {
        delay: autoplay.delay,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      };
    } else {
      return false;
    }
  };

  return (
    <>
      <InspectorControls>
        <TabPanel
          activeClass="cbb-active-tab"
          tabs={[
            {
              name: "content",
              title: "Content",
            },
            {
              name: "style",
              title: "Style",
            },
            {
              name: "additional",
              title: "Additional",
            },
          ]}
        >
          {(tab) => {
            if (tab.name === "content") {
              return (
                <>
                  <IdentifierSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></IdentifierSettings>
                  {!showDemoData && (
                    <ImagesSettings
                      attributes={attributes}
                      setAttributes={setAttributes}
                    ></ImagesSettings>
                  )}
                </>
              );
            }
            if (tab.name === "style") {
              return (
                <>
                  <LightColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LightColorSettings>
                  <DarkColorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></DarkColorSettings>
                  <WidthSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></WidthSettings>
                  <MinHeightSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></MinHeightSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <LoopSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></LoopSettings>
                  <NavigationArrowsSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NavigationArrowsSettings>
                  <PaginationSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PaginationSettings>
                  <AutoplaySettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></AutoplaySettings>
                  <EffectSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></EffectSettings>
                  <ShowDemoDataSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowDemoDataSettings>
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      <div {...blockProps}>
        {!showDemoData && (
          <>
            {images.length == 0 ? (
              <Placeholder
                label={__("Image Gallery", "caledros-basic-blocks")}
                instructions={__(
                  "Add images to the gallery.",
                  "caledros-basic-blocks"
                )}
                icon="format-gallery"
                className="wp-block-my-block-placeholder"
              ></Placeholder>
            ) : (
              <>
                <Swiper
                  key={`${paginationType}-${enableLoop}-${autoplay.enableAutoplay}-${autoplay.delay}-${enableNavigationArrows}-${galleryEffect}`}
                  navigation={enableNavigationArrows}
                  allowTouchMove={false}
                  modules={[
                    Navigation,
                    Pagination,
                    Autoplay,
                    EffectFade,
                    EffectCoverflow,
                  ]}
                  className={`cbb-image-gallery-${identifier}`}
                  loop={enableLoop}
                  pagination={paginationSettings()}
                  autoplay={autoplaySettings()}
                  {...(galleryEffect === "fade" && {
                    effect: "fade",
                    fadeEffect: { crossFade: true },
                  })}
                  {...(galleryEffect === "coverflow" && {
                    effect: "coverflow",
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 1.5,
                    coverflowEffect: {
                      rotate: 50,
                      stretch: 0,
                      depth: 50,
                      modifier: 1,
                      slideShadows: true,
                    },
                    breakpoints: {
                      810: {
                        slidesPerView: 1.5,
                      },
                      0: {
                        slidesPerView: 1,
                      },
                    },
                  })}
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image.url}
                        alt={image.alt}
                        key={image.id}
                        style={{ width: width, height: minHeight }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </>
            )}
          </>
        )}
        {showDemoData && (
          <>
            <Swiper
              key={`${paginationType}-${enableLoop}-${autoplay.enableAutoplay}-${autoplay.delay}-${enableNavigationArrows}-${galleryEffect}`}
              navigation={enableNavigationArrows}
              allowTouchMove={false}
              modules={[
                Navigation,
                Pagination,
                Autoplay,
                EffectFade,
                EffectCoverflow,
              ]}
              className={`cbb-image-gallery-${identifier}`}
              loop={enableLoop}
              pagination={paginationSettings()}
              autoplay={autoplaySettings()}
              {...(galleryEffect === "fade" && {
                effect: "fade",
                fadeEffect: { crossFade: true },
              })}
              {...(galleryEffect === "coverflow" && {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 1.5,
                coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 50,
                  modifier: 1,
                  slideShadows: true,
                },
                breakpoints: {
                  810: {
                    slidesPerView: 1.5,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                },
              })}
            >
              <SwiperSlide key={0}>
                <img
                  src={birdImage}
                  alt="bird"
                  key={0}
                  style={{ width: width, height: minHeight }}
                />
              </SwiperSlide>
              <SwiperSlide key={1}>
                <img
                  src={pierImage}
                  alt="pier"
                  key={1}
                  style={{ width: width, height: minHeight }}
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <img
                  src={flowerImage}
                  alt="flower"
                  key={2}
                  style={{ width: width, height: minHeight }}
                />
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </div>
    </>
  );
}
