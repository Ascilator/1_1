jQuery(function () {


    var catalog_slider_body = $('.catalog_slider_body');
    var catalog_slider_body_bodyIsLive = false;

    var adv_cont_slider = $('#adv_cont');
    var adv_cont_sliderIsLive = false;



    if ($('html').width() < 700) {
        if (catalog_slider_body_bodyIsLive === true) {
            catalog_slider_body.slick('unslick');
            catalog_slider_body_bodyIsLive = false;
        }
        if (adv_cont_sliderIsLive === false) {
            adv_cont_slider.slick({
                infinite: false,
                rows: 0,
                speed: 300,
                easing: 'ease',
                waitForAnimate: false,
                touchMove: true,
                touchTreshhold: 50,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: $('.adv_cont_arrow_next'),
                prevArrow: $('.adv_cont_arrow_prev'),
            });
            adv_cont_sliderIsLive = true;


        }

    } else {
        if (catalog_slider_body_bodyIsLive === false) {
            catalog_slider_body.slick({
                infinite: false,
                rows: 0,
                speed: 300,
                easing: 'ease',
                waitForAnimate: false,
                touchMove: true,
                touchTreshhold: 50,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: $('.catalog_arrow_next'),
                prevArrow: $('.catalog_arrow_prev'),
            });
            catalog_slider_body_bodyIsLive = true;


        }
        if (adv_cont_sliderIsLive === true) {
            adv_cont_slider.slick('unslick');
            adv_cont_sliderIsLive = false;
        }
    }
    $(window).resize(function () {
        if ($('html').width() < 700) {
            if (catalog_slider_body_bodyIsLive === true) {
                catalog_slider_body.slick('unslick');
                catalog_slider_body_bodyIsLive = false;
            }
            if (adv_cont_sliderIsLive === false) {
                adv_cont_slider.slick({
                    infinite: false,
                    rows: 0,
                    speed: 300,
                    easing: 'ease',
                    waitForAnimate: false,
                    touchMove: true,
                    touchTreshhold: 50,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: $('.adv_cont_arrow_next'),
                    prevArrow: $('.adv_cont_arrow_prev'),
                });
                adv_cont_sliderIsLive = true;


            }

        } else {
            if (catalog_slider_body_bodyIsLive === false) {
                catalog_slider_body.slick({
                    infinite: false,
                    rows: 0,
                    speed: 300,
                    easing: 'ease',
                    waitForAnimate: false,
                    touchMove: true,
                    touchTreshhold: 50,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: $('.catalog_arrow_next'),
                    prevArrow: $('.catalog_arrow_prev'),
                });
                catalog_slider_body_bodyIsLive = true;


            }
            if (adv_cont_sliderIsLive === true) {
                adv_cont_slider.slick('unslick');
                adv_cont_sliderIsLive = false;
            }
        }

    });




    $('.slider_blog_body').slick({
        infinite: true,

        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: true,
        touchMove: true,
        touchTreshhold: 50,
        variableWidth: true,
        //slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.blog_next_arrow'),
        prevArrow: $('.blog_arrow_prev'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    prevArrow: $('.blog_arrow_prev'),
                    nextArrow: $('.blog_arrow_next'),
                },
            },
        ]



    });
    $('.slider_insta_body').slick({
        infinite: true,

        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: true,
        touchMove: true,
        touchTreshhold: 50,
        variableWidth: true,
        //slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.insta_next_arrow'),
        prevArrow: $('.blog_arrow_prev'),
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    prevArrow: $('.insta_arrow_prev'),
                    nextArrow: $('.insta_next_arrow'),
                },
            },
        ]
    });

    $('.product_slider_body').slick({
        infinite: true,

        rows: 0,
        speed: 300,
        easing: 'ease',
        waitForAnimate: true,
        touchMove: true,
        touchTreshhold: 50,

        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: $('.product_slider_next'),
        prevArrow: $('.product_slider_prev'),

    });
    $('.burger').click(function () {
        $('.menu').toggleClass('_active');
        $(this).toggleClass('_active');
    });
    $('.full_desc').click(function () {
        $('.in_shadow').fadeToggle();
    });
    $('.check_box').click(function () {
        $(this).toggleClass('_active');
    });
    $('.menu_item').click(function () {

        $('html, body').animate({
            scrollTop: $(`#to_scroll_${$(this).index()}`).offset().top - 30
        }, 1000);
        $('.menu').removeClass('_active');
    });

    $('#contuct_form').on('submit', function (e) {
        e.preventDefault();
        var inputs = $(this).children('.check_box');
        if (!$('.check_box').hasClass('_active')) {
            return;
        }
        $('#contuct_form')[0].reset();
        $('.check_box').removeClass('_active');
        location.reload();
    });


    function search_form() {
        var input = $('.search').children('.input_item').children('input');
        $('.search').on('submit', function (e) {
            e.preventDefault();
            $(this).addClass('_focus');
            $(this).children('.input_item').children('input').focus();
            if (input.val() != '') {
                location.reload();
            }
        });
        input.on('blur', function () {
            if ($(this).val() == "") {
                $('.search').removeClass('_focus');
            }
        });
        input.on('keyup', function () {
            if ($(this).val() != "") {
                $('.search').addClass('_seaching');
            } else {
                $('.search').removeClass('_seaching');
            }
        });
        $('#cross').click(function () {
            $('.search').removeClass('_seaching');
            input.val('');
            input.focus();
        });


    }
    search_form();

    $('.big_form').on('submit', function (e) {
        e.preventDefault();
        var inputs = $(this).children('.check_box');
        if ($('.bgfinput').val() == "" || !inputs.hasClass('_active')) {
            return;
        }
        $('.big_form')[0].reset();
        $('.check_box').removeClass('_active');
        location.reload();
    });


    $('.filter_title').click(function () {
        $('.filter_title').not(this).siblings().slideUp();
        $(this).siblings().slideToggle();
    });
    $('.filter_link').click(function () {
        $(this).parent().slideUp();
        $(this).parent().siblings().children('.text').text($(this).text());
    })

});

