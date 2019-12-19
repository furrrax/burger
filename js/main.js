/* HAMBURGER */

const hamburgerLink = document.querySelector('.hamburger__link');
const hamburgerClose = document.querySelector('.hamburger__close');
var hamburgerMenu = document.querySelector('.hamburger');

hamburgerLink.addEventListener('click', function() {
    hamburgerMenu.style.display = "flex";
});
hamburgerClose.addEventListener('click', function() {
    hamburgerMenu.style.display = "none";
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
    });
}

menuAcc.addEventListener ('click', function (event) {
    event.preventDefault();
    let target = event.target;
    if (! (target.closest ('.menu__accordeon'))) {
        for (let i = 0; i < accItem.length; i++) {
            accItem[i].classList.remove ('menu__item--active');
        }
    }
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

/* SLIDER */

/* $(function () {

    $('.slider__next-btn').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider__container'),
            items = container.find('.slider__content'),
            activeSlide = items.filter('.slider__active'),
            reqItem = activeSlide.next(),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;

        activeSlide.animate({
            'transform' : 'translateX(' + -reqIndex*100 + '%)'
        }, duration);

    });
}); */

$(document).ready(function() {

    $('.slider__next').on('click', function(e) {
        e.preventDefault();
    
        let active = $('.slider__active');
		let allSlides = $('.slider__content');
		console.log(allSlides);
		const computed = window.getComputedStyle(allSlides);
		console.log(computed);
		let currentSlide = parseInt(computed.allSlides);
		console.log(currentSlide);
		
    
        allSlides.css({
            'transform' : 'translateX(' + currentSlide + '-' + 100% + '%)'
    
        });
    });
});
