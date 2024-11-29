import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

function swiperJs() {
  const swiper = new Swiper('.juri .swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.juri__next-button',
      prevEl: '.juri__prev-button',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1160: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
}

export { swiperJs };
