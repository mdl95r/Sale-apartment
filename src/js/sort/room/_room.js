sortRoomBtn.addEventListener('click', function () {
    hideRoomList();
    this.classList.toggle('sort-btn--active');
    if (this.classList.contains('sort-btn--active')) {
        sortRoomList.classList.add('sort-list--active');
        sortPriceList.classList.remove('sort-list--active');
        sortPriceBtn.classList.remove('sort-btn--active');
        sortRoomList.style.left = '98px';
        roomIncreaseClick();
        roomDecreaseClick();
    } else {
        sortRoomList.classList.remove('sort-list--active');
        sortRoomList.removeAttribute('style');
    }
});

function hideRoomList() {
    document.onclick = function (e) {
        const target = e.target;
        if (!target.classList.contains('sort-room__btn')) {
            sortRoomList.classList.remove('sort-list--active');
            sortRoomList.removeAttribute('style');
            sortRoomBtn.classList.remove('sort-btn--active');
        }
    }
}

function roomIncreaseClick() {
    const roomIncrease = document.querySelector('.sort-room__item--increase'),
        roomDecrease = document.querySelector('.sort-room__item--decrease');
    roomIncrease.onclick = function () {
        this.classList.add('active');
        roomDecrease.classList.remove('active');
        sortListIncrease('data-room');
    }
}

function roomDecreaseClick() {
    const roomDecrease = document.querySelector('.sort-room__item--decrease'),
        roomIncrease = document.querySelector('.sort-room__item--increase');
    roomDecrease.onclick = function () {
        this.classList.add('active');
        roomIncrease.classList.remove('active');
        sortListDecrease('data-room');
    }
}