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
import placeholder from "./assets/placeholder.webp";
import { TabPanel } from "@wordpress/components";
import { useEntityRecords } from "@wordpress/core-data";
import CategoriesLoopTitle from "./settings/categories-loop-title-settings";
import ShowDemoDataSettings from "./settings/show-demo-data-settings";
import ShowNumberOfPublicationsSettings from "./settings/show-number-of-publications-settings";
import ShowUncategorizedCategorySettings from "./settings/show-uncategorized-category-settings";
import NumberOfColumnsDesktopSettings from "./settings/no-of-columns-desktop-settings";
import NumberOfColumnsTabletSettings from "./settings/no-of-columns-tablet-settings";
import NumberOfColumnsMobileSettings from "./settings/no-of-columns-mobile-settings";
import DemoData from "./demo-data";

export default function EditBlock({ attributes, setAttributes }) {
  // Attributes
  const {
    showNumberOfPublications,
    categoriesLoopTitle,
    categoriesLoopTitleIcon,
    showDemoData,
    showUncategorizedCategory,
    columnNoDesktop,
    columnNoTablet,
    columnNoMobile,
  } = attributes;

  // Published categories array
  let categoryList = [];

  // Fetch published categories
  const { hasResolved, records } = useEntityRecords("taxonomy", "category", {
    per_page: -1,
    hide_empty: true,
    _embed: true,
  });

  // Recover the available categories
  if (hasResolved) {
    categoryList = records
      .filter((category) => {
        if (!showUncategorizedCategory) {
          return category.slug !== "uncategorized" && category.id !== 1;
        }
        return true;
      })
      .map((category) => ({
        title: category?.name,
        count: category?.count,
        featuredImage: category?.meta?.category_image_url,
        altTextFeaturedImage: category?.meta?.alt_text_category_image,
      }));
  }

  // Block props
  const blockProps = useBlockProps({
    className: "cbb-categories-loop",
    style: {
      ...(columnNoDesktop.enableCustomValue && {
        "--cbb-column-no-desktop": columnNoDesktop.columnNo,
      }),
      ...(columnNoTablet.enableCustomValue && {
        "--cbb-column-no-tablet": columnNoTablet.columnNo,
      }),
      ...(columnNoMobile.enableCustomValue && {
        "--cbb-column-no-mobile": columnNoMobile.columnNo,
      }),
    },
  });

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
                  <CategoriesLoopTitle
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CategoriesLoopTitle>
                </>
              );
            }
            if (tab.name === "style") {
              return (
                <>
                  <NumberOfColumnsDesktopSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NumberOfColumnsDesktopSettings>
                  <NumberOfColumnsTabletSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NumberOfColumnsTabletSettings>
                  <NumberOfColumnsMobileSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NumberOfColumnsMobileSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <ShowNumberOfPublicationsSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowNumberOfPublicationsSettings>
                  <ShowDemoDataSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowDemoDataSettings>
                  <ShowUncategorizedCategorySettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowUncategorizedCategorySettings>
                </>
              );
            }
          }}
        </TabPanel>
      </InspectorControls>
      {!hasResolved && <p>Categories loading, please wait...</p>}
      <div {...blockProps}>
        {!showDemoData && (
          <>
            <div className="cbb-categories-loop__container">
              {categoryList.map((category, index) => {
                return (
                  <div className="cbb-categories-loop__card" key={index}>
                    <div className="cbb-categories-loop_post-header">
                      <p className="cbb-categories-loop_website-title">
                        <img
                          className="cbb-categories-loop_website-title-icon"
                          src={
                            categoriesLoopTitleIcon.url === ""
                              ? placeholder
                              : categoriesLoopTitleIcon.url
                          }
                        ></img>
                        {categoriesLoopTitle}
                      </p>
                    </div>
                    <div className="cbb-categories-loop__img-container">
                      <a className="cbb-categories-loop__img-link">
                        {category.featuredImage && (
                          <img src={category.featuredImage} />
                        )}
                        <span className="cbb-categories-loop__post-title">
                          {category.title}
                        </span>
                      </a>
                    </div>
                    <div className="cbb-categories-loop__post-info">
                      <div className="cbb-categories-loop__category-and-tag">
                        {showNumberOfPublications &&
                          category.count !== null && (
                            <span className="cbb-categories-loop__number-of-publications">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-journals"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2" />
                                <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0" />
                              </svg>
                              {category.count}{" "}
                              {category.count > 1
                                ? "publications"
                                : "publication"}
                            </span>
                          )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {showDemoData && <DemoData></DemoData>}
      </div>
    </>
  );
}
