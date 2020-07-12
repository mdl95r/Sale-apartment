document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = $('#burger-btn');
    const menuList = $('.header-nav__list');
    
    burgerBtn.on('click', function() {
        $(this).toggleClass('active');
        if (burgerBtn.hasClass('active')) {
            $(menuList).css('display', 'block')
            $('.header-nav').css('left', '0');
        } else {
            $('.header-nav').css('left', '');
            setTimeout(function(){
                $(menuList).removeAttr('style');  
                $('.header-nav').removeAttr('style');
            },300);
        }
    });

    function resize() {
        let w = $(window).width();
    
        return function() {
            if( w != $( window ).width() ){
                $('.header-nav').css('left', '');
                setTimeout(function(){
                    $(burgerBtn).removeClass('active');
                    $(menuList).css('display', '');
                },300)
                w = $( window ).width();
            
                delete w;
              }
        }
    }
    
    windowRes = resize();
    
    $(window).on('resize', function() {
        windowRes();
    });


    $(window).scroll(function(){
        let height = $(document).scrollTop();
        let w 	   = $(window).width();
        if (w > 1024) {
            if ( height >= 200 ) {
                $(".up-btn-container").css("display", "block");
            } else {
            if ( height < 200 ) 
                $(".up-btn-container").css("display", "none");
            };
        }
    });

	$(".up-btn-container").on("click", function() {
        // let w 				= 	$(window).width();

        $("html, body").animate({ scrollTop: 0 }, 500);
		//  	menu 			= 	$(".menu"),
		// 	displayBlock 	= 	$(".menu").css("display", "none");	
		// if(w < 769) {
        // 	if ( menu != displayBlock) {
		// 		$(".menu").css("display", "none");
		// 		$(".header").removeClass("down");
		// 	}
        // } else {
        // 	if (w > 770) {
        // 		$(".menu").removeAttr("style");
        // 	}
        // };
    });
    
    $('.cards-item__status-btn').on('click', function() {
        $(this).removeClass('cards-item__status-btn--free')
        .addClass('cards-item__status-btn--booked').text('Забронировано');
    });
});