import './styles.css';
import './js/main';

import menuElement from './js/menu.json';
import cardTmpl from './templates/card.hbs';

let menu = document.querySelector('.js-menu');

function addMarkupMenu(arr) {
  const markup = arr.map(card => cardTmpl(card)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}
addMarkupMenu(menuElement);

console.log(menuElement);
