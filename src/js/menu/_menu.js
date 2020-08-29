burgerBtn.addEventListener('click', function () {
    this.classList.toggle('burger-btn--active');
    if (burgerBtn.classList.contains('burger-btn--active')) {
        menuList.style.display = 'block';
        headNav.style.left = '0';
    } else {
        headNav.style.left = '';
        setTimeout(function () {
            menuList.removeAttribute('style');
            headNav.removeAttribute('style');
        }, 300);
    }
});

burgerBtn.onblur = function () {
    headNav.style.left = '';
    setTimeout(function () {
        menuList.removeAttribute('style');
        headNav.removeAttribute('style');
    }, 100);
}

window.addEventListener('resize', function () {
    let w = window.innerWidth;

    if (w < 769) {
        headNav.style.left = '';
        setTimeout(function () {
            burgerBtn.classList.remove('burger-btn--active');
            menuList.style.display = '';
        }, 300);
    }
});