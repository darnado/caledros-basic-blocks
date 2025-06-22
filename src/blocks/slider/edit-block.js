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
import { useState, useEffect } from "@wordpress/element";
import { TabPanel } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import CardOneTemplateSettings from "./settings/card-one-template-settings";
import CardTwoTemplateSettings from "./settings/card-two-template-settings";
import CardThreeTemplateSettings from "./settings/card-three-template-settings";
import CardFourTemplateSettings from "./settings/card-four-template-settings";
import CardFiveTemplateSettings from "./settings/card-five-template-settings";
import CardSixTemplateSettings from "./settings/card-six-template-settings";
import NumberOfCards from "./settings/number-of-cards-settings";
import LoopSettings from "./settings/loop-settings";
import IdentifierSettings from "./settings/identifier-settings";
import PaginationSettings from "./settings/pagination-settings";
import AutoplaySettings from "./settings/autoplay-settings";
import LightColorSettings from "./settings/light-color-settings";
import DarkColorSettings from "./settings/dark-color-settings";
import NavigationArrowsSettings from "./settings/navigation-arrows-settings";
import EffectSettings from "./settings/effect-settings";
import MinHeightSettings from "./settings/min-height-settings";
import WidthSettings from "./settings/width-settings";
import apiFetch from "@wordpress/api-fetch";

export default function EditBlock({ attributes, setAttributes }) {
  // Block attributes
  const {
    numberOfCards,
    cardOneSlug,
    cardTwoSlug,
    cardThreeSlug,
    cardFourSlug,
    cardFiveSlug,
    cardSixSlug,
    enableLoop,
    identifier,
    enablePagination,
    paginationType,
    autoplay,
    lightColor,
    darkColor,
    enableNavigationArrows,
    sliderEffect,
    width,
    minHeight,
  } = attributes;

  // Block properties
  const blockProps = useBlockProps({
    className: "cbb-slider",
    style: {
      "--cbb-slider-light-color": lightColor,
      "--cbb-slider-dark-color": darkColor,
      overflow: "hidden",
      width: width,
      height: minHeight,
    },
  });

  // Fetch template cards
  const [cardContents, setCardContents] = useState({});

  const cardSlugs = [
    { key: "cardOneSlug", slug: cardOneSlug },
    { key: "cardTwoSlug", slug: cardTwoSlug },
    { key: "cardThreeSlug", slug: cardThreeSlug },
    { key: "cardFourSlug", slug: cardFourSlug },
    { key: "cardFiveSlug", slug: cardFiveSlug },
    { key: "cardSixSlug", slug: cardSixSlug },
  ];

  useEffect(() => {
    cardSlugs.forEach(({ key, slug }) => {
      if (slug) {
        apiFetch({
          path: `/caledros-basic-blocks/v1/template-part/${slug}`,
        })
          .then((part) => {
            if (part) {
              setCardContents((prevContents) => ({
                ...prevContents,
                [key]: part,
              }));
            }
          })
          .catch((error) => {
            console.error(
              `Template part for slug '${slug}' failed to load. ${error}`
            );
            setCardContents((prevContents) => ({
              ...prevContents,
              [key]: `
              <div style="height:100%;display: flex; flex-direction: column; justify-content: center; align-items: center; background-color:#2291BD">
                <p style="color:#fff; font-size:25px">Unable to load content for ${slug}</p>
              </div>`,
            }));
          });
      }
    });
  }, [
    cardOneSlug,
    cardTwoSlug,
    cardThreeSlug,
    cardFourSlug,
    cardFiveSlug,
    cardSixSlug,
  ]);

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
                  <NumberOfCards
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NumberOfCards>
                  <CardOneTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardOneTemplateSettings>
                  <CardTwoTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardTwoTemplateSettings>
                  <CardThreeTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardThreeTemplateSettings>
                  <CardFourTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardFourTemplateSettings>
                  <CardFiveTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardFiveTemplateSettings>
                  <CardSixTemplateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CardSixTemplateSettings>
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
                </>
              );
            }
            return null;
          }}
        </TabPanel>
      </InspectorControls>
      <div {...blockProps}>
        <Swiper
          key={`${paginationType}-${enableLoop}-${autoplay.enableAutoplay}-${autoplay.delay}-${enableNavigationArrows}-${sliderEffect}`}
          navigation={enableNavigationArrows}
          allowTouchMove={false}
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectFade,
            EffectCoverflow,
          ]}
          className={`cbb-swiper-${identifier}`}
          loop={enableLoop}
          pagination={paginationSettings()}
          autoplay={autoplaySettings()}
          {...(sliderEffect === "fade" && {
            effect: "fade",
            fadeEffect: { crossFade: true },
          })}
          {...(sliderEffect === "coverflow" && {
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
          {cardSlugs.slice(0, numberOfCards).map(({ key }, index) => (
            <SwiperSlide key={key}>
              <div
                dangerouslySetInnerHTML={{
                  __html: cardContents[key],
                }}
                style={{ height: "100%" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
