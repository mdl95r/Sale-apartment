window.onload = getAppartsCount('GET', 'js/card.json');

function getAppartsCount(method, url) {
  let cardsCountFirst = cardsItems.length;
  let cardsCountLast;

  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.onload = function () {
    if (this.status != 200) {
      alert(this.status + ': ' + this.statusText);
    } else {
      data = JSON.parse(this.responseText);
      cardsCountLast = data.length;
      cardsCountFinal = cardsCountFirst + cardsCountLast;
      appartsCount.innerHTML = `Найдено ${cardsCountFinal} ${declination(cardsCountFinal, ['квартира', 'квартиры', 'квартир'])}`;
      ElementsInArray = getElementsInArray(data);
    }
  };
  xhr.send();
}

// функция для добавления окончания зависимости от кол-ва чего-либо (в данном случае квартир)
function declination(n, appartsWords) {
  n = Math.abs(n) % 100;
  let n1 = n % 10;

  if (n > 10 && n < 20) return appartsWords[2];

  if (n1 > 1 && n1 < 5) return appartsWords[1];

  if (n1 == 1) return appartsWords[0];

  return appartsWords[2];
}

document.addEventListener('click', function (e) {
  const target = e.target;
  if (target.classList.contains('cards-item__status-btn')) {
    const currentItem = target.closest('.cards-item');
    const nameAppart = currentItem.querySelector('.cards-item__title').innerText;
    const priceAppart = currentItem.querySelector('.cards-item__price').innerText;
    const cardId = currentItem.dataset.id;

    cardPopupShow();
    getDataInCard(nameAppart, priceAppart, cardId);
    // target.classList.remove('cards-item__status-btn--free');
    // target.classList.add('cards-item__status-btn--booked');
    // target.innerHTML = 'Забронировано';
  }
});

cardsList.addEventListener('click', function (e) {
  const target = e.target;
  if (target && target.classList.contains('cards-item__favorites')) {
    target.classList.toggle('cards-item__favorites--fav');
  }

  if (target && target.classList.contains('cards-item__favorites--fav')) {
    target.setAttribute('data-fav', true);
  } else {
    target.removeAttribute('data-fav', true);
  }
});

function getElementsInArray(arr) {
  let STEP = 18;
  let _offset = 0;
  result = function () {
    let offset = _offset++ * STEP;
    return arr.slice(offset, offset + STEP);
  };
  return result;
}

cardMore.addEventListener('click', function (e) {
  pageScroll = document.documentElement.scrollTop;
  e.preventDefault();
  const cardsItems = document.querySelectorAll('.cards-item');
  const cardsReady = ElementsInArray();

  if (cardsItems.length == cardsCountFinal) {
    cardMore.remove();
    appartsEnd.classList.add('main-content__title-bottom_show');
  }

  showCards(cardsReady);
  saveCurrentScroll(pageScroll);
});

function showCards(data) {
  data.forEach(function (item) {
    const li = cardsList.appendChild(document.createElement('li'));
    li.className = 'cards-item';
    setAttributes(li, {
      "data-price": `${item.dataPrice}`,
      "data-room": `${item.dataRoom}`,
      "data-id": `${item.dataId}`
    });
    li.innerHTML =
      `
          <article class="cards-item__wrapper">
            <div class="cards-item__header">
              <button class="cards-item__favorites"></button>
              <div class="cards-item__img-wrap">
                <picture>
                  <source srcset="${item.imageWebp}" type="image/webp">
                  <img class="cards-item__img" src="${item.image}" alt="${item.imageAlt}">
                </picture>
              </div>
            </div>
            <div class="cards-item__body">
              <h3 class="cards-item__title">${item.title}</h3>
              <div class="cards-item__specification">
                <span class="cards-item__apartment-decoration">${item.decor}</span>
                <div class="cards-item__measure-wrap">
                  <span class="cards-item__measure">${item.measure}</span>
                  <span class="cards-item__measure-title">площадь</span>
                </div>
                <div class="cards-item__floor-wrap">
                  <span class="cards-item__floor">${item.floor}</span>
                  <span class="cards-item__floor-title">этаж</span>
                </div>
              </div>
              <h4 class="cards-item__price">${item.price}</h4>
            </div>
          </article>
          <button class="cards-item__status-btn cards-item__status-btn--free">Свободно</button>
        `

    if (priceIncrease.classList.contains('sort-list__item--active')) {
      sortListIncrease('data-price');
    }

    if (priceDecrease.classList.contains('sort-list__item--active')) {
      sortListDecrease('data-price');
    }

    if (roomIncrease.classList.contains('sort-list__item--active')) {
      sortListIncrease('data-room');
    }

    if (roomDecrease.classList.contains('sort-list__item--active')) {
      sortListDecrease('data-room');
    }
  });
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}