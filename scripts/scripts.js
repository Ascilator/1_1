jQuery(function () {

    $('.burger').click(function () {



        if ($(this).hasClass('_filter')) {
            $('.filter_part').removeClass('_active');
            $('.burger').removeClass('_filter');
            $('body').removeClass('_lock');
        } else {
            $(this).toggleClass('_active');
            $('.menu').toggleClass('_active');
            $('body').toggleClass('_lock');
            $('.burger_content').toggleClass('_active');
            $('.black_href').toggleClass('_active');
        }
    });

    $('.filter_btn').click(function () {
        $('.filter_part').addClass('_active');
        $('.burger').addClass('_filter');
        $('body').addClass('_lock');
    });

    $('.black_href').click(function () {
        $('.burger_content').removeClass('_active');
        $('.black_href').removeClass('_active');

    })
    $('input').on('focus', function () {
        $('.search').addClass('_active');

    })
    $('input').on('blur', function () {
        $('.search').removeClass('_active');
    });

    $('.choose_item').click(function () {
        $(this).siblings().children('.icon').removeClass('_active');
        $(this).children('.icon').addClass('_active');
    })

    $('.color').click(function () {
        $('.color').removeClass('_active');
        $(this).addClass('_active');
    });
    $('.filter_op').click(function () {
        $(this).toggleClass('_active');
    });
    $('.catalog_item>.heart').click(function () {

        $(this).toggleClass('_active');
    })
    $('.male').click(function () {
        $(this).siblings().removeClass('_active');
        $(this).addClass('_active');
    })
    $('.filter_header').click(function () {
        $('.filter_header').not(this).siblings().slideUp();
        $('.filter_header').not(this).removeClass('_active');
        $(this).siblings().slideToggle();
        $(this).addClass('_active');
    })


    function drop_down() {
        $('.filter_drop_down_title').click(function () {
            $(this).siblings('.drop_down_body').slideToggle();
            $(this).toggleClass('_active');
        })
        $('.check_item').click(function () {
            $(this).toggleClass('_active');
        })
    }
    drop_down();
    function tabs() {

        $(".tab_text").not(":first").hide();
        $(".tab_link").click(function () {
            $(".tab_link").removeClass("_active").eq($(this).index()).addClass("_active");
            $(".tab_text").hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass("_active");
    }
    tabs();


    $('.menu_item._dropped').mouseenter(function () {
        $(this).children('.menu_body').addClass('_active');
        $(this).addClass('_active');
        $('.black_href').addClass('_active');
    });
    $('.menu_item._dropped').mouseleave(function () {
        $(this).children('.menu_body').removeClass('_active');
        $(this).removeClass('_active');
        $('.black_href').removeClass('_active');
    })

    $('#step_1').click(function () {
        $(this).parent().slideUp();
        $('.do_bet').slideDown();
        $('.color_cont').slideUp();
        $('.choose_size').slideUp();
    });
    $('#step_3').click(function () {

        $('.do_bet>form').addClass('_error');
        $('.error_messege').slideDown();
        $('.error').slideDown();
    });
    $('#step_2').click(function () {
        $(this).parent().slideUp();
        $('.good_broned').slideDown();
    });
    $('#step_4').click(function () {
        $('.good_broned').slideUp();
        $('.good_delivered').slideDown();
    });
    $('#step_5').click(function () {
        $('.good_broned').slideUp();
        $('.canceling_ggod').slideDown();
    })
    $('.good_th_item').click(function () {
        $(this).siblings().removeClass('_active');
        $(this).addClass('_active');
    });
    $('.card_item').click(function () {
        $(this).siblings().removeClass('_active');
        $(this).addClass('_active');
    });
    $('#step_6').click(function () {
        $('.do_bet').slideUp();
        $('.bet_win').slideDown();
    })
    $('.drop_title').click(function () {
        $('.drop_title').not(this).siblings().slideUp();
        $(this).siblings().slideToggle();
    });
    $('.drop_link').click(function () {
        $(this).parent().slideUp();
        $(this).parent().parent().addClass('_active');
        $(this).parent().siblings().children('.text').text($(this).text());
    })




    new Swiper('.slider_body', {
        observer: true,
        observeParents: true,
        //observeSlideChildren: true,
        direction: 'vertical',
        slidesPerView: 6,
        scrollbar: {
            el: '.swiper-scroll',
            draggable: true,
        }
    });

    var color_item = $('.color.radio').children();
    color_item.on('click', function () {
        color_item.removeClass('_active');
        $(this).toggleClass('_active');
    });
    function item_slider() {
        var item_slider = $('.slider_big_body');
        item_slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,

            infinite: false,
            fade: true,
            centerMode: true,
            nextArrow: $('.slider_arrow_next'),
            prevArrow: $('.slider_arrow_prev'),
            responsive: [
                {
                    breakpoint: 650,
                    settings: {
                        variableWidth: true,
                        fade: false,
                        centerMode: false,
                    },
                },
            ]

        });
        $('.slider_small_body>.slider_item').click(function () {
            var number = $(this).index();

            item_slider.slick('slickGoTo', number);
        });


    }
    item_slider();
    function dinamic_adaptive() {



        var breakpoint_2 = 650;
        if ($('html').width() < breakpoint_2) {
            $('.sliders_cont').prepend($('#item_header'));
            $('.adv_container._dyn').insertAfter($('.tabs_cont'))

        }


        $(window).on('resize', function () {


            if ($('html').width() < breakpoint_2) {
                $('.sliders_cont').prepend($('#item_header'));
                $('.adv_container._dyn').insertAfter($('.tabs_cont'));

            } else {
                $('.middle_part').prepend($('#item_header'));
                $('.middle_part').append($('.adv_container._dyn'))

            }
        });

    }
    dinamic_adaptive();
});


