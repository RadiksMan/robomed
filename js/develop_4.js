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
  $('.support-acordion-item-button').click(function() {
    //$('.support-acordion-item').removeClass('active');
    //$('.support-acordion-item-button').removeClass('active');

    //$('.support-acordion-item .support-acordion-item-text').stop().slideUp(300);
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    $(this).parent().find('.support-acordion-item-text').stop().slideToggle(300);


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

function introFancybox(){
  $('.fancybox-intro').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    autoResize:false,
    wrapCSS:'fancybox-intro-class hidden-fix',
    'closeBtn' : false,
    fitToView:false,
    padding:'0',
    afterLoad: function() {
      //introSlick();
    },
    onUpdate: function(){
      ourWorksUnslick();
      setTimeout(function(){
        introSlick();
      },300)

    }
  });
  function introSlick(){
    $('.intro_pop-wrap').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fitToView:false,
      autoSize:false,
      dots: true,
      arrows: true,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      init:function(){
        alert('123');
        $('.hidden-fix').removeClass('hidden-fix');
      }
    });
    $('.intro_pop-wrap').on('init', function(event, slick){
      $('.hidden-fix').removeClass('hidden-fix');
    })
  }
  introSlick();
  function ourWorksUnslick(){
    $('.intro_pop-wrap').slick('unslick');
  }
// $(".image-show").fancybox({
//   openEffect  : 'elastic',
//   closeEffect : 'elastic',
//   //autoResize:true,
//   padding:'0',
//   helpers: {
//       buttons: {},
//       thumbs: {
//           width: 8,
//           height: 8,
//           source: function () {
//               return "";
//           }
//       }
//   }
// });


//   $('.open-album').click(function(e) {
//       var el, id = $(this).data('open-id');
//       if(id){
//           el = $('.image-show[rel=' + id + ']:eq(0)');
//           e.preventDefault();
//           el.click();
//       }
//   });
}
$(document).ready(function() {
  introFancybox();
  newsAjax();
  supportAcordion();
    mailSlider();
    if($('#google-map').length){
      googleMap('google-map');
    }
});
$(window).load(function() {

});