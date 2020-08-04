sortPriceBtn.addEventListener('click', function () {
    hidePriceList();
    this.classList.toggle('sort-btn--active');
    if (this.classList.contains('sort-btn--active')) {
        sortPriceList.classList.add('sort-list--active');
        sortRoomList.classList.remove('sort-list--active');
        sortRoomBtn.classList.remove('sort-btn--active');
        sortRoomList.removeAttribute('style');
        priceIncreaseClick();
        priceDecreaseClick();
    } else {
        sortPriceList.classList.remove('sort-list--active');
    }
});

function hidePriceList() {
    document.onclick = function (e) {
        const target = e.target;
        if (!target.classList.contains('sort-price__btn')) {
            sortPriceList.classList.remove('sort-list--active');
            sortPriceBtn.classList.remove('sort-btn--active');
        }
    }
}

function priceIncreaseClick() {
    const priceIncrease = document.querySelector('.sort-price__item--increase'),
        priceDecrease = document.querySelector('.sort-price__item--decrease');
    priceIncrease.onclick = function () {
        this.classList.add('active');
        priceDecrease.classList.remove('active');
        sortListIncrease('data-price');
    }
}

function priceDecreaseClick() {
    const priceDecrease = document.querySelector('.sort-price__item--decrease'),
        priceIncrease = document.querySelector('.sort-price__item--increase');
    priceDecrease.onclick = function () {
        this.classList.add('active');
        priceIncrease.classList.remove('active');
        sortListDecrease('data-price');
    }
}