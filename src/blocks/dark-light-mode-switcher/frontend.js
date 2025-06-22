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

// FUNCTIONS
// Sync all toggle switches with the current theme
const syncToggles = (isDarkMode) => {
  document.querySelectorAll(".cbb-dark-light-switcher").forEach((toggle) => {
    toggle.checked = isDarkMode;
  });
};

// Apply the selected theme and save it in localStorage
const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  syncToggles(theme === "dark");
};

// Toggle between light and dark themes
const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  applyTheme(currentTheme === "dark" ? "light" : "dark");
};

// Load and apply the initial theme based on saved preferences or system settings
const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
};

// EXECUTION
// Listen for changes in the system color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });

// Attach theme toggle event listeners to switches
document.querySelectorAll(".cbb-dark-light-switcher").forEach((toggle) => {
  toggle.addEventListener("change", switchTheme);
});

// Load the theme on page load
loadTheme();
