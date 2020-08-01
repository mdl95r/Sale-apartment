burgerBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        menuList.style.display = 'block';
        headNav.style.left = '0';
    } else {
        headNav.style.left = '';
        setTimeout(function () {
            menuList.removeAttribute('style');
            headNav.removeAttribute('style');
            burgerBtn.removeAttribute('class');
        }, 300);
    }
});

burgerBtn.onblur = function () {
    headNav.style.left = '';
    setTimeout(function () {
        menuList.removeAttribute('style');
        headNav.removeAttribute('style');
        burgerBtn.removeAttribute('class');
    }, 100);
}

window.addEventListener('resize', function () {
    let w = window.innerWidth;

    if (w < 769) {
        headNav.style.left = '';
        setTimeout(function () {
            burgerBtn.classList.remove('active');
            menuList.style.display = '';
        }, 300);
    }
});