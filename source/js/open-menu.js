const page = document.querySelector('.page');
const pageBody = page.querySelector('.page__body');
const pageHeader = pageBody.querySelector('.page__header');
const navMain = pageHeader.querySelector('.nav');
const navToggle = navMain.querySelector('.nav__toggle--menu');
const siteList = navMain.querySelector('.site-list');

const onNavMenuOpen = () => {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
    page.classList.add('page--menu-opened');
    pageBody.classList.add('page__body--menu-opened');
    siteList.classList.add('site-list--hidden');

  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
    page.classList.remove('page--menu-opened');
    pageBody.classList.remove('page__body--menu-opened');
    siteList.classList.remove('site-list--hidden');
  }
};

const openMenu = () => {
  if (document.querySelector('.page__header')) {
    pageHeader.classList.remove('page__header--nojs');
    navMain.classList.remove('nav--nojs');

    if (getComputedStyle(navToggle).display !== 'none') {
      navToggle.addEventListener('click', onNavMenuOpen);
    }
  }
};

export {openMenu};
