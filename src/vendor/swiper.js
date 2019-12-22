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
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
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
