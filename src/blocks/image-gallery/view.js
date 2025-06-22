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

import { Swiper } from "swiper";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css/bundle";
import { store, getContext } from "@wordpress/interactivity";

store("cbb-image-gallery-store", {
  callbacks: {
    onInit: () => {
      const context = getContext();
      const swiperClass = `.cbb-image-gallery-${context.identifier}`;
      const paginationEnabled = getContext().pagination;
      const paginationType = getContext().paginationType;
      const autoplayEnabled = getContext().autoPlayEnabled;
      const autoplayDelay = getContext().autoplayDelay;
      const enableNavigationArrows = getContext().enableNavigationArrows;
      const galleryEffect = getContext().galleryEffect;

      const paginationSettings = () => {
        if (paginationEnabled && paginationType === "bullets") {
          return {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              type: "bullets",
            },
          };
        }
        if (paginationEnabled && paginationType === "fraction") {
          return { pagination: { el: ".swiper-pagination", type: "fraction" } };
        }
        if (paginationEnabled && paginationType === "progressbar") {
          return {
            pagination: { el: ".swiper-pagination", type: "progressbar" },
          };
        }
        if (!paginationEnabled) {
          return { pagination: false };
        }
      };
      const autoplaySettings = () => {
        if (autoplayEnabled) {
          return {
            autoplay: {
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            },
          };
        } else {
          return {
            autoplay: false,
          };
        }
      };
      const navigationSettings = () => {
        if (enableNavigationArrows) {
          return {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          };
        }
        return {};
      };

      // Load modules
      const navigationModules = enableNavigationArrows ? [Navigation] : [];
      const paginationModules = paginationEnabled ? [Pagination] : [];
      const autoplayModules = autoplayEnabled ? [Autoplay] : [];
      const fadeEffectModule = galleryEffect === "fade" ? [EffectFade] : [];
      const coverflowEffectModule =
        galleryEffect === "coverflow" ? [EffectCoverflow] : [];

      // Slider creation
      const swiper = new Swiper(swiperClass, {
        cssMode: !(galleryEffect === "fade"),
        modules: [
          ...navigationModules,
          ...paginationModules,
          ...autoplayModules,
          ...fadeEffectModule,
          ...coverflowEffectModule,
        ],
        loop: context.loopEnabled,
        ...navigationSettings(),
        ...paginationSettings(),
        ...autoplaySettings(),
        ...(galleryEffect === "fade" && {
          effect: "fade",
          fadeEffect: { crossFade: true },
        }),
        ...(galleryEffect === "coverflow" && {
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
        }),
      });
    },
  },
});
