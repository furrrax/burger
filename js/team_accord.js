;
(function() {
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
})()