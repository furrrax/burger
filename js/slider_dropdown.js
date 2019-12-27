;
(function() {
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
})()