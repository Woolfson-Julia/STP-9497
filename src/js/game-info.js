import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard, Grid } from 'swiper/modules';

const updateNavState = swiper => {
  const prevBtn = document.querySelector('[data-nav="info-prev"]');
  const nextBtn = document.querySelector('[data-nav="info-next"]');

  prevBtn.classList.toggle('is-disabled', swiper.isBeginning);
  nextBtn.classList.toggle('is-disabled', swiper.isEnd);
};

const swiperProjects = new Swiper('[data-swiper="info"]', {
  loop: false,
  slidesPerView: 1,
  modules: [Navigation, Mousewheel, Keyboard, Grid],
  navigation: {
    nextEl: '[data-nav="info-next"]',
    prevEl: '[data-nav="info-prev"]',
  },
  keyboard: { enabled: true, onlyInViewport: false, pageUpDown: true },
  mousewheel: true,
  roundLengths: true,
  on: {
    init: updateNavState,
    slideChange: updateNavState,
    resize: updateNavState,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
      spaceBetween: 8,
      watchOverflow: false,
    },
  },
});
