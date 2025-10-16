<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
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

function caledros_basic_blocks_posts_loop_render_cb($attributes){
    // Placeholder images 
    $placeholder_background_url = plugins_url('build/images/placeholder-mountains.7da2eb2d.webp', dirname(dirname(dirname(__FILE__))));  
    if (!filter_var($placeholder_background_url, FILTER_VALIDATE_URL)) { 
        $placeholder_background_url = ''; 
    }    
    $placeholder_url = plugins_url('build/images/placeholder.06efdda2.webp', dirname(dirname(dirname(__FILE__)))); 
    if (!filter_var($placeholder_url, FILTER_VALIDATE_URL)) { 
        $placeholder_url = ''; 
    }

    // Recover block attributes
    $page_type = sanitize_text_field( $attributes['pageType'] ?? 'front-page');
    $show_navigation_links = filter_var( $attributes['showNavigationLinks'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $number_of_items = intval( $attributes['numberOfItems'] ?? 4);
    $order_type = sanitize_text_field($attributes['orderType'] ?? "date");
    $sort_order = sanitize_text_field($attributes['sortOrder'] ?? "DESC");    
    $dateFormat = sanitize_text_field($attributes['dateOptions']["dateFormat"] ?? "DD/MM/YYYY");
    $show_date =  filter_var($attributes['dateOptions']['showDate'] ?? true, FILTER_VALIDATE_BOOLEAN);
    $show_author = filter_var($attributes['showAuthor'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $show_category = filter_var($attributes['showCategory'] ?? true, FILTER_VALIDATE_BOOLEAN);
    $show_tags = filter_var($attributes['showTags'] ?? true, FILTER_VALIDATE_BOOLEAN);
    $show_excerpt = filter_var( $attributes['excerptOptions']['showExcerpt'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $excerpt_length = intval($attributes['excerptOptions']['excerptLength'] ?? 20);
    $show_excerpt_ellipsis = filter_var( $attributes['excerptOptions']['showEllipsis'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $category_filter_enabled = filter_var( $attributes['categoryFilter']['enable'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $category_id = intval($attributes['categoryFilter']['categoryId'] ?? 0);
    $posts_loop_title = sanitize_text_field( $attributes['postsLoopTitle'] ?? "Website Title");
    $posts_loop_title_icon_url = sanitize_text_field($attributes['postsLoopTitleIcon']['url'] ?? "");
    $posts_loop_title_icon_alt = sanitize_text_field($attributes['postsLoopTitleIcon']['alt'] ?? "");
    $show_demo_data = filter_var($attributes['showDemoData'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $tag_filter_enabled = filter_var( $attributes['tagFilter']['enable'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $tag_id = sanitize_text_field($attributes['tagFilter']['tagId'] ?? "");
    $column_no_desktop_enable_custom_value = filter_var( $attributes['columnNoDesktop']['enableCustomValue'] ?? false, FILTER_VALIDATE_BOOLEAN );
    $column_no_desktop_number = intval( $attributes['columnNoDesktop']['columnNo'] ?? 4);
    $column_no_tablet_enable_custom_value = filter_var( $attributes['columnNoTablet']['enableCustomValue'] ?? false, FILTER_VALIDATE_BOOLEAN );
    $column_no_tablet_number = intval( $attributes['columnNoTablet']['columnNo'] ?? 2);
    $column_no_mobile_enable_custom_value = filter_var( $attributes['columnNoMobile']['enableCustomValue'] ?? false, FILTER_VALIDATE_BOOLEAN );
    $column_no_mobile_number = intval( $attributes['columnNoMobile']['columnNo'] ?? 1);
    $author_filter_enabled = filter_var( $attributes['authorFilter']['enable'] ?? false, FILTER_VALIDATE_BOOLEAN);
    $author_id = sanitize_text_field($attributes['authorFilter']['authorId'] ?? "");
    $author_link_enabled = filter_var( $attributes['authorFilter']['enableAuthorLink'] ?? false, FILTER_VALIDATE_BOOLEAN);

    // Format the post date
    $date_format_map = [
        "MM/DD/YYYY" => "m/d/Y",
        "DD/MM/YYYY" => "d/m/Y",
        "YYYY-MM-DD" => "Y-m-d",
        "Month DD, YYYY" => "F d, Y",
        "DD Month YYYY" => "d F Y",
        "Day, Month DD, YYYY" => "l, F d, Y",
        "Month DD" => "F d"
    ];
    $selected_date_format = $date_format_map[$attributes['dateOptions']["dateFormat"]] ?? 'F d, Y';

    // Page type attribute
    $page_type_query = $page_type === "front-page" ? "page" : "paged";

    // Recover current page
    $current_page = get_query_var($page_type_query) ? get_query_var($page_type_query) : 1;

    // SANITIZE CONTENT
    $default_allowed_tags = wp_kses_allowed_html('post');
    $svg_sanitize_options = [
        'svg' => [
            'xmlns'   => true,
            'width'   => true,
            'height'  => true,
            'fill'    => true,
            'class'   => true,
            'viewBox' => true,
        ],
        'path' => [
            'd' => true,
        ],
    ];
    $allowed_tags = array_merge($default_allowed_tags, $svg_sanitize_options);

    // Set inline styles
    $style = $column_no_desktop_enable_custom_value ? "--cbb-column-no-desktop:$column_no_desktop_number" : "";
    $style .= ($column_no_desktop_enable_custom_value && $column_no_tablet_enable_custom_value) ? ";" : "";
    $style .= $column_no_tablet_enable_custom_value ? "--cbb-column-no-tablet:$column_no_tablet_number" : "";
    $style .= ($column_no_tablet_enable_custom_value && $column_no_mobile_enable_custom_value) ? ";" : "";
    $style .= ($column_no_desktop_enable_custom_value && $column_no_mobile_enable_custom_value) ? ";" : "";
    $style .= $column_no_mobile_enable_custom_value ? "--cbb-column-no-mobile:$column_no_mobile_number" : "";

    // Show inline styles
    $inline_styles = ($column_no_desktop_enable_custom_value || $column_no_tablet_enable_custom_value || $column_no_mobile_enable_custom_value) ? 'style="'. $style .'"': '';

    // Start ouput buffering
    ob_start(); 
    ?>     
        <?php  
            // Loop settings              
            $args = array(
                'post_type'=>'post',
                'posts_per_page'=>(int) $number_of_items,
                'order'=>"$sort_order",
                'orderby'=>"$order_type",
                'paged'=>$current_page                  
            );
            if($page_type === "search-results-page"){
                $search_string = get_search_query();
                $args['s'] = $search_string;                     
            }
            if($page_type === "category-template" && is_category()){
                $current_category = get_queried_object();
                $cat_id = $current_category->term_id;
                $args['cat'] = $cat_id;                     
            }
            if($category_filter_enabled && $page_type !== "category-template"){
                $args['category__in'] = array($category_id);
            }
            if ($page_type === "tag-template" && is_tag()) {
                $current_tag = get_queried_object();
                $tag_id = $current_tag->term_id;
                $args['tag_id'] = $tag_id;
            }
            if ($tag_filter_enabled && $page_type !== "tag-template") {
                $args['tag__in'] = array($tag_id); 
            }
            if ($page_type === "author-template" && is_author()) {
                $current_author = get_queried_object();
                $author_id = $current_author->ID;
                $args['author'] = $author_id;    
            }
            if ($author_filter_enabled && $page_type !== "author-template") {
                $args['author__in'] = array($author_id);
            }
            $featured = new WP_Query($args); 
        ?>

        <?php if(!$show_demo_data): ?>
        <?php if($page_type === "search-results-page"): ?>
            <h1 class="has-text-align-center wp-block-query-title">
                Search results for: "<?php echo esc_html(get_search_query());?>"
            </h1>
        <?php endif;?>
        <div class="cbb-posts-loop" <?php echo wp_kses_post($inline_styles);?>>
            <div class="cbb-posts-loop__container">
                <?php             
                    if($featured->have_posts()):
                        while($featured->have_posts()):$featured->the_post();            
                ?>
                    <div class="cbb-posts-loop__card">  
                        <div class="cbb-posts-loop_post-header">
                            <p class="cbb-posts-loop_website-title">
                                <?php                                 
                                    if($posts_loop_title_icon_url === ""){
                                    // I'm using a direct <img> tag because the image is a static plugin asset,
                                    // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                                    // is not applicable, as it requires an attachment ID and is intended for media uploads.
                                    echo '<img class="cbb-posts-loop_website-title-icon" src="' . esc_url($placeholder_url) . '" alt="placeholder">'; // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage
                                    }else{
                                    // I'm using a direct <img> tag because the image is a static plugin asset,
                                    // not a WordPress media library attachment. Therefore, wp_get_attachment_image()
                                    // is not applicable, as it requires an attachment ID and is intended for media uploads.
                                    echo '<img class="cbb-posts-loop_website-title-icon" src="' . esc_url($posts_loop_title_icon_url) . '" alt="' . esc_attr($posts_loop_title_icon_alt) . '">'; // phpcs:ignore PluginCheck.CodeAnalysis.ImageFunctions.NonEnqueuedImage
                                    }                                
                                ?>
                                <?php echo esc_html( $posts_loop_title ); ?>
                            </p>
                            <div class="cbb-posts-loop_post-author-and-date">
                                <?php if($show_author):?>                                    
                                    <?php    
                                        $current_post_author_id = get_the_author_meta('ID') ;   
                                        $current_post_author_display_name = get_the_author_meta('display_name');                           
                                        $current_post_author_url = get_author_posts_url($current_post_author_id);    
                                    ?>
                                    <?php if($author_link_enabled):?> 
                                        <a class="cbb-posts-loop__author" href="<?php echo esc_url($current_post_author_url); ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                            </svg>                                        
                                            <?php echo esc_html($current_post_author_display_name)?>
                                        </a>  
                                    <?php else:?>
                                        <span class="cbb-posts-loop__author">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                                            </svg>                                        
                                            <?php echo esc_html($current_post_author_display_name)?>
                                        </span>  
                                    <?php endif;?>                                 
                                <?php endif;?> 
                                <?php if($show_date):?>
                                    <span class="cbb-posts-loop__date">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar2-event" viewBox="0 0 16 16">
                                        <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/>
                                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5z"/>
                                    </svg>  
                                    <?php echo get_the_date($selected_date_format); ?>
                                    </span>
                                <?php endif;?>
                            </div>
                        </div>                     
                        <div class="cbb-posts-loop__img-container">
                            <a class="cbb-posts-loop__img-link" href="<?php the_permalink();?>">
                                <?php the_post_thumbnail();?>
                                <span class="cbb-posts-loop__post-title"><?php the_title();?></span>
                            </a>                       
                        </div>      
                        <div class="cbb-posts-loop__post-info">
                            <div class="cbb-posts-loop__category-and-tag">  
                                <?php if((($page_type === "category-template" && is_category()) || ($category_filter_enabled && $page_type !== "category-template")) && $show_category):                                    
                                    $category_name = $current_category->name ?? get_cat_name($category_id);
                                    $category_link = get_category_link($current_category->term_id ?? $category_id);
                                ?>
                                    <div class="cbb-posts-loop__categories-container">  
                                        <a class="cbb-posts-loop__category" href="<?php echo esc_url($category_link); ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
                                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
                                            </svg>
                                            <?php echo esc_html($category_name); ?>
                                        </a>  
                                    </div> 
                                <?php else:                                    
                                    $categories = get_the_category();                                    
                                    if(!empty($categories) && $show_category):
                                ?>   
                                    <div class="cbb-posts-loop__categories-container">  
                                        <?php foreach($categories as $category): 
                                            $category_name = $category->name;
                                            $category_link = get_category_link( $category->term_id );
                                        ?>    
                                        <a class="cbb-posts-loop__category" href="<?php echo esc_url($category_link); ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmarks" viewBox="0 0 16 16">
                                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
                                            <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
                                            </svg>
                                            <?php echo esc_html($category_name); ?>
                                        </a>      
                                        <?php endforeach;?>   
                                    </div>
                                    <?php endif;?>                                    
                                <?php endif;?>  
                                <?php if((($page_type === "tag-template" && is_tag()) || ($tag_filter_enabled && $page_type !== "tag-template")) && $show_tags):
                                    $tag_name = $current_tag->name ?? get_term($tag_id, 'post_tag')->name;
                                    $tag_link = get_tag_link($current_tag->term_id ?? $tag_id);
                                ?>   
                                    <div class="cbb-posts-loop__tags-container">  
                                        <a class="cbb-posts-loop__tag" href="<?php echo esc_url($tag_link); ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                                            </svg>
                                            <?php echo esc_html($tag_name); ?>
                                        </a>  
                                    </div>
                                <?php else:
                                    $tags = get_the_tags();
                                    if(!empty($tags) && $show_tags):
                                ?>     
                                    <div class="cbb-posts-loop__tags-container">  
                                        <?php foreach($tags as $tag): 
                                            $tag_name = $tag->name;
                                            $tag_link = get_tag_link($tag->term_id);
                                        ?>  
                                        <a class="cbb-posts-loop__tag" href="<?php echo esc_url($tag_link); ?>">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
                                            <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
                                            <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
                                            </svg>
                                            <?php echo esc_html($tag_name); ?>
                                        </a>  
                                        <?php endforeach;?>  
                                    </div>  
                                    <?php endif;?>
                                <?php endif;?>     
                            </div>                    
                        </div>  
                        <?php 
                            $excerpt_ellipsis =  $show_excerpt_ellipsis ? "..." : "";
                            if($show_excerpt && has_excerpt()): 
                        ?>  
                        <p class="cbb-posts-loop__post-excerpt">                          
                            <?php echo esc_html(wp_trim_words(get_the_excerpt(), $excerpt_length, $excerpt_ellipsis)); ?>
                        </p>
                        <?php endif; ?> 
                    </div>  
                <?php
                    endwhile;
                    wp_reset_postdata();
                endif;
                ?>
            </div>     
            <?php if($show_navigation_links){?>  
            <div class="cbb-posts-loop_pagination">
                <?php 
                    $pagination = paginate_links(array(
                        'total'=>$featured->max_num_pages,
                        'prev_text' => '<',
                        'next_text'=>'>',
                        'current' => max( 1, get_query_var($page_type_query) )
                    ));
                    if($pagination){
                        echo wp_kses_post($pagination);
                    }  
                ?>
            </div>     
            <?php }?>  
        </div>
        <?php endif;?>
        <?php if($show_demo_data){
        echo wp_kses(caledros_basic_blocks_get_demo_data($placeholder_background_url, $placeholder_url), $allowed_tags);
        }        
        ?>    
    <?php 
    // Fetch the content of the ouput buffer
    $output = ob_get_contents();
    // Stop output buffering
    ob_end_clean();
    // Ouput the stored content
    return $output;
}

