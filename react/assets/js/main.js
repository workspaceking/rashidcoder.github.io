window.onload = function(){


    // Script for Mobile Menu Activation
    jQuery(document).ready(function () {
        jQuery('#m-menu').on('click', function () {
            jQuery('.offCanvasMenu, .off-canvas-overlay').addClass('active');
        })

        jQuery('.close-MobileMenu, .off-canvas-overlay').on('click', function () {
            jQuery('.offCanvasMenu, .off-canvas-overlay').removeClass('active');
        })
    })



   // Script for Mobile Menu Activation
   jQuery(document).ready(function () {
    jQuery('#open-sidebar').on('click', function () {
        jQuery('.sideBar, .off-canvas-overlay').addClass('active');
    })

    jQuery('.cls-sidebar , .off-canvas-overlay').on('click', function () {
        jQuery('.sideBar, .off-canvas-overlay').removeClass('active');
    })
})
















    // Script for Slick Slider Activation
    jQuery('.product-active').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:'<button type="button" className="slick-prev"><i className="fal fa-long-arrow-right"></i></button>',
        nextArrow:'<button type="button" className="slick-next"><i className="fal fa-long-arrow-left"></i></button>',
        
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });



    // Script for Nice Select Activation 
    jQuery(document).ready(function () {
        jQuery('select').niceSelect();
    })

    // Script for Magnific Popup Activation 
    jQuery(document).ready(function () {
        jQuery('.iframe-link').magnificPopup({ type: 'iframe' });
    });





    // Script For Scroll to top Button
    jQuery(document).ready(function () {
        var back = jQuery('.back-to-top');
        back.on('click', function () {
            jQuery('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        jQuery(window).on('scroll', function () {
            var self = jQuery(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })

}