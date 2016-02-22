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
            }

        });

    }

    function featuresSlider(){

        function featuresSliderInit(windowWidth){

            var slickTag = $('.features-main');

            if(windowWidth<=640){
                if(!slickTag.is('.slick-slider')){
                    slickTag.slick({
                        slidesToShow: 1,
                        dots:true,
                        arrows:false,
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
            arrows:true,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        centerMode:false,
                        slidesToShow:1
                    }
                }
            ]
        });

    }

    $(document).ready(function(){

        headerMenuSendwich();
        featuresSlider();
        transportSlider();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}