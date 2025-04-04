import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

function swiperJs() {
  const swiper = new Swiper('.juri .swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
