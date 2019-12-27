;
(function() {
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
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').last().text(); 
            let revDesc = $('.reviews__desc').last().text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(1).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(1).text(); 
            let revDesc = $('.reviews__desc').eq(1).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(2).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(2).text(); 
            let revDesc = $('.reviews__desc').eq(2).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(3).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(3).text(); 
            let revDesc = $('.reviews__desc').eq(3).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(4).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(4).text(); 
            let revDesc = $('.reviews__desc').eq(4).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(5).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(5).text(); 
            let revDesc = $('.reviews__desc').eq(5).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    
        revBtn.eq(6).on('click', function(e) {
            e.preventDefault();
            popup.css('display', 'flex');
            popup.animate({opacity: ".92"}, 500);
            $("body").css("overflow","hidden");
    
            let revTitle = $('.reviews__title').eq(6).text(); 
            let revDesc = $('.reviews__desc').eq(6).text();
    
            $('.popup__title').text(revTitle);
            $('.popup__desc').text(revDesc);
        });
    });
})()