/* HAMBURGER */

const hamburgerLink = document.querySelector('.hamburger__link');
const hamburgerClose = document.querySelector('.hamburger__close');
var hamburgerMenu = document.querySelector('.hamburger');

hamburgerLink.addEventListener('click', function() {
    hamburgerMenu.style.display = "flex";
    document.body.style.overflow = 'hidden';
});
hamburgerClose.addEventListener('click', function() {
    hamburgerMenu.style.display = "none";
    document.body.style.overflow = 'visible';
});

/* SLIDER DROPDOWN */

const dropdownLink = document.querySelector('.slider__pic-up');
const sliderDropdown = document.querySelector('.slider__dropdown');

dropdownLink.addEventListener('click', function(e) {
    e.preventDefault();
});

dropdownLink.addEventListener('mouseover', function(e) {
    sliderDropdown.style.left = "100%";
    sliderDropdown.style.opacity = "1";
    dropdownLink.style.backgroundColor = "#e35028";
});

dropdownLink.addEventListener('mouseout', function(e) {
    sliderDropdown.style.left = "9999px";
    sliderDropdown.style.opacity = "0";
    dropdownLink.style.backgroundColor = "#f08c33";
});

/* MENU ACCORD */

$(document).ready(function () {

    let menuClose = $('.menu__close');
    let menuItem = $('.menu__item');
    let menu = $('.menu');
    let menuTarget = $('.menu__pic');

    menuTarget.on('click', function (e) {
        e.preventDefault();
        $(this).closest(menuItem).toggleClass('menu__item--active');
        menuTarget.not(this).closest(menuItem).removeClass('menu__item--active');
    });

    menuClose.on('click', function() {
        $(this).closest(menuItem).removeClass('menu__item--active');    
    });

    menu.on('click', function (event) {
        event.preventDefault();
        let target = event.target;
        if (! (target.closest ('.menu__accordeon'))) {
            for (let i = 0; i < menuItem.length; i++) {
                menuItem[i].classList.remove ('menu__item--active');
            }
        }
    });

});

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
    });
}

teamSect.addEventListener ('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (! (target.closest ('.team__accordeon'))) {
        for (let i = 0; i < teamItem.length; i++) {
            teamItem[i].classList.remove ('team__item--active');
        }
    }
});

/* ОТПРАВКА ФОРМЫ */

const delPhone = document.querySelector('.delivery__phone');

delPhone.addEventListener('keydown', function(event) {
    let isDigit = false;
    let isDash = false;
    let isControl = false;
    let isBack = false;

    if (event.key >= 0 || event.key <= 9) {
        isDigit = true;
    } 
    if (event.key == '-') {
        isDash = true;
    }
    if (event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        isControl = true;
    }
    if (event.key == 'Backspace') {
        isBack = true;
    }

    if (!isDigit && !isDash && !isControl && !isBack) {
        event.preventDefault();
    }
});

const delForm = document.querySelector('.delivery__content'),
    sendBtn = document.querySelector('.delivery__button');

sendBtn.addEventListener('click', event => {
    event.preventDefault();

        if (validateForm(delForm)) {

            const formData = new FormData();
            const modalMessage = document.querySelector('.modal');
            const modalBtn = document.querySelector('.modal__button');
            const modalText = document.querySelector('.modal__text');

            formData.append('name', delForm.elements.name.value);
            formData.append('phone', delForm.elements.phone.value);
            formData.append('comment', delForm.elements.comment.value);
            formData.append('to', 'mail@mail.com');

            modalBtn.addEventListener('click', function() {
                modalMessage.style.display = "none";
            });

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
//            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            xhr.send(formData);
            xhr.addEventListener('load', () => {
                if(xhr.status) {
                    modalMessage.style.display = "flex";
                    modalText.textContent = 'Сообщение отправлено';
                } else {
                    modalMessage.style.display = "flex";
                    modalText.textContent = 'Произошла ошибка';
                }
            });
        }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.street)) {
        valid = false;
    }
    if (!validateField(form.elements.house)) {
        valid = false;
    }
    if (!validateField(form.elements.corp)) {
        valid = false;
    }
    if (!validateField(form.elements.appart)) {
        valid = false;
    }
    if (!validateField(form.elements.floor)) {
        valid = false;
    }
    if (!validateField(form.elements.comment)) {
        valid = false;
    }

    return valid;
}

function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}

/* REVIEWS POPUP */

const revBtn = $('.reviews__button');
const popClose = $('.popup__close');
const popup = $('.popup');

$(document).ready(()  => {

    popClose.on('click', function() {
        popup.animate({opacity: "0"}, 500);

        setTimeout(function(){
            popup.css('display', 'none');
        },500);
        
        
    });

    revBtn.first().on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').first().text(); 
        let revDesc = $('.reviews__desc').first().text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.last().on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').last().text(); 
        let revDesc = $('.reviews__desc').last().text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(1).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(1).text(); 
        let revDesc = $('.reviews__desc').eq(1).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(2).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(2).text(); 
        let revDesc = $('.reviews__desc').eq(2).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(3).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(3).text(); 
        let revDesc = $('.reviews__desc').eq(3).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(4).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(4).text(); 
        let revDesc = $('.reviews__desc').eq(4).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(5).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(5).text(); 
        let revDesc = $('.reviews__desc').eq(5).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(6).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        let revTitle = $('.reviews__title').eq(6).text(); 
        let revDesc = $('.reviews__desc').eq(6).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

});

/* SLIDER */

const prev = document.querySelector ('.slider__prev');
const next = document.querySelector ('.slider__next');
const sliderList = document.querySelector ('.slider__list');
const sliderContent = document.querySelectorAll ('.slider__content');

sliderList.style.width = sliderContent.length*100 + '%';

const step = 100;
const minRight = 0;
const maxRight = step * (sliderContent.length - 1);
let currentRight = 0;

sliderList.style.right = currentRight;

prev.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        sliderList.style.right = currentRight + '%';
    } else {
        currentRight = maxRight;
        sliderList.style.right = currentRight + '%';
    }
});

next.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        sliderList.style.right = currentRight + '%';
    } else {
        currentRight = minRight;
        sliderList.style.right = currentRight + '%';
    }
});