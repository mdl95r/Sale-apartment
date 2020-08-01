window.addEventListener('scroll', function () {
    let height =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
    let w = window.innerWidth;

    if (height >= 200) {
        upBtn.style.display = 'block';
    }

    if (height < 200) {
        upBtn.style.display = '';
    }

    if (w <= 768) {
        if (height >= 300) {
            header.classList.add('header-fixed');
        }

        if (height == 0) {
            header.classList.remove('header-fixed');
        }
    }

    if (w > 768) {
        if (height >= 2000) {
            header.classList.add('header-fixed');
        }

        if (height == 0) {
            header.classList.remove('header-fixed');
        }
    }
});