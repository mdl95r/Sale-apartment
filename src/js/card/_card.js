cardsList.addEventListener('click', function (e) {
  const target = e.target;
  if (target && target.classList.contains('cards-item__status-btn')) {
    target.classList.remove('cards-item__status-btn--free');
    target.classList.add('cards-item__status-btn--booked');
    target.innerHTML = 'Забронировано';
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

function loadCards(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url, true);

  xhr.onload = function () {
    if (this.status != 200) {
      alert(this.status + ': ' + this.statusText);
    } else {
      const data = JSON.parse(this.responseText);
      showCards(data);
    }
  };

  xhr.send();
}

cardMore.addEventListener('click', function (e) {
  e.preventDefault();
  loadCards('GET', 'js/card.json');
  cardsContainer.removeChild(cardMoreWrap);
});

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function showCards(data) {
  data.forEach(function (card) {
    const li = cardsList.appendChild(document.createElement('li'));
    li.className = 'cards-item';
    setAttributes(li, { "data-price": `${card.dataPrice}`, "data-room": `${card.dataRoom}` });
    li.innerHTML =
      `
          <article class="cards-item__wrapper">
            <div class="cards-item__header">
              <button class="cards-item__favorites"></button>
              <div class="cards-item__img-wrap">
                <picture>
                  <source srcset="${card.imageWebp}" type="image/webp">
                  <img class="cards-item__img" src="${card.image}" alt="${card.imageAlt}">
                </picture>
              </div>
            </div>
            <div class="cards-item__body">
              <h3 class="cards-item__title">${card.title}</h3>
              <div class="cards-item__specification">
                <span class="cards-item__apartment-decoration">${card.decor}</span>
                <div class="cards-item__measure-wrap">
                  <span class="cards-item__measure">${card.measure}</span>
                  <span class="cards-item__measure-title">площадь</span>
                </div>
                <div class="cards-item__floor-wrap">
                  <span class="cards-item__floor">${card.floor}</span>
                  <span class="cards-item__floor-title">этаж</span>
                </div>
              </div>
              <h4 class="cards-item__price">${card.price}</h4>
            </div>
          </article>
          <button class="cards-item__status-btn cards-item__status-btn--free">Свободно</button>
        `

    if (priceIncrease.classList.contains('active')) {
      sortListIncrease('data-price');
    }

    if (priceDecrease.classList.contains('active')) {
      sortListDecrease('data-price');
    }

    if (roomIncrease.classList.contains('active')) {
      sortListIncrease('data-room');
    }

    if (roomDecrease.classList.contains('active')) {
      sortListDecrease('data-room');
    }
  });
}