=== Caledros Basic Blocks ===

Contributors: @darnado
Tags: gutenberg, block editor, custom blocks
Requires at least: 6.7
Tested up to: 6.8
Stable tag: 2.2.1
Requires PHP: 8.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

Introduces 18 lightweight blocks for the Gutenberg editor. Also includes an optional preloader for CSS stylesheets to enhance performance.

== Description ==

Supercharge your WordPress site with Caledros Basic Blocks – a collection of 18 lightweight, performance-optimized Gutenberg blocks designed to extend the capabilities of the WordPress block editor without slowing down your site. 

Unlike many block libraries that add unnecessary bloat, Caledros Basic Blocks focuses on efficiency and speed. Each block is crafted to deliver essential functionality while keeping your site lean. 

The plugin includes a built-in CSS stylesheet preloader, ensuring faster page load times by optimizing the delivery of block styles. This feature can be easily disabled if preferred, giving you full control over performance tuning.

## Features

* Adds 18 new custom Gutenberg blocks. 5 blocks and 1 variation block can only be used in templates, template parts, and patterns
* Flex and grid containers blocks included
* Dark/Light mode block included
* Blocks built with performance and minimalism in mind
* Includes a toggleable preloader for CSS stylesheets to improve loading speed
* Enable featured images for post categories
* Clean, modern design for seamless visual integration
* Fully responsive and compatible with Full Site Editing Themes

Perfect for developers, designers, and content creators who want more control and better performance without the overhead of large block libraries.

## More Projects & Information

