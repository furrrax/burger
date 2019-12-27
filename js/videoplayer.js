;
(function() {
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
})()