try{

    function fotogalerySlider(){
        $('.fotogallery-slider-wrap').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            swipeToSlide:true,
            dots: true,
            responsive: [
                {
                  breakpoint: 961,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 641,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
        });
    }

    $(document).ready(function(){
        fotogalerySlider();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}