try{


    //sendwich func
    function headerMenuSendwich(){

        $('.header-menu-sendwich').click(function(){
            $(this).toggleClass('active');
            $('.header-menu-wrap').stop().slideToggle(300);
        });

        $(window).resize(function(){
            if($(window).width()>960){
                $('.header-menu-wrap').removeAttr('style');
                $('.header-menu-sendwich').removeClass('active');

            }else{ missClick();}

        });

    }
    function missClick(){
         $(document).on('click touchstart',function (event){

                var div = $('.header-menu-wrap');
                if (!div.is(event.target) && div.has(event.target).length === 0 && !$('.header-menu-sendwich').is(event.target) && $('.header-menu-sendwich').has(event.target).length === 0)
                    {
                        $('.header-menu-wrap').slideUp();
                        $('.header-menu-sendwich').removeClass('active');
                    }

        });
    }

    function featuresSlider(){

        function featuresSliderInit(windowWidth){

            var slickTag = $('.features-main');

            if(windowWidth<=667-$.scrollbarWidth()){
                if(!slickTag.is('.slick-slider')){
                    slickTag.slick({
                        slidesToShow: 1,
                        dots:true,
                        arrows:false,
                        swipeToSlide:true,
                        draggable:false
                    });
                }
            }
            else{
                if(slickTag.is('.slick-slider')){
                    slickTag.slick('unslick');
                }
            }
        }

        var windowWidth = $(window).width();

        featuresSliderInit(windowWidth);

        $(window).resize(function(){

            windowWidth = $(window).width();

            featuresSliderInit(windowWidth);

        });

    };

    function transportSlider(){

        $('.transport-slider').slick({
            centerMode:true,
            slidesToShow:3,
            infinite: true,
            swipeToSlide:true,
            arrows:true,
            responsive: [
                {
                    breakpoint: 961,
                    settings: {
                        centerMode:false,
                        slidesToShow:1,
                        adaptiveHeight: true
                    }
                }
            ]
        });

    }

    $(document).ready(function(){

        headerMenuSendwich();
        featuresSlider();
        transportSlider();
        if($(window).width()<960){

                missClick();
            }

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}