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

$(document).ready(function() {
    mailSlider();
});