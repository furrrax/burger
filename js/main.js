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
    sliderDropdown.style.left = "100%";
    sliderDropdown.style.opacity = "1";
    dropdownLink.style.backgroundColor = "#e35028";
})

dropdownLink.addEventListener('mouseout', function(e) {
    sliderDropdown.style.left = "9999px";
    sliderDropdown.style.opacity = "0";
    dropdownLink.style.backgroundColor = "#f08c33";
})

/* MENU ACCORD */

let accItem = document.getElementsByClassName ('menu__item'),
    menuAcc = document.querySelector ('.menu');
    
for (let i = 0; i < accItem.length; i++) {
    accItem[i].addEventListener ('click', function (e) {
        e.preventDefault();
        if (! (this.classList.contains ('menu__item--active'))) {
            for (let i = 0; i < accItem.length; i++) {
                accItem[i].classList.remove ('menu__item--active');
            }
            this.classList.add ('menu__item--active');
        }
    })
}

menuAcc.addEventListener ('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (! (target.closest ('.menu__accordeon'))) {
        for (let i = 0; i < accItem.length; i++) {
            accItem[i].classList.remove ('menu__item--active');
        }
    }
})

/* TEAM ACCORD */

let teamItem = document.getElementsByClassName ('team__item'),
    teamSect = document.querySelector ('.team');

for (let i = 0; i < teamItem.length; i++) {
    teamItem[i].addEventListener ('click', function (e) {
        e.preventDefault();
        if (! (this.classList.contains ('team__item--active'))) {
            for (let i = 0; i < teamItem.length; i++) {
                teamItem[i].classList.remove ('team__item--active');
            }
            this.classList.add ('team__item--active');
        }
    })
}

teamSect.addEventListener ('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (! (target.closest ('.team__accordeon'))) {
        for (let i = 0; i < teamItem.length; i++) {
            teamItem[i].classList.remove ('team__item--active');
        }
    }
})