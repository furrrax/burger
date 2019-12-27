;
(function() {
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
})()