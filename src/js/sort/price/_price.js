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
    const priceIncrease = document.querySelector('.js-sort-price-increase'),
        priceDecrease = document.querySelector('.js-sort-price-decrease');
    priceIncrease.onclick = function () {
        this.classList.add('sort-list__item--active');
        priceDecrease.classList.remove('sort-list__item--active');
        sortListIncrease('data-price');
    }
}

function priceDecreaseClick() {
    const priceDecrease = document.querySelector('.js-sort-price-decrease'),
        priceIncrease = document.querySelector('.js-sort-price-increase');
    priceDecrease.onclick = function () {
        this.classList.add('sort-list__item--active');
        priceIncrease.classList.remove('sort-list__item--active');
        sortListDecrease('data-price');
    }
}