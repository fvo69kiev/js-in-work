    import tabs from './modules/tabs';
    import modal from './modules/modal';
    import timer from './modules/timer';
    import cards from './modules/cards';
    import calc from './modules/calc';
    import forms from './modules/forms';
    import slider from './modules/slider';
    import menu from './modules/menu';
    import top from './modules/top';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);  // Setting this timer to self-open the modal window after opening this site
    const deadline = new Date(new Date(). getTime() + (48 * 60 * 60 * 1000));  // + 2 days from current date

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', deadline);
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    menu('.header__links a');
    top('#toTop');
});