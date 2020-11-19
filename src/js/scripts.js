"use strict";
document.addEventListener('DOMContentLoaded', function () {
  const burgerBtn = document.querySelector('.burger-btn'),
    menuList = document.querySelector('.header-nav__list'),
    header = document.querySelector('.header'),
    headNav = document.querySelector('.header-nav'),
    upBtn = document.querySelector('.up-btn-container'),
    cardsContainer = document.querySelector('.cards-container'),
    cardMoreWrap = document.querySelector('.card-more-wrap'),
    cardMore = document.querySelector('.js-card-more-btn'),
    sortPriceBtn = document.querySelector('.js-sort-price-btn'),
    sortPriceList = document.querySelector('.js-sort-price__list'),
    sortRoomBtn = document.querySelector('.js-sort-room-btn'),
    sortRoomList = document.querySelector('.js-sort-room__list'),
    priceIncrease = document.querySelector('.js-sort-price-increase'),
    priceDecrease = document.querySelector('.js-sort-price-decrease'),
    roomIncrease = document.querySelector('.js-sort-room-increase'),
    roomDecrease = document.querySelector('.js-sort-room-decrease'),
    cardsList = document.querySelector('.cards-list'),
    cardsItems = document.querySelectorAll('.cards-item'),
    appartsCount = document.querySelector('.js-main-content__title'),
    body = document.querySelector('body'),
    modalBlackout = document.querySelector('.js-modal-blackout'),
    modalWindow = document.querySelector('.js-modal'),
    appartsEnd = document.querySelector('.js-main-content__title-bottom');
  let cardsCountFinal;
  let data;
  let result;
  let ElementsInArray;
  let pageScroll;



  // =include card/_card.js
  // =include card/_imask.js
  // =include menu/_menu.js
  // =include sort/_sort.js
  // =include sort/price/_price.js
  // =include sort/room/_room.js
  // =include scroll/_scroll.js
  // =include modals/_card-popup.js
  // =include up-btn/_up-btn.js
});