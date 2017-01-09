$(document).ready(function(){

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".btn-burger, .nav";

        if (!$(e.target).closest(classForBody).length) {
            $('.btn-burger').removeClass("active");
            $(".nav").slideUp(300);
        }
    });


    /* BTN BURGER */
    $(".btn-burger").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(".nav").slideToggle(300);
    });


    /* SALON */
    $('.salon__carousel').owlCarousel({
        items:1,
        lazyLoad: true,
        dots: true,
        nav:true
        // responsive:{
        //     0:{
        //         items: 1
        //     },
        //     768:{
        //         items: 2
        //     },
        //     992:{
        //         items: 3
        //     }
        // }
    });
    var count = 1;
    $(".salon__carousel .owl-dot").each(function(){
        $(this).find("span").text("0" + count);
        count++;
    });


    /* MORE */
    $(".more__btn-wrap").on("click", function(e) {
        $(".more__btn-wrap").removeClass("active");
        $(this).addClass("active");
    });
    $(".more__carousel").owlCarousel({
        items:1,
        lazyLoad: true,
        dots: true,
        nav:true
        // responsive:{
        //     0:{
        //         items: 1
        //     },
        //     768:{
        //         items: 2
        //     },
        //     992:{
        //         items: 3
        //     }
        // }
    });


    /* TESTIMONIALS */
    $(".testimonials__carousel").owlCarousel({
        items:1,
        lazyLoad: true,
        dots: true,
        nav:true
        // responsive:{
        //     0:{
        //         items: 1
        //     },
        //     768:{
        //         items: 2
        //     },
        //     992:{
        //         items: 3
        //     }
        // }
    });
    $(".testimonials__carousel .owl-dot").each(function(){
        $(this).find("span").text("0" + count);
        count++;
    });
});