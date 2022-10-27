const links = document.querySelector('.links');
const linksButton = links.querySelector('.links__button');

const onFooterMenuOpen = () => {
  if (links.classList.contains('links--closed')) {
    links.classList.remove('links--closed');
    links.classList.add('links--opened');

  } else {
    links.classList.remove('links--opened');
    links.classList.add('links--closed');
  }
};

const openFooterMenu = () => {
  if (links) {
    links.classList.remove('links--nojs');

    if (getComputedStyle(linksButton).display !== 'none') {
      linksButton.addEventListener('click', onFooterMenuOpen);
    }
  }
};

export {openFooterMenu};
