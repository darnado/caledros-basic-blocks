/*
 * Caledros Basic Blocks - Easy to use Gutenberg blocks
 * Copyright (C) 2025-2026  David Arnado
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

import placeholder from './assets/placeholder.webp';
import placeholderMountains from './assets/placeholder-mountains.webp';

export default function DemoData() {
	return (
		<>
			<div className="cbb-posts-loop__container">
				<div className="cbb-posts-loop__card">
					<div className="cbb-posts-loop_post-header">
						<p className="cbb-posts-loop_website-title">
							<img
								decoding="async"
								className="cbb-posts-loop_website-title-icon"
								src={ placeholder }
								alt="placeholder"
							/>
							Basic Theme
						</p>
						<div className="cbb-posts-loop_post-author-and-date">
							<span className="cbb-posts-loop__author">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person"
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
								</svg>
								John Doe
							</span>

							<span className="cbb-posts-loop__date">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-calendar2-event"
									viewBox="0 0 16 16"
								>
									<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
								</svg>
								May 15, 2025
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__img-container">
						<div className="cbb-posts-loop__img-link cbb-posts-loop__link--demo">
							<img
								src={ placeholderMountains }
								alt="Placeholder"
							/>
							<span className="cbb-posts-loop__post-title">
								Marketing Moves That Matter
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__post-info">
						<div className="cbb-posts-loop__category-and-tag">
							<div className="cbb-posts-loop__category cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path>
									<path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path>
								</svg>
								Blogs
							</div>

							<div className="cbb-posts-loop__tag cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-tags"
									viewBox="0 0 16 16"
								>
									<path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"></path>
									<path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"></path>
								</svg>
								Marketing
							</div>
						</div>
					</div>
				</div>
				<div className="cbb-posts-loop__card">
					<div className="cbb-posts-loop_post-header">
						<p className="cbb-posts-loop_website-title">
							<img
								decoding="async"
								className="cbb-posts-loop_website-title-icon"
								src={ placeholder }
								alt="placeholder"
							/>
							Basic Theme
						</p>
						<div className="cbb-posts-loop_post-author-and-date">
							<span className="cbb-posts-loop__author">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person"
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
								</svg>
								John Doe
							</span>

							<span className="cbb-posts-loop__date">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-calendar2-event"
									viewBox="0 0 16 16"
								>
									<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
								</svg>
								May 16, 2025
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__img-container">
						<div className="cbb-posts-loop__img-link cbb-posts-loop__link--demo">
							<img
								src={ placeholderMountains }
								alt="Placeholder"
							/>
							<span className="cbb-posts-loop__post-title">
								What’s Working in 2025
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__post-info">
						<div className="cbb-posts-loop__category-and-tag">
							<div className="cbb-posts-loop__category cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path>
									<path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path>
								</svg>
								Blogs
							</div>

							<div className="cbb-posts-loop__tag cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-tags"
									viewBox="0 0 16 16"
								>
									<path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"></path>
									<path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"></path>
								</svg>
								Marketing
							</div>
						</div>
					</div>
				</div>
				<div className="cbb-posts-loop__card">
					<div className="cbb-posts-loop_post-header">
						<p className="cbb-posts-loop_website-title">
							<img
								decoding="async"
								className="cbb-posts-loop_website-title-icon"
								src={ placeholder }
								alt="placeholder"
							/>
							Basic Theme
						</p>
						<div className="cbb-posts-loop_post-author-and-date">
							<span className="cbb-posts-loop__author">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person"
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
								</svg>
								John Doe
							</span>

							<span className="cbb-posts-loop__date">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-calendar2-event"
									viewBox="0 0 16 16"
								>
									<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
								</svg>
								May 16, 2025
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__img-container">
						<div className="cbb-posts-loop__img-link cbb-posts-loop__link--demo">
							<img
								src={ placeholderMountains }
								alt="Placeholder"
							/>
							<span className="cbb-posts-loop__post-title">
								Quick Wins for Smart Marketers
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__post-info">
						<div className="cbb-posts-loop__category-and-tag">
							<div className="cbb-posts-loop__category cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path>
									<path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path>
								</svg>
								Blogs
							</div>

							<div className="cbb-posts-loop__tag cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-tags"
									viewBox="0 0 16 16"
								>
									<path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"></path>
									<path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"></path>
								</svg>
								Marketing
							</div>
						</div>
					</div>
				</div>
				<div className="cbb-posts-loop__card">
					<div className="cbb-posts-loop_post-header">
						<p className="cbb-posts-loop_website-title">
							<img
								decoding="async"
								className="cbb-posts-loop_website-title-icon"
								src={ placeholder }
								alt="placeholder"
							/>
							Basic Theme
						</p>
						<div className="cbb-posts-loop_post-author-and-date">
							<span className="cbb-posts-loop__author">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-person"
									viewBox="0 0 16 16"
								>
									<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
								</svg>
								John Doe
							</span>

							<span className="cbb-posts-loop__date">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-calendar2-event"
									viewBox="0 0 16 16"
								>
									<path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path>
									<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"></path>
									<path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"></path>
								</svg>
								May 17, 2025
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__img-container">
						<div className="cbb-posts-loop__img-link cbb-posts-loop__link--demo">
							<img
								src={ placeholderMountains }
								alt="Placeholder"
							/>
							<span className="cbb-posts-loop__post-title">
								Trends to Watch This Quarter
							</span>
						</div>
					</div>
					<div className="cbb-posts-loop__post-info">
						<div className="cbb-posts-loop__category-and-tag">
							<div className="cbb-posts-loop__category cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"></path>
									<path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"></path>
								</svg>
								Blogs
							</div>

							<div className="cbb-posts-loop__tag cbb-posts-loop__link--demo">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-tags"
									viewBox="0 0 16 16"
								>
									<path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"></path>
									<path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"></path>
								</svg>
								Marketing
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cbb-posts-loop_pagination">
				<span aria-current="page" className="page-numbers current">
					1
				</span>
				<div className="page-numbers cbb-posts-loop__link--demo">2</div>
				<div className="next page-numbers cbb-posts-loop__link--demo">
					&gt;
				</div>
			</div>
		</>
	);
}
