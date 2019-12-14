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

/* SLIDER DROPDOWN */

const dropdownLink = document.querySelector('.slider__pic-up');
const sliderDropdown = document.querySelector('.slider__dropdown');

dropdownLink.addEventListener('click', function(e) {
    e.preventDefault();
})

dropdownLink.addEventListener('mouseover', function(e) {
    sliderDropdown.style.display = "flex";
    dropdownLink.style.backgroundColor = "#e35028";
})

dropdownLink.addEventListener('mouseout', function(e) {
    sliderDropdown.style.display = "none";
    dropdownLink.style.backgroundColor = "#f08c33";
})

/* MENU */

const menuAccord = document.querySelector('.menu__accordeon');
const menuItem = document.querySelector('.menu__item');
const menuTrigger = document.querySelector('.menu__item--active');
const menuPic = document.querySelector('.menu__pic');

/* menuAccord.addEventListener('click', function(event) {
    event.preventDefault();
    const menuTarget = event.target;
    if (menuTarget.classList.contains('.menu__item')) {
        menuTarget.parentNode.classList.add('.menu__item--active');
    }
}) */

menuItem.addEventListener('click', function (event) {
    event.preventDefault();
    const menuTarget = event.target;
    menuTarget.parentNode.classList.add('.menu__item--active');
})