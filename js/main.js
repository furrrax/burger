/* HAMBURGER */

const hamburgerLink = document.querySelector('.hamburger__link');
const hamburgerClose = document.querySelector('.hamburger__close');
var hamburgerMenu = document.querySelector('.hamburger');

hamburgerLink.addEventListener('click', function() {
    hamburgerMenu.style.display = "flex";
})
hamburgerClose.addEventListener('click', function() {
    hamburgerMenu.style.display = "none";
})

/* MENU */

const menuAccord = document.querySelector('.menu__accordeon');
const menuItem = document.querySelector('.menu__item');
const menuTrigger = document.querySelector('.menu__item--active');

menuAccord.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    if (target.classList.contains('menuItem')) {
        target.classList.add('menuTrigger');
    }
})

/* menuItem.addEventListener('click', function (event) {
    event.preventDefault();
    const menuTarget = event.target;
    menuTarget.parentNode.classList.add('.menu__item--active');
}) */