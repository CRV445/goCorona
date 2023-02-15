"use strict";
window.addEventListener('DOMContentLoaded', function() {
    const navMenu = document.querySelector('#menu'),
        navLink = document.querySelectorAll('.menu__link'),
        toggleBtn = document.querySelector('.toggle-button'),
        closeBtn = document.querySelector('.close-button');

    // OPEN MENU
    function openMenu(){
        navMenu.classList.add('_active');
        document.body.style.overflow = "hidden";
    }
    // CLOSE MENU
    function closeMenu(){
        navMenu.classList.remove('_active');
        document.body.style.overflow = "";
    }

    
    toggleBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    //при нажатии на ссылку меню скрывается
    function activeMenu() {
        navMenu.classList.remove('_active');
        document.body.style.overflow = "";
    }

    navLink.forEach(link => {
        link.addEventListener('click', activeMenu);
    });
});