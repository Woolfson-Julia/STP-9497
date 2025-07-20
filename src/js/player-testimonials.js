import Swiper from 'swiper';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

const updateNavState = swiper => {
  const prevBtn = document.querySelector('[data-nav="player-prev"]');
  const nextBtn = document.querySelector('[data-nav="player-next"]');

  prevBtn.classList.toggle('is-disabled', swiper.isBeginning);
  nextBtn.classList.toggle('is-disabled', swiper.isEnd);
};


const swiperProjects = new Swiper('[data-swiper="player"]', {
  loop: false,
  slidesPerView: 1,
  modules: [Navigation, Mousewheel, Keyboard],
  navigation: {
    nextEl: '[data-nav="player-next"]',
    prevEl: '[data-nav="player-prev"]',
  },
  keyboard: { enabled: true, onlyInViewport: false, pageUpDown: true },
  mousewheel: true,
  roundLengths: true,
  on: {
    init: updateNavState,
    slideChange: updateNavState,
  },
  breakpoints: {
    1200: { slidesPerView: 3, spaceBetween: 24 },
  },
});
