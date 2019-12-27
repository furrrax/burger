;
(function() {
    //HAMBURGER 
    
    const hamburgerLink = document.querySelector('.hamburger__link');
    const hamburgerClose = document.querySelector('.hamburger__close');
    var hamburgerMenu = document.querySelector('.hamburger');
    
    hamburgerLink.addEventListener('click', function() {
        hamburgerMenu.style.display = "flex";
        $('.hamburger').addClass('hamburger__active');
    });
    hamburgerClose.addEventListener('click', function() {
        hamburgerMenu.style.display = "none";
        $('.hamburger').removeClass('hamburger__active');
    });
})()