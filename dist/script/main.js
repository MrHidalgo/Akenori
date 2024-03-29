function scrollWindowNavigationFixedLarge() {
    var countScroll = $(window).scrollTop(),
        navigationBlock = $('.header__fixed'),
        body = $("body");

    if (countScroll > 630) {
        body.addClass("fixed");
        navigationBlock.addClass("slideInDown");
    } else {
        body.removeClass("fixed");
        navigationBlock.removeClass("slideInDown");
    }
}

function checkboxInit() {
    $(".checkbox__btn").click(function(e) {
        e.preventDefault();

        var inputCheckbox = $(this).find('input');
        if ($(this).hasClass('disabled')){
            return false;
        }
        $(this).toggleClass('active');
        if(inputCheckbox.prop('checked') == true){
            inputCheckbox.prop('checked', false).change();
        } else {
            inputCheckbox.prop('checked', true).change();
        }
        return false;
    });
}


$(document).ready(function(){
    checkboxInit();

    /* LOGO CLICK SCROLL TO TOP */
    $(".header__fixed-logo").on("click", function(e) {
        $('body,html').animate(
            {
                scrollTop: 0
            }, 1000
        );
    });

    /* BODY CLICK */
    $('body').on('click', function (e) {
        var classForBody = ".btn-burger, .nav, .header__fixed, .modal__container,  " +
            ".difference__btn, .device__btn, .quality__btn," +
            " .salon__btn, .sentence__btn, .delivery__btn";

        if (!$(e.target).closest(classForBody).length) {
            $('.btn-burger').removeClass("active");
            $(".nav").slideUp(300);
            $("body").removeClass("open-popup");
            $(".modal").fadeOut(300);
        }
    });


    /* BTN BURGER */
    $(".btn-burger").on("click", function(e) {
        e.preventDefault();

        $(this).toggleClass("active");
        $(".nav").slideToggle(300);
        $("body").toggleClass("open-menu");
    });


    /* SALON */
    $('.salon__carousel').owlCarousel({
        items:1,
        loop: true,
        dots: true,
        nav:true
    });
    var count = 1;
    $(".salon__carousel .owl-dot").each(function(){
        $(this).find("span").text("0" + count);
        count++;
    });


    /* MORE */
    $(".more__btn-wrap").on("click", function() {
        var linkAttr = $(this).attr("data-more");

        $(".more__btn-wrap").removeClass("active");
        $(this).addClass("active");

        $(".more__carousel").css(
            {
                opacity: 0,
                height: 0,
                visibility: "hidden"
            }
        );
        $(".more__carousel-" + linkAttr).css(
            {
                opacity: 1,
                height: "auto",
                visibility: "visible"
            }
        );
    });
    $(".more__carousel").owlCarousel({
        items:1,
        loop: true,
        dots: true,
        nav:true
    });


    /* TESTIMONIALS */
    $(".testimonials__carousel").owlCarousel({
        items:1,
        loop: true,
        dots: true,
        nav:true
    });
    var count = 1;
    $(".testimonials__carousel .owl-dot").each(function(){
        $(this).find("span").text("0" + count);
        count++;
    });

    /* BTN PLAY/PAUSE */
    $(".btn-video").on("click", function(e) {
        e.preventDefault();
        var vid = $(this).prev("#video");

        if($(this).hasClass("btn_play")) {
            $(this).removeClass('btn_play').addClass("btn_pause");
            vid.trigger('play');
        } else {
            $(this).removeClass('btn_pause').addClass("btn_play");
            vid.trigger('pause');
        }
    });

    /* MODAL */
    var buyBtn = ".difference__btn, .device__btn, .quality__btn, .salon__btn, .sentence__btn, .delivery__btn";
    $(buyBtn).on("click", function(e) {
        e.preventDefault();

        $("body").addClass("open-popup");
        $(".modal").fadeIn(300);
    });
    $(".btn-close").on("click", function(e) {
        e.preventDefault();

        $("body").removeClass("open-popup");
        $(".modal").fadeOut(300);
    });
    $(document).on("keyup", function(e) {
        if (e.keyCode == 27) {
            $("body").removeClass("open-popup");
            $(".modal").fadeOut(300);
        }
    });


    /* SMOOTH SCROLL */
    $(".nav, .special__wrap").on("click", "a", function (e) {
        e.preventDefault();

        var id          = $(this).attr('href'),
            navHeight   = $(".header__fixed").outerHeight();

        $(".btn-burger").removeClass("active");
        $(".nav").slideUp(300);
        $("body").removeClass("open-menu");

        if(id === "#top") {
            $('body, html').animate({
                scrollTop: 0
            }, 1000);
        } else {
            var top;
            if($(window).width() > '1024') {
                top = $(id).offset().top - navHeight;
            } else {
                top = $(id).offset().top;
            }

            $('body, html').animate({
                scrollTop: top
            }, 1000);
        }
    });


    /* ANIMATION - VIEW PORT CHECK PAGE */
    if($(window).width() > '767') {
        var classNameSection    =   ".difference, .device, .phone, .technical, .more, .testimonials, " +
                                    ".special__title, .special__row, .special__img, " +
                                    ".quality__img, .quality__title, .quality__row, " +
                                    ".salon__title, .salon__carousel, .salon__row, " +
                                    ".nature__title, .nature__img, .nature__row, " +
                                    ".city__title, .city__img, .city__row, " +
                                    ".sentence__title, .sentence__row, .sentence__center, .sentence__bottom, " +
                                    ".tripWithout__title, .tripWithoutW__img, .tripWithout__row, " +
                                    ".tripWith__title, .tripWith__img, .tripWith__row, " +
                                    ".delivery__title, .delivery__img, .delivery__row";

        $(classNameSection).addClass('hidden').viewportChecker({
                classToAdd: 'visible animated slideInUp',
                classToRemove : 'hidden',
                removeClassAfterAnimation: true
            }
        );
    }
});


