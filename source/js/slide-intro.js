import Swiper from './swiper/swiper-bundle.min';

const intro = document.querySelector('.intro');

const initIntroSwiper = new Swiper('.intro', {
  pagination: {
    el: '.intro__pagination',
    clickable: true,
    dynamicBullets: true,
  },

  slidesPerView: 1,
  slidesPerGroup: 1,
  initialSlide: 2,
  grabCursor: true,
  slidesPerColumn: 1,
  simulateTouch: true,
  autoHeight: true,
  watchOverflow: true,
  preloadImages: false,
  loop: true,
});

const slideIntro = () => {
  intro.classList.remove('intro--nojs');
  initIntroSwiper.init();
};

export {slideIntro};
