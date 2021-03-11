import menuElement from '../js/menu.json';
import cardTmpl from '../templates/card.hbs';

const refs = {
  toggle: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

let menu = document.querySelector('.js-menu');

function addMarkupMenu(arr) {
  const markup = arr.map(card => cardTmpl(card)).join('');
  menu.insertAdjacentHTML('beforeend', markup);
}
addMarkupMenu(menuElement);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

refs.toggle.addEventListener('change', changeTheam);

function changeTheam(e) {
  if (e.target.checked) {
    theamDark();
  } else {
    theamLight();
  }
}
function theamDark() {
  refs.body.classList.add(Theme.DARK);
  refs.body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
}
function theamLight() {
  refs.body.classList.add(Theme.LIGHT);
  refs.body.classList.remove(Theme.DARK);
  localStorage.setItem('theme', Theme.LIGHT);
}

const localStorageThem = localStorage.getItem('theme', Theme.LIGHT);
if (localStorageThem === Theme.DARK) {
  refs.toggle.checked = true;
  refs.body.classList.add(Theme.DARK);
} else {
  refs.body.classList.add(Theme.LIGHT);
}
