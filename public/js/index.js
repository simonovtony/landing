"use strict";
window.addEventListener('load', (event) => {
    const menuOpen = document.querySelector('#menu-button-open');
    const menuClose = document.querySelector('#menu-button-close');
    const menu = document.querySelector('.navigation__menu');
    menuOpen.addEventListener('click', (_event) => {
        menuOpen.style.display = 'none';
        menuClose.style.display = 'flex';
        menu.style.display = 'flex';
    });
    menuClose.addEventListener('click', (_event) => {
        menuOpen.style.display = 'flex';
        menuClose.style.display = 'none';
        menu.style.display = 'none';
    });
});
