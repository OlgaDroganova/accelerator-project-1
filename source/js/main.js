// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
import { toggleTabs } from './toggle-tabs.js';
import { swiperJs } from './juri-slider.js';
import { toggleAccordion } from './accordion.js';


document.addEventListener('DOMContentLoaded', () => {
  toggleTabs();
  swiperJs();
  toggleAccordion();
});
