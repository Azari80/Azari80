<?php

if ( ! function_exists( 'theme_setup' ) ) :
    function theme_setup() {
        // Featured image
        add_theme_support( 'post-thumbnails' );
        // Menus Definition
        register_nav_menus(
            array(
                'menu-principal' => __( 'Menu principal', 'theme' ),
                'footer' => __( 'Menu secondaire', 'theme' ),
            )
        );
    }
endif;
add_action( 'after_setup_theme', 'theme_setup' );

function demo_widgets_init() {

    register_sidebar(
        array(
            'name'          => 'Formulaire de contact',
            'id'            => 'newsletter',
            'description'   => 'Add widgets here to appear in your newsletter area.',
            'before_widget' => '<section id="%1$s" class="widget %2$s">',
            'after_widget'  => '</section>',
            'before_title'  => '<h2 class="widget-title">',
            'after_title'   => '</h2>',
        )
    );

}
add_action( 'widgets_init', 'demo_widgets_init' );


?>

