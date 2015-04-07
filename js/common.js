/**
 * Created by arshinnik_r on 07.04.2015.
 */
$(document).ready(function() {

    $("#owl-example").owlCarousel({
        items: 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [980,1],
        itemsTablet: [768,1],
        pagination: false,
        // Navigation
        navigation : false,
        navigationText : ["prev","next"],
        rewindNav : true,
        scrollPerPage : false,
        // CSS Styles
        baseClass : "owl-carousel",
        theme : "owl-theme"
    });

});