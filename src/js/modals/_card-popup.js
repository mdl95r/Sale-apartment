const closeBtn = document.querySelector('.js-modal-close-btn ');
const modalNameAppart = document.querySelector('.js-modal-name-appart');
const modalpriceAppart = document.querySelector('.js-modal-name-price');
const inputId = document.querySelector('.js-input-id');
const form = document.querySelector('.form');

function cardPopupShow() {
    body.classList.add('body-lock');
    modalBlackout.classList.add('modal-blackout_active');
    modalWindow.classList.add('modal_active');
}

function getDataInCard(title, price, id) {
    modalNameAppart.textContent = title;
    modalpriceAppart.textContent = price;
    inputId.value = id;
}

document.addEventListener('click', function (e) {
    const target = e.target;
    if (target.classList.contains('js-modal-close-btn') || target.classList.contains('js-modal-blackout')) {
        body.classList.remove('body-lock');
        modalBlackout.classList.remove('modal-blackout_active');
        modalWindow.classList.remove('modal_active');
        form.reset();
    }
})