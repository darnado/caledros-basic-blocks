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
import NumberOfItemsSettings from "./settings/number-of-items-settings";
import PageTypeSettings from "./settings/page-type-settings";
import ShowNavigationLinksSettings from "./settings/show-navigation-links-settings";
import SortOrderSettings from "./settings/sort-order-settings";
import OrderTypeSettings from "./settings/order-type-settings";
import DateSettings from "./settings/date-settings";
import ShowAuthorSettings from "./settings/show-author-settings";
import ShowCategorySettings from "./settings/show-category-settings";
import ShowTagSettings from "./settings/show-tag-settings";
import ExcerptSettings from "./settings/excerpt-settings";
import CategoryFilterSettings from "./settings/category-filter-settings";
import PostsLoopTitle from "./settings/posts-loop-title-settings";
import ShowDemoDataSettings from "./settings/show-demo-data-settings";
import TagFilterSettings from "./settings/tag-filter-settings";
import DemoData from "./demo-data";

export default function EditBlock({ attributes, setAttributes }) {
  // Attributes
  const {
    numberOfItems,
    orderType,
    sortOrder,
    dateOptions,
    showAuthor,
    showCategory,
    showTags,
    excerptOptions,
    categoryFilter,
    postsLoopTitle,
    postsLoopTitleIcon,
    showNavigationLinks,
    showDemoData,
    tagFilter,
  } = attributes;

  // Published posts array
  let postOptions = [];

  // Fetch published posts
  const { hasResolved, records } = useEntityRecords("postType", "post", {
    per_page: numberOfItems,
    _embed: true,
    order: sortOrder,
    orderby: orderType,
    ...(categoryFilter.enable ? { categories: categoryFilter.categoryId } : {}),
    ...(tagFilter.enable && tagFilter.tagId ? { tags: tagFilter.tagId } : {}),
  });

  // Recover the available posts
  if (hasResolved) {
    postOptions = records.map((post) => ({
      title: post?.title?.rendered,
      permaLink: post?.link,
      date: post?.date,
      author: post?._embedded?.author[0]?.name,
      category: post?._embedded["wp:term"]?.[0]?.[0]?.name,
      categoryLink: post?._embedded["wp:term"]?.[0]?.[0]?.link,
      tag: post?._embedded["wp:term"][1]?.[0]?.name ?? null,
      tagLink: post?._embedded["wp:term"][1]?.[0]?.link ?? null,
      excerpt: post?.excerpt.raw,
      featuredImage: post?._embedded["wp:featuredmedia"]?.[0]?.source_url ?? "",
    }));
  }

  // Function to format dates
  function formatPostDate(dateFormat, postDate) {
    const date = new Date(postDate);
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const DD = String(date.getDate()).padStart(2, "0");
    const MM = String(date.getMonth() + 1).padStart(2, "0");
    const YYYY = date.getFullYear();
    const Month = monthNames[date.getMonth()];
    const Day = dayNames[date.getDay()];

    switch (dateFormat) {
      case "MM/DD/YYYY":
        return `${MM}/${DD}/${YYYY}`;
      case "DD/MM/YYYY":
        return `${DD}/${MM}/${YYYY}`;
      case "YYYY-MM-DD":
        return `${YYYY}-${MM}-${DD}`;
      case "Month DD, YYYY":
        return `${Month} ${DD}, ${YYYY}`;
      case "DD Month YYYY":
        return `${DD} ${Month} ${YYYY}`;
      case "Day, Month DD, YYYY":
        return `${Day}, ${Month} ${DD}, ${YYYY}`;
      case "Month DD":
        return `${Month} ${DD}`;
      default:
        return postDate;
    }
  }

  // Function to trim words
  function trimWords(
    text,
    wordLimit,
    more = excerptOptions.showEllipsis ? "..." : ""
  ) {
    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + more;
  }

  // Block props
  const blockProps = useBlockProps({
    className: "cbb-posts-loop",
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
              name: "additional",
              title: "Additional",
            },
          ]}
        >
          {(tab) => {
            if (tab.name === "content") {
              return (
                <>
                  <PostsLoopTitle
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PostsLoopTitle>
                  <NumberOfItemsSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></NumberOfItemsSettings>
                  <PageTypeSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></PageTypeSettings>
                  <CategoryFilterSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></CategoryFilterSettings>
                  <TagFilterSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></TagFilterSettings>
                  <OrderTypeSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></OrderTypeSettings>
                  <SortOrderSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></SortOrderSettings>
                </>
              );
            }
            if (tab.name === "additional") {
              return (
                <>
                  <DateSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></DateSettings>
                  <ShowAuthorSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowAuthorSettings>
                  <ShowCategorySettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowCategorySettings>
                  <ShowTagSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowTagSettings>
                  <ExcerptSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ExcerptSettings>
                  <ShowNavigationLinksSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowNavigationLinksSettings>
                  <ShowDemoDataSettings
                    attributes={attributes}
                    setAttributes={setAttributes}
                  ></ShowDemoDataSettings>
                </>
              );
            }
          }}
        </TabPanel>
      </InspectorControls>
      {!hasResolved && <p>Posts loading, please wait...</p>}
      <div {...blockProps}>
        {!showDemoData && (
          <>
            <div className="cbb-posts-loop__container">
              {postOptions.map((post, index) => {
                return (
                  <div className="cbb-posts-loop__card" key={index}>
                    <div className="cbb-posts-loop_post-header">
                      <p className="cbb-posts-loop_website-title">
                        <img
                          className="cbb-posts-loop_website-title-icon"
                          src={
                            postsLoopTitleIcon.url === ""
                              ? placeholder
                              : postsLoopTitleIcon.url
                          }
                        ></img>
                        {postsLoopTitle}
                      </p>
                      <div className="cbb-posts-loop_post-author-and-date">
                        {showAuthor && (
                          <span className="cbb-posts-loop__author">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-person"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            {post.author}
                          </span>
                        )}
                        {dateOptions.showDate && (
                          <span className="cbb-posts-loop__date">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-calendar2-event"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                              <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            {formatPostDate(dateOptions.dateFormat, post.date)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="cbb-posts-loop__img-container">
                      <a className="cbb-posts-loop__img-link">
                        {post.featuredImage && <img src={post.featuredImage} />}
                        <span className="cbb-posts-loop__post-title">
                          {post.title}
                        </span>
                      </a>
                    </div>
                    <div className="cbb-posts-loop__post-info">
                      <div className="cbb-posts-loop__category-and-tag">
                        {showCategory && (
                          <a className="cbb-posts-loop__category">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-bookmarks"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                              <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                            </svg>
                            {post.category}
                          </a>
                        )}
                        {showTags && post.tag !== null && (
                          <a className="cbb-posts-loop__tag">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-tags"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z" />
                              <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z" />
                            </svg>
                            {post.tag}
                          </a>
                        )}
                      </div>
                    </div>
                    {excerptOptions.showExcerpt && (
                      <p className="cbb-posts-loop__post-excerpt">
                        {trimWords(post.excerpt, excerptOptions.excerptLength)}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            {showNavigationLinks && (
              <div class="cbb-posts-loop_pagination">
                <span class="page-numbers current">1</span>
                <a class="page-numbers" href="#">
                  2
                </a>
                <a class="next page-numbers" href="#">
                  &gt;
                </a>
              </div>
            )}
          </>
        )}
        {showDemoData && <DemoData></DemoData>}
      </div>
    </>
  );
}