$(window).on("load resize ready scroll", function(){
    if($(window).width() > '1024') {
        scrollWindowNavigationFixedLarge();
    } else {
        $("body").removeClass("fixed");
        $('.header__fixed').removeClass("slideInDown");
    }
});


$(window).on("load resize", function(){
    if($(window).width() > '1024') {
        (function() {
            $(function() {

                /*  Globals
                 -------------------------------------------------- */
                var PROPERTIES =               ['translateX', 'translateY', 'opacity', 'rotate', 'scale'],
                    $window =                  $(window),
                    $body =                    $('body'),
                    wrappers =                 [],
                    currentWrapper =           null,
                    scrollTimeoutID =          0,
                    bodyHeight =               0,
                    windowHeight =             0,
                    windowWidth =              0,
                    prevKeyframesDurations =   0,
                    scrollTop =                0,
                    relativeScrollTop =        0,
                    currentKeyframe =          0,
                    keyframes = [
                        {
                            'wrapper' : '#header',
                            'duration' : '90%',
                            'animations' :  [
                                {
                                    'selector'    : '.logotype__img-0',
                                    'translateY'  : 300,
                                    'opacity'     : [1, 0],
                                    'scale'       : 0.5
                                } , {
                                    'selector'    : '.logotype__img-1',
                                    'translateY'  : 300,
                                    'opacity'     : [1, 0],
                                    'scale'       : 0.5
                                } , {
                                    'selector'    : '.logotype__img-2',
                                    'translateY'  : 150,
                                    'opacity'     : [1, 0.15]
                                } , {
                                    'selector'    : '.register__img-0',
                                    'translateY'  : '-45%'
                                }, {
                                    'selector'    : '.register__img-1',
                                    'opacity'     : [1, 0],
                                    'scale'       : 0
                                }
                            ]
                        } ,  {
                            'duration' : '100%',
                            'animations' :  []
                        }
                    ];

                /*  Construction
                 -------------------------------------------------- */
                init = function() {
                    scrollIntervalID = setInterval(updatePage, 10);
                    setupValues();
                    $window.resize(throwError);
                    if(isTouchDevice) {
                        $window.resize(throwError);
                    }
                };

                setupValues = function() {
                    scrollTop = $window.scrollTop();
                    windowHeight = $window.height();
                    windowWidth = $window.width();
                    convertAllPropsToPx();
                    buildPage();
                };

                buildPage = function() {
                    var i, j, k;
                    for(i=0;i<keyframes.length;i++) { // loop keyframes
                        bodyHeight += keyframes[i].duration;
                        if($.inArray(keyframes[i].wrapper, wrappers) == -1) {
                            wrappers.push(keyframes[i].wrapper);
                        }
                        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
                            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
                                value = keyframes[i].animations[j][key];
                                if(key !== 'selector' && value instanceof Array === false) {
                                    var valueSet = [];
                                    valueSet.push(getDefaultPropertyValue(key), value);
                                    value = valueSet;
                                }
                                keyframes[i].animations[j][key] = value;
                            });
                        }
                    }
                    $body.height(bodyHeight);
                    $window.scroll(0);
                    currentWrapper = wrappers[0];
                    $(currentWrapper).show();
                };

                convertAllPropsToPx = function() {
                    var i, j, k;
                    for(i=0;i<keyframes.length;i++) { // loop keyframes
                        keyframes[i].duration = convertPercentToPx(keyframes[i].duration, 'y');
                        for(j=0;j<keyframes[i].animations.length;j++) { // loop animations
                            Object.keys(keyframes[i].animations[j]).forEach(function(key) { // loop properties
                                value = keyframes[i].animations[j][key];
                                if(key !== 'selector') {
                                    if(value instanceof Array) { // if its an array
                                        for(k=0;k<value.length;k++) { // if value in array is %
                                            if(typeof value[k] === "string") {
                                                if(key === 'translateY') {
                                                    value[k] = convertPercentToPx(value[k], 'y');
                                                } else {
                                                    value[k] = convertPercentToPx(value[k], 'x');
                                                }
                                            }
                                        }
                                    } else {
                                        if(typeof value === "string") { // if single value is a %
                                            if(key === 'translateY') {
                                                value = convertPercentToPx(value, 'y');
                                            } else {
                                                value = convertPercentToPx(value, 'x');
                                            }
                                        }
                                    }
                                    keyframes[i].animations[j][key] = value;
                                }
                            });
                        }
                    }
                };

                getDefaultPropertyValue = function(property) {
                    switch (property) {
                        case 'translateX':
                            return 0;
                        case 'translateY':
                            return 0;
                        case 'scale':
                            return 1;
                        case 'rotate':
                            return 0;
                        case 'opacity':
                            return 1;
                        default:
                            return null;
                    }
                };

                /*  Animation/Scrolling
                 -------------------------------------------------- */
                updatePage = function() {
                    window.requestAnimationFrame(function() {
                        setScrollTops();
                        if(scrollTop > 0 && scrollTop <= (bodyHeight - windowHeight)) {
                            animateElements();
                            setKeyframe();
                        }
                    });
                };

                setScrollTops = function() {
                    scrollTop = $window.scrollTop();
                    relativeScrollTop = scrollTop - prevKeyframesDurations;
                };

                animateElements = function() {
                    var animation, translateY, translateX, scale, rotate, opacity;
                    for(var i=0;i<keyframes[currentKeyframe].animations.length;i++) {
                        animation   = keyframes[currentKeyframe].animations[i];
                        translateY  = calcPropValue(animation, 'translateY');
                        translateX  = calcPropValue(animation, 'translateX');
                        scale       = calcPropValue(animation, 'scale');
                        rotate      = calcPropValue(animation, 'rotate');
                        opacity     = calcPropValue(animation, 'opacity');

                        $(animation.selector).css({
                            'transform':    'translate3d(' + translateX +'px, ' + translateY + 'px, 0) scale('+ scale +') rotate('+ rotate +'deg)',
                            'opacity' : opacity
                        });
                    }
                };

                calcPropValue = function(animation, property) {
                    var value = animation[property];
                    if(value) {
                        value = easeInOutQuad(relativeScrollTop, value[0], (value[1]-value[0]), keyframes[currentKeyframe].duration);
                    } else {
                        value = getDefaultPropertyValue(property);
                    }
                    // value = +value.toFixed(2)
                    // TEMPORARILY REMOVED CAUSE SCALE DOESN'T WORK WITHA AGRESSIVE ROUNDING LIKE THIS
                    return value;
                };

                easeInOutQuad = function (t, b, c, d) {
                    //sinusoadial in and out
                    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
                };

                setKeyframe = function() {
                    if(scrollTop > (keyframes[currentKeyframe].duration + prevKeyframesDurations)) {
                        prevKeyframesDurations += keyframes[currentKeyframe].duration;
                        currentKeyframe++;
                        showCurrentWrappers();
                    } else if(scrollTop < prevKeyframesDurations) {
                        currentKeyframe--;
                        prevKeyframesDurations -= keyframes[currentKeyframe].duration;
                        showCurrentWrappers();
                    }
                };

                showCurrentWrappers = function() {
                    var i;
                    if(keyframes[currentKeyframe].wrapper != currentWrapper) {
                        $(currentWrapper).hide();
                        $(keyframes[currentKeyframe].wrapper).show();
                        currentWrapper = keyframes[currentKeyframe].wrapper;
                    }
                };

                /*  Helpers
                 -------------------------------------------------- */

                convertPercentToPx = function(value, axis) {
                    if(typeof value === "string" && value.match(/%/g)) {
                        if(axis === 'y') value = (parseFloat(value) / 100) * windowHeight;
                        if(axis === 'x') value = (parseFloat(value) / 100) * windowWidth;
                    }
                    return value;
                };

                throwError = function() {
                    $body.addClass('page-error');
                };

                isTouchDevice = function() {
                    return 'ontouchstart' in window // works on most browsers
                        || 'onmsgesturechange' in window; // works on ie10
                };

                init();
            });
        }).call(this);
    }
});