For more information about my projects, you can visit my website: [caledrosforge.com](https://caledrosforge.com/)

## Third Party Resources

Caledros Basic Blocks bundles the following third-party resources:

### 1. Icons

**1.1. Bootstrap Icons**, *Copyright (c) 2019-2024 The Bootstrap Authors*

The icons (SVG files) used in the Icon block, Social Icon block, and the Button Block were downloaded from Bootstrap Icons. 

Additionally, the four icons used in the Posts Loop block (user, date, category, and tag) as well as the publications icon in the Category Loop block, were all sourced from Bootstrap Icons.

Bootstrap Icons are licensed under the **MIT License**.

**Source:** [Bootstrap Icons Github repository](https://github.com/twbs/icons) and [Bootstrap Icons website](https://icons.getbootstrap.com/)

**License information last verified on:** May 21st, 2025

## 2. Libraries

**2.1. Swiper JS**, *Copyright (c) 2019 Vladimir Kharlampidi*

Both the Slider block and the Image Gallery block use the Swiper JS library, which is licensed under the **MIT License**.

**Source:** [Swiper JS Github repository](https://github.com/nolimits4web/swiper) and [Swiper JS website](https://swiperjs.com/)

**License information last verified on:** May 14th, 2025

## 3. Images

**3.1. Placeholder Background** *(placeholder-background.webp.webp, placeholder-background.d25a2ca6.webp*)

Used in the Category Loop and Posts Loop blocks. Photo by *JJ Skys the Limit*. Used under the **Creative Commons Zero (CC0) license**.

**Source:** [stocksnap.io](https://stocksnap.io/photo/ocean-water-9GQ5H2U69S)

**License information last verified on:** May 22nd, 2025

**3.2. Bird** *(bird.webp)*

Used in the Image Gallery block. Photo by *Jack Bulmer*. Used under the **Creative Commons Zero (CC0) license**.

**Source:** [skitterphoto.com](https://skitterphoto.com/photos/10862/angry-bird)

**License information last verified on:** June 6th, 2025

**3.3. Flower** (flower.webp)

Used in the Image Gallery block. Photo by *ekrem*. Used under the **Creative Commons Zero (CC0) license**.

**Source:** [skitterphoto.com](https://skitterphoto.com/photos/8698/rose)

**License information last verified on:** June 6th, 2025

**3.4. Pier** (pier.webp)

Used in the Image Gallery block. Photo by *Peter Heeling*. Used under the **Creative Commons Zero (CC0) license**.

**Source:** [skitterphoto.com](https://skitterphoto.com/photos/378/pier-zuidlaardermeer)

**License information last verified on:** June 6th, 2025

== Frequently Asked Questions ==

= What is Caledros Basic Blocks =
Caledros Basic Blocks is a lightweight WordPress plugin that adds 18 custom Gutenberg blocks to enhance your content creation experience 
while keeping your website fast and optimized.

= What makes this plugin performance-friendly? =
Caledros Basic Blocks is developed using the official @wordpress/scripts toolkit, which ensures clean, modern, and optimized code for Gutenberg blocks. 

Some blocks also leverage the WordPress Interactivity API to deliver smooth, responsive user interactions without adding unnecessary overhead.

Additionally, the plugin features a built-in CSS preloader that efficiently loads stylesheets to reduce render-blocking and improve page load times. 

This careful focus on best practices and minimal dependencies helps keep your site lightweight and fast.

= Can I disable the CSS preloader? =
Yes, the CSS preloader feature is optional and can be easily deactivated in the plugin settings if you prefer to manage styles differently.

= Are the blocks compatible with all themes? = 
The blocks are designed to work seamlessly with any modern, well-coded WordPress theme as long as the Gutenberg editor is enabled on your site. 

Since Caledros Basic Blocks extends the Gutenberg block editor, it requires the block editor to be active to function properly.

= Do I need to know how to code to use these blocks? =
Not at all! All blocks are fully integrated into the Gutenberg editor and can be used visually with no coding required.

= Will this plugin slow down my site? =
No. Caledros Basic Blocks is specifically built to enhance performance, not hinder it. The plugin is lightweight and optimized for speed.

However, other third party plugins can slow down your website if they are used together with Caledros Basic Blocks.

== Screenshots ==

1. CSS Preloader toggle. Optimize loading performance with a single click.
2. Customize your categories with featured images and alt texts. Enhance accessibility and design.
3. Add a toggle for Dark and Light mode. Give visitors control over their viewing experience.
4. Editor-only preview sidebar. Toggle between Dark and Light mode to see how your content adapts.
5. Flexible Grid Container block. Arrange content in responsive columns and rows with ease.

== Changelog ==

= 1.0.0 =

* Added 18 custom Gutenberg blocks
* Implemented CSS stylesheet preloader for improved performance (can be disabled)
* Compatible with all themes that support the Gutenberg editor

= 1.0.1 =

**Slider Block:**

* Modified edit-block file.
* Fixed bug where the template part was not displaying.
* Replaced fetch() with apiFetch() for improved compatibility.
* Added fallback error handling when a template part fails to load.

**Documentation:**

* Updated readme.txt file.
* Fixed markdown formatting issues in readme.txt.
* Added "Installation" and "Screenshots" sections for better clarity.

**Blocks Configuration:**

* Capitalized the first letter of each word in block titles (block.json files updated).
* Updated block descriptions for improved clarity (block.json files updated).
* Set icon property to "block-default" in block.json for all 18 blocks. Provides a fallback icon for non-JavaScript environments.

= 1.1.0 =

**Posts Loop Block:**

* Added "Style" tab in the editor. 
* Added 3 new settings to control the number of columns in desktop, tablet, and mobile screens.

**Category Loop Block:**

* Added "Style" tab in the editor. 
* Added 3 new settings to control the number of columns in desktop, tablet, and mobile screens.

**CSS Styles:**

* Added default colors for links ("a" HTML tags) located inside paragraphs ("p" HTML tags).  The default colors apply to the dark and light modes.

**Updates to user-interface components in WordPress:**

* Added missing props (__nextHasNoMarginBottom and __next40pxDefaultSize) to the UI components used as controls for the plugin blocks. Based on the following articles: [Updates to user-interface components in WordPress 6.8](https://make.wordpress.org/core/2025/03/25/updates-to-user-interface-components-in-wordpress-6-8/) and [Updates to user-interface components in WordPress 6.7](https://make.wordpress.org/core/2024/10/18/editor-components-updates-in-wordpress-6-7/).

**Documentation:**

* Updated README.txt. "Requires at least" information added.

= 1.1.1 =

**Default Gutenberg List block:**

* Added fallback colors for the default Gutenberg list block. It now uses the same colors as paragraph text in both dark and light modes.

**Project Structure:**

* Deleted empty folder located inside core &#8594; resources &#8594; src

= 1.2.0 =

* Added an option in the plugin admin bar to apply a flex-column layout to the wp-site-blocks container.
* Fixed typos in some of the settings descriptions for the plugin blocks.

= 1.2.1 =

* Fixed a CSS style bug in grid and flex containers located inside the Slider block. Now their background colors, gradients, box shadows, and border colors show correctly in the Gutenberg editor.

= 1.2.2 =

* Fixed a bug with the navigation links of the Posts Loop block. The navigation links were not displaying correctly on the frontend.
* Added CSS styles to the excerpt text of the Posts Loop block.
* Added fallback colors for the Posts Loop and Category Loop blocks.

= 2.0.0 =

* Disabled 5 blocks and 1 block variation for the Gutenberg editor on pages and posts. The disabled blocks are: Content Renderer, Dark Light Mode Switcher, Desktop Menu Container, Mobile Menu Container, and Sidebar Menu. The disable block variation is the Mega Menu block.
* The Gutenberg editor for pages and posts now only has 12 blocks available for use.
* The Gutenberg editor for templates, template parts, and patterns has access to the 18 custom blocks. 
* Added support for translating the texts in the plugin's admin menu.

= 2.0.1 =

* Fixed bug in the Linkedin icon of the Social Icon block. Now the Linkedin icon is visible.

= 2.1.0 =

* Added a new option to set the height of the wp-site-blocks container to 100vh. This new option is available as a checkbox in the plugin Admin menu.
* Added new 30 icons to the Icon Block. These icons, like the initial set, are sourced from Bootstrap Icons and are used under the MIT license.
* Added missing license notice to the CSS stylesheet of the Icon Block.
* Added new responsive controls to the Flex Container Block. These controls allow to change the "justify content" and "align items" properties for tablets and mobile devices. In total, there are 4 new controls: Justify Content (Tablet and Mobile), Justify Content (Mobile), Align Items (Tablet and Mobile), and Align Items (Mobile). These controls are available in the "Additional" tab.
* Fixed bug in the Responsive Image Block. This bug was causing the lazy loading overlay to be visible in the Gutenberg editor, while it remained hidden on the frontend. This bug was affecting images with the object-fit property set to "contain", and images with borders.
* Added a new control to change the color of the lazy-loading overlay. This control is available for the Responsive Image Block in the Additional Tab.
* Added a new control named "Box Shadow", which is available for the Desktop Menu Container and the Mobile Menu Container blocks. It allows to set a custom box shadow for the sticky navigation bar. This control is located in the Sticky tab of the aforementioned blocks.
* Added a new block variation for the Button Block. This block variation is named "Button with Icon" and allows the user to select an icon for the button. These icons are the same as those available for the Icon Block. Also, they are sourced from Bootstrap Icons and are used under the MIT license.
* Added new controls to the Button Block. These controls allow to change the hover color for the text and border, both for the light and dark mode. 
* Updated title of the hover background color control for the Button Block.

= 2.1.1 =

* Changed the order of controls in the Additional tab of the Button Block.
* Changed the default value to zero for the "caledros_basic_blocks_add_column_layout_to_wp_site_blocks" and "caledros_basic_blocks_set_custom_height_to_wp_site_blocks" settings. These settings are used in the plugin Admin menu.

= 2.2.0 =

* Added new blur control to the Flex and Grid Containers blocks. This control is available under the Style tab.
* Changed the inset CSS property of the Button block. The previous value was cropping a part of the button icon.
* Changed the default values for the "buttonIconColor" and "buttonIconDarkColor" attributes of the Button with Icon variation block.
* Reordered the controls for the hover border color in the Button block. Also, the labels of such controls have been modified.
* Removed unused CSS styles for the "swiper-slider" class in the Slider and Image Gallery blocks.

= 2.2.1 =

* Fixed a bug affecting Flex Container blocks located inside the Slider block. The issue caused the Flex Container blocks to display the same background image as the Slider block within the Gutenberg editor. The CSS rule responsible for this bug was removed.

== Upgrade Notice ==

= 1.0.0 =
Welcome to the first release of Caledros Basic Blocks! This version introduces 18 new performance-optimized Gutenberg blocks. The plugin includes an optional CSS preloader.

= 1.0.1 =
This update includes important bug fixes for the Slider block, improved compatibility using apiFetch(), and enhanced fallback handling.

= 1.1.0 =
This version includes new settings for the Posts Loop and Category Loop blocks, default CSS styles for links, and updates to user-interface components.

= 1.1.1 =
Added fallback colors for the default Gutenberg list block. It now uses the same colors as paragraph text in both dark and light modes.

= 1.2.0 =
This update adds an option in the plugin admin bar to apply a flex-column layout to the wp-site-blocks container.

= 1.2.1 =
This update fixes a CSS style bug in grid and flex containers located inside the Slider block.

= 1.2.2 =
This update fixes a bug with the navigation links of the Posts Loop block. It also adds CSS styles to the Posts Loop and Category Loop blocks.

= 2.0.0 =
This update disables 5 blocks and 1 variation block for the Gutenberg editor in pages and posts.

= 2.0.1 =
This update fixes a bug in the Linkedin icon of the Social Icon block.

= 2.1.0 =
This update adds several new features to the blocks included in the plugin. 

= 2.1.1 =
This update changes the order of controls of the Button block and modifies the default values of 2 plugin settings.

= 2.2.0 =
This update adds a new blur control to the Flex and Grid Containers blocks.

= 2.2.1 =
This update fixes a CSS bug in Flex Container blocks located inside the Slider block.

== Installation ==

You have two easy ways to install the Caledros Basic Blocks plugin:

**Option 1: From Your WordPress Dashboard**

**1\.** Go to your WordPress admin area.

**2\.** Navigate to Plugins &#8594; Add Plugin.

**3\.** In the Search Plugins box, type "Caledros Basic Blocks".

**4\.** Click Install Now, then Activate.

**Option 2: Manual Installation**

**1\.** Download the plugin ZIP file from WordPress.org.

**2\.** In your WordPress admin area, go to Plugins &#8594; Add Plugin &#8594; Upload Plugin.

**3\.** Choose the ZIP file you downloaded and click Install Now.

**4\.** Activate the plugin after installation.

**Need help or want to see what each block can do?**

Visit my [YouTube](https://www.youtube.com/@CaledrosForge) channel for step-by-step tutorials and tips on using Caledros Basic Blocks.