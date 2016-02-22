try{

    function fotogalerySlider(){
        $('.fotogallery-slider-wrap').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true
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