;
(function() {
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
})()