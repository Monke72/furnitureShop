const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");
const cardPrice = document.querySelectorAll(".card__price");

//Клик по кнопкам с подсказками
for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);
}

function showHint(event) {
  //parentNode находит ближайщего родителя  , а уже потом у родителя
  //находим нужный класс
  //stopPropagation останавливает дальнейший поиск по документу выполнив действие
  event.stopPropagation();
  //Hide all hint

  for (let hint of infoHints) {
    hint.classList.add("none");
  }
  //Show current
  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

//Закрываем подсказки при клике по всему документу
document.addEventListener("click", () => {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
});

//Запрещаем всплытие собитя клика при клике на подсказки

infoHints.forEach((hint) => {
  hint.addEventListener("click", (e) => e.stopPropagation());
});

//swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 42,
  freeMode: true,

  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 25,
    },

    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

//tabs
const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-value]");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    //Убираем активные классы у всех кнопок
    tabsBtns.forEach((btn) => {
      btn.classList.remove("tab-controls__btn--active");
    });

    //Добавляем активный класс к текущей кнопке
    this.classList.add("tab-controls__btn--active");

    // Отобразить нужные товары  u Скрыть все товары
    for (let product of tabsProducts) {
      //Проверка на отображеение всех слайдов
      if (this.dataset.tab === "all") {
        product.classList.remove("none"); //Help
      } else {
        if (product.dataset.value === this.dataset.tab) {
          product.classList.remove("none");
        } else {
          cardPrice.forEach((price) => {
            price.classList.remove("none");
          });

          product.classList.add("none");
        }
      }
    }
    //update swiper
    swiper.update();
  });
});

// Mobile Nav
const mobileNavOpenBtn = document.querySelector("#open-mobile-nav-btn");
const mobileNavCloseBtn = document.querySelector("#close-mobile-nav-btn");
const mobileNav = document.querySelector("#mobile-nav");

mobileNavOpenBtn.onclick = function () {
  mobileNav.classList.add("mobile-nav-wrapper--open");
};

mobileNavCloseBtn.onclick = function () {
  mobileNav.classList.remove("mobile-nav-wrapper--open");
};
