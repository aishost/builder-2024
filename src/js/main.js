import {iosVhFix} from './utils/ios-vh-fix.js';
import {initModals} from './modules/modals/init-modals.js';
import {test} from "./modules/test/test.js";

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

    // Utils
    // ---------------------------------
    iosVhFix();

    // Modules
    // ---------------------------------
    test()

    // в load следует добавить скрипты, не участвующие в работе первого экрана
    window.addEventListener('load', () => {
        initModals();
    });
});

// ---------------------------------


// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
