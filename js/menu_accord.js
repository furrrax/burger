;
(function() {
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
})()