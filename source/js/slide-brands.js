import Swiper from './swiper/swiper-bundle.min';

const brands = document.querySelector('.brands');
const brandsWrapper = brands.querySelector('.brands__wrapper-swiper');

const initBrandsSwiper = new Swiper(brandsWrapper, {
  pagination: {
    el: '.brands__pagination',
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
  spaceBetween: 20,
});

const slideBrands = () => {
  brands.classList.remove('brands--nojs');
  initBrandsSwiper.init();
};

export {slideBrands};
