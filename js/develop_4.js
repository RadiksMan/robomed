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
            disableDefaultUI: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        var image = 'images/marker.png';

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            icon: image
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


function newsAjax(){
  var timer = null;
  $(document).on('click','.download-more',function(){
    var download = $('.download-more').remove();
    if(!$('.download-more').is('.disabled')){
      $.ajax({
        url : 'news-ajax.php',

        success : function(data){
          $('.manynews-super-wrap').append(data);
          var time = 500;
          var itemLength = $('.news-item').length;
          $('.news-item:not(.active .download-more)').each(function() {
              var item = $(this);
              setTimeout(function(){
                  item.addClass('active');
                  if(item.index() == (itemLength-1)){
                      $('.manynews-super-wrap').append(download);
                      $('.download-more').removeClass('disabled');
                  }
              },500);
              time=time+200;
          });
        }

      });
    }
    $(this).addClass('disabled');

  });
}
$(document).ready(function() {
  newsAjax();
  supportAcordion();
    mailSlider();
    if($('#google-map').length){
      googleMap('google-map');
    }
});