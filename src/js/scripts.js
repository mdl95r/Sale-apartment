document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burger-btn'),
           menuList = document.querySelector('.header-nav__list'),
             header = document.querySelector('.header'),
            headNav = document.querySelector('.header-nav'),
              upBtn = document.querySelector('.up-btn-container'),
           cardsBtn = document.querySelectorAll('.cards-item__status-btn');

    burgerBtn.addEventListener('click',function(){
        this.classList.toggle('active');
        if (burgerBtn.classList.contains('active')) {
            menuList.style.display = 'block';
            headNav.style.left = '0';
        } else {
            headNav.style.left = '';
            setTimeout(function(){
                menuList.removeAttribute('style');
                headNav.removeAttribute('style');
                burgerBtn.removeAttribute('class');
            },300);
        }
    });

    function resize() {
        let w = window.innerWidth;
    
        return function() {
            if( w != window.innerWidth ){
                headNav.style.left =  '';
                setTimeout(function() {
                    burgerBtn.classList.remove('active');
                    menuList.style.display =  '';
                },300)
                w = window.innerWidth;
            
                delete w;
              }
        }
    }
    
    windowRes = resize();
    
    window.addEventListener('resize', function(){
        let w  = window.innerWidth;

        if (w < 769) {
        	upBtn.style.display = "none";
        }
        
        windowRes();
    });
  
    window.addEventListener('scroll', function(){
        let height = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let w 	   =  window.innerWidth;
        if (w > 1024) {
            if ( height >= 200 ) {
                upBtn.style.display = "block";
            }
            if ( height < 200 ) {
                upBtn.style.display = "";
            }
        }

        if (w <= 768) {
            if (height >= 300) {
                header.classList.add('header-fixed');
            }

            if (height == 0) {
                header.classList.remove('header-fixed');
            }
        }
    });
    
    upBtn.addEventListener('click', function() {
        backToTop();
    });


    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -20);
          setTimeout(backToTop, 0);
        }
    }

    cardsBtn.forEach(function(button) {
        button.addEventListener('click', function() {
            button.classList.remove('cards-item__status-btn--free');
            button.classList.add('cards-item__status-btn--booked');
            button.innerHTML = 'Забронировано';
        });
    });
});