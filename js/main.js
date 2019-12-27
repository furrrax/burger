//HAMBURGER 

const hamburgerLink = document.querySelector('.hamburger__link');
const hamburgerClose = document.querySelector('.hamburger__close');
var hamburgerMenu = document.querySelector('.hamburger');
var hambLink = document.querySelector('.hamb');

hamburgerLink.addEventListener('click', function() {
    hamburgerMenu.style.display = "flex";
    $('.hamburger').addClass('hamburger__active');
});
hamburgerClose.addEventListener('click', function() {
    hamburgerMenu.style.display = "none";
    $('.hamburger').removeClass('hamburger__active');
});

$('.hamb').on('click', function() {
    $('.hamburger').css('display', 'none');
    $('.hamburger').removeClass('hamburger__active');
});

//SLIDER DROPDOWN 

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

//MENU ACCORD

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

//TEAM ACCORD

$(document).ready(function () {

    let teamItem = $('.team__item');
    let team = $('.team');
    let teamTarget = $('.team__link');

    teamTarget.on('click', function (e) {
        e.preventDefault();
        $(this).closest(teamItem).toggleClass('team__item--active');
        teamTarget.not(this).closest(teamItem).removeClass('team__item--active');
    });

    team.on('click', function (event) {
        event.preventDefault();
        let target = event.target;
        if (! (target.closest ('.team__accordeon'))) {
            for (let i = 0; i < teamItem.length; i++) {
                teamItem[i].classList.remove ('team__item--active');
            }
        }
    });
});

//ОТПРАВКА ФОРМЫ 

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
                document.body.style.overflow = 'auto';
                $('.modal').removeClass('modal__active');
            });

            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(formData);
            xhr.addEventListener('load', () => {
                if(xhr.status) {
                    modalMessage.style.display = "flex";
                    modalText.textContent = 'Сообщение отправлено';
                    sendBtn.disabled = true;
                    $('.modal').addClass('modal__active');
                } else {
                    modalMessage.style.display = "flex";
                    modalText.textContent = 'Произошла ошибка';
                    $('.modal').addClass('modal__active');

                    setTimeout(function(){
                        sendBtn.disabled = false;
                    },10000);
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

//REVIEWS POPUP

const revBtn = $('.reviews__button');
const popClose = $('.popup__close');
const popup = $('.popup');

$(document).ready(()  => {

    popClose.on('click', function() {
        popup.animate({opacity: "0"}, 500);

        setTimeout(function(){
            popup.css('display', 'none');
        },500);

        $('.popup').removeClass('popup__active');
    });

    revBtn.first().on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').first().text(); 
        let revDesc = $('.reviews__desc').first().text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.last().on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').last().text(); 
        let revDesc = $('.reviews__desc').last().text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(1).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').eq(1).text(); 
        let revDesc = $('.reviews__desc').eq(1).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(2).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');
        
        let revTitle = $('.reviews__title').eq(2).text(); 
        let revDesc = $('.reviews__desc').eq(2).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(3).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').eq(3).text(); 
        let revDesc = $('.reviews__desc').eq(3).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(4).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');
        
        let revTitle = $('.reviews__title').eq(4).text(); 
        let revDesc = $('.reviews__desc').eq(4).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(5).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').eq(5).text(); 
        let revDesc = $('.reviews__desc').eq(5).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

    revBtn.eq(6).on('click', function(e) {
        e.preventDefault();
        popup.css('display', 'flex');
        popup.animate({opacity: ".92"}, 500);

        $('.popup').addClass('popup__active');

        let revTitle = $('.reviews__title').eq(6).text(); 
        let revDesc = $('.reviews__desc').eq(6).text();

        $('.popup__title').text(revTitle);
        $('.popup__desc').text(revDesc);
    });

});

//SLIDER 

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

//OPS

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;

const performTransition = sectionEq => {
    if (inScroll === false) {
        inScroll = true;
        const position = sectionEq * -100;
    
        sections
            .eq(sectionEq).addClass('active').siblings().removeClass('active');
    
        display.css({
            transform: `translateY(${position}%)`
        });

        display.on('transitionend', function () {
            inScroll = false;
            $('.pagination__item').eq(sectionEq).addClass('pagination__item--active').siblings().removeClass('pagination__item--active');
        });
    }
};

const scrollToSection = direction => {

    if ( $('.hamburger').hasClass('hamburger__active') ) return;
    if ( $('.modal').hasClass('modal__active') ) return;
    if ( $('.popup').hasClass('popup__active') ) return;

    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'next' && nextSection.length) {
        performTransition(nextSection.index());
    }

    if (direction === 'prev' && prevSection.length) {
        performTransition(prevSection.index());
    }

};

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;
    
    if (deltaY > 0) {
        scrollToSection('next');
    }

    if (deltaY < 0) {
        scrollToSection('prev');
    }

});

