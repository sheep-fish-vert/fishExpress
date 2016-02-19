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
            }

        });

    }


    $(document).ready(function(){

        headerMenuSendwich();

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}