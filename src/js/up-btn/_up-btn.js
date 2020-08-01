upBtn.addEventListener('click', function () {
    backToTop();
});

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -40);
        setTimeout(backToTop, 0);
    }
}