$(window).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    
    if (tagName != 'input' && tagName != 'textarea') {
        switch(e.keyCode) {
            case 38:
                scrollToSection('prev');
            case 40:
                scrollToSection('next');
        }
    }
    return;
});

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    hamburgerMenu.style.display = "none";
    document.body.style.overflow = 'auto';

    performTransition(target);
});

if ($(document).width() <= 460) {
	$('body').swipe({
		swipe: function(
			event,
			direction,
			distance,
			duration,
			fingerCount,
			fingerData
			) {
			const scrollDirections = direction === 'up' ? 'next' : 'prev';
			scrollToSection(scrollDirections);
			}
		});
}

//MAP

ymaps.ready(function () {
    var myMap = new ymaps.Map('mapApi', {
            center: [59.931025, 30.360796],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Здесь вкусные бургеры',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        }),

        myPlacemark2 = new ymaps.Placemark([59.934083, 30.332816], {
            hintContent: 'Приход к нам',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        }),

        myPlacemark3 = new ymaps.Placemark([59.939940, 30.349896], {
            hintContent: 'Мммм, пальчики оближешь!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        }),

        myPlacemark4 = new ymaps.Placemark([59.944290, 30.385172], {
            hintContent: 'У нас вкусно!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        }),

        myPlacemark5 = new ymaps.Placemark([59.921158, 30.373070], {
            hintContent: 'Хочешь сочный бургер?',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        }),

        myPlacemark6 = new ymaps.Placemark([59.919760, 30.339566], {
            hintContent: 'Приходи, мы вкусно накормим!',
        }, {
            iconLayout: 'default#image',
            iconImageHref: '/img/svg/map-marker.svg',
            iconImageSize: [46, 58],
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6);

    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.behaviors.disable('scrollZoom');
});

//VIDEOPLAYER

const video = document.querySelector('.player__video');
const playBigBtn = document.querySelector('.player__btn');
const playMiniBtn = document.querySelector('.player__play');
const durationPointer = document.querySelector('.player__timeline-point');

video.width = 660;
video.height = 370;

$(window).on('load', function() {
    if ($(document).width() > 960) {
        $('.player__video').attr('width', '660');
        $('.player__video').attr('height', '370');
    }
    if ($(document).width() < 960) {
        $('.player__video').attr('width', '720');
        $('.player__video').attr('height', '408');
    }
    if ($(document).width() < 640) {
        $('.player__video').attr('width', '460');
        $('.player__video').attr('height', '255');
    }
});

$(window).resize(function() {
    if ($(document).width() > 960) {
        $('.player__video').attr('width', '660');
        $('.player__video').attr('height', '370');
    }
    if ($(document).width() < 960) {
        $('.player__video').attr('width', '720');
        $('.player__video').attr('height', '408');
    }
    if ($(document).width() < 640) {
        $('.player__video').attr('width', '460');
        $('.player__video').attr('height', '255');
    }
});
    
playBigBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playBigBtn.style.opacity = "0";
    } else {
        video.pause();
        playBigBtn.style.opacity = ".9";
    }
}, false);

playMiniBtn.addEventListener('click', function () {
    if (video.paused) {
        video.play();
        playBigBtn.style.opacity = "0";
    } else {
        video.pause();
        playBigBtn.style.opacity = ".9";
    }
}, false);

video.addEventListener('play', function () {

	if (typeof interval != 'undefined') {
		clearInterval(interval);
	}

	interval = setInterval (() => {

	let vidPoint = (video.currentTime/video.duration)*100;

	durationPointer.style.left = vidPoint + '%';
	}, 500);
});

$('.player__timeline').on('click', e => {
	const bar = $(e.currentTarget);
	const newBtnPosition = e.pageX - bar.offset().left;
	const btnPositionPercent = (newBtnPosition/bar.width()) * 100;
	const newPlayerTimeSec = (video.duration/100) * btnPositionPercent;

	video.currentTime = newPlayerTimeSec;

	durationPointer.style.left = btnPositionPercent + '%';
});
