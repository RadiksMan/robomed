function mailSlider(){
    $('.slider_row').slick({
        infinite: true,
        dots: false,
        adaptiveHeight: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear',
        arrows:false
    });
}
function googleMap(mapWrap){
    function initialize() {
        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 16,
            center: myLatlng,
            disableDefaultUI: false, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var image = 'images/marker.png';   // иконка картинкой

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP, // анимация при загрузке карты
            icon: image //  иконка картинкой
        });

        map.set('styles', [
            {
              stylers: [
                { hue: "#ff0000" },
                { saturation: -100 }
              ]
            },{
              featureType: "road",
              elementType: "geometry",
              stylers: [
               { saturation: 0 },
                { invert_lightness: false }
              ]
            },{
              featureType: "road",
              elementType: "labels",
              stylers: [
                { visibility: "off" }
              ]
            }
        ]);

    }
    initialize();
}

function supportAcordion(){
  $('.support-acordion-item:not(.active)').click(function() {
    $('.support-acordion-item').removeClass('active');
    $('.support-acordion-item .support-acordion-item-text').stop().slideUp(300);
    $(this).addClass('active');
    $(this).find('.support-acordion-item-text').stop().slideDown(300);
  });
}
$(document).ready(function() {
  supportAcordion();
    mailSlider();
    if($('#google-map').length){
      googleMap('google-map');
    }
});