import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    speed: 700,
    keyboard: true, //Переключение кнопками
    breakpoints: {
      320: {
        slidesPerView: 1, //Количество слайдов на одной странице слайдера
        spaceBetween: 8, //Отступ между карточками (величина: px)
        slidesOffsetBefore: 16, //Расстояние до контейнера с карточками (величина: px)
        slidesOffsetAfter: 16, //Расстояние после контейнера с карточками (величина: px)
      },
      531: {
        slidesPerView: 1,
        spaceBetween: 8,
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
      },
      570: {
        slidesPerView: 2,
        spaceBetween: 8,
        slidesOffsetBefore: 40,
        slidesOffsetAfter: 40,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 8,
        slidesOffsetBefore: 104,
        slidesOffsetAfter: 104,
      },
      950: {
        slidesPerView: 3,
        spaceBetween: 16,
        slidesOffsetBefore: 104,
        slidesOffsetAfter: 104,
      }
    }
  }
);

export { mySwiper }
