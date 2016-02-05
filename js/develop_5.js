

function gopa(){

        $('.qwe-width').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          centerMode: false,
          variableWidth: true,
          nextArrow:'<div type="button" class="slick-next"></div>',
          prevArrow:'<div type="button" class="slick-prev"></div>'
        });

}
function gopa2(){

        $('.slider-viktor-pots').slick({
          dots: true,
          nextArrow:'<div type="button" class="slick-next"></div>',
          prevArrow:'<div type="button" class="slick-prev"></div>'
         /* infinite: true,
          speed: 300,
          slidesToShow: 4,
          centerMode: false,
          variableWidth: true*/
        });

}

$(window).load(function() {
    gopa();
    gopa2();
});