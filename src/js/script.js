const openMenuButton = document.querySelector('.header__menu-button--open');
const closeMenuButton = document.querySelector('.header__menu-button--close');
const menuList = document.querySelector('.header__menu-list');
const menuContainer = document.querySelector('.menu__container');

console.log(openMenuButton);

openMenuButton.addEventListener('click', () => {
    menuList.classList.add('header__menu-list--opened');
    menuList.classList.remove('header__menu-list--closed');
    menuContainer.classList.add('menu__container--opened');
});

closeMenuButton.addEventListener('click', () => {
    menuList.classList.remove('header__menu-list--opened');
    menuList.classList.add('header__menu-list--closed');
    menuContainer.classList.remove('menu__container--opened');
});