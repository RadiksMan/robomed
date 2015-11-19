

function gopa(){

        $('.qwe-width').slick({
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 4,
          centerMode: false,
          variableWidth: true,
          nextArrow:'<button type="button" class="slick-next"></button>',
          prevArrow:'<button type="button" class="slick-prev"></button>'
        });

}
function gopa2(){

        $('.slider-viktor-pots').slick({
          dots: true,
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