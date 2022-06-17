// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import './event.js';
import './form.js';


let page = document.querySelector('.page');
let location = window.location.pathname
let locationClass = location.slice(1,-5);
page.classList.add(locationClass)