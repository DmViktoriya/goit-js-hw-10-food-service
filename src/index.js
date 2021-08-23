import { refs } from './js/refs.js';
import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';
import { getTheme } from './js/themeSwitch';
import { switchTheme } from './js/themeSwitch';

const markup = menuTemplate(menu);

refs.menuRef.insertAdjacentHTML('beforeend', markup);

getTheme();

refs.switchRef.addEventListener('change', switchTheme);
