import "./style.css";
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 16,
  fadeEffect: {
    crossFade: 'true'
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.offers__button-next',
    prevEl: '.offers__button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
