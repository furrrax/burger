;
(function() {
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
})()