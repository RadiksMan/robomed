var scroller=jQuery.browser.webkit ? "body": "html";

/* modernize */
function modernize() {
	// placeholder
	if(!Modernizr.input.placeholder){
		$('[placeholder]').each(function() {
			$(this).watermark($(this).attr('placeholder'));
		});
	}
}


/* input only Number  */
function inputNumber(block) {
	$('input', block).keypress(function(e) {
		if (e.which >= 47 && e.which <= 57 ){}
		else return false;
	});

	$('input', block).keyup(function() {
		$inputNum = $(this);
		if ($inputNum.val == '' || $inputNum.val() == 0) {
			$inputNum.val('');
		}
	});
}


/* u_tabs */
function u_tabs(link, block) {
	$(link).click(function(e) {
		var $currentTab = $(this);
		var tabId = $currentTab.data('utab');

		$(link).removeClass('active');
		$currentTab.addClass('active');

		$(block).hide().removeClass('active');
		$(block+'[data-utab="' + tabId + '"]').show().addClass('active');
		if($(link).is('a')){
			e.preventDefault();
		}
	});
	$(link).eq(0).click();
}

/* scrollUp */
function scrollUp(block,targetBlock) {

	$(block).click(function(e){
		var target = $(targetBlock).offset().top;

		$(scroller).animate({scrollTop:target},800);
		return false;

		e.preventDefault();
	});
}


function initScrollpane(){
	$('.scroll-pane').jScrollPane();
}


function oneHeightItems(){

	function oneHeight(block){
		var height=0;
		block.removeAttr('style');
		block.each(function(){
			if($(this).height()>height){
				height=$(this).height();
			}
		});
		block.css('height', height);
	}

	oneHeight($('.oneHeight'));
}

function validate(form, options){
    var setings = {
        errorFunction:null,
        submitFunction:null,
        highlightFunction:null,
        unhighlightFunction:null
    }
    $.extend(setings, options);

    var $form = $(form);

    if ($form.length && $form.attr('novalidate') === undefined) {
        $form.on('submit', function(e) {
            e.preventDefault();
        });

        $form.validate({
            errorClass : 'errorText',
            focusCleanup : true,
            focusInvalid : false,
            invalidHandler: function(event, validator) {
                if(typeof(setings.errorFunction) === 'function'){
                    setings.errorFunction(form);
                }
            },
            errorPlacement: function(error, element) {
                error.appendTo( element.closest('.form_input'));
            },
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error');
                $(element).closest('.form_row').addClass('error').removeClass('valid');
                if( typeof(setings.highlightFunction) === 'function' ) {
                    setings.highlightFunction(form);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass('error');
                if($(element).closest('.form_row').is('.error')){
                    $(element).closest('.form_row').removeClass('error').addClass('valid');
                }
                if( typeof(setings.unhighlightFunction) === 'function' ) {
                    setings.unhighlightFunction(form);
                }
            },
            submitHandler: function(form) {
                if( typeof(setings.submitFunction) === 'function' ) {
                    setings.submitFunction(form);
                } else {
                    form.submit();
                }
            }
        });

        $('[required]',$form).each(function(){
            $(this).rules( "add", {
                required: true,
                messages: {
                    required: "Вы пропустили"
                }
            });
        });

        if($('[type="email"]',$form).length) {
            $('[type="email"]',$form).rules( "add",
            {
                messages: {
                    email: "Невалидный email"
                 }
            });
        }

        if($('.tel-mask[required]',$form).length){
            $('.tel-mask[required]',$form).rules("add",
            {
                messages:{
                    required:"Введите номер мобильного телефона."
                }
            });
        }
    }
}

function validationCall(form){

  var thisForm = $(form);
  var formSur = thisForm.serialize();

    $.ajax({
        url : thisForm.attr('action'),
        data: formSur,
        method:'POST',
        success : function(data){
            if ( data.trim()!='true') {
                thisForm.trigger("reset");
                popNext();
            }
            else {
               $(this).trigger('reset');
            }

        }
    });

    function popNext(){
        $.fancybox.open("#call_success",{
            padding:0,
            fitToView:false,
            wrapCSS:"call-popup",
            autoSize:true,
            afterClose: function(){
                $('form').trigger("reset");
                clearTimeout(timer);
            }
        });
        var timer = null;

        timer = setTimeout(function(){
            $('form').trigger("reset");
            $.fancybox.close("#call_success");
        },2000);


    }
}

function animationBlock(item){

    $(window).scroll(function(){
        checkForAnimate();
    });

    function checkForAnimate(){
        var bottomCheck = $(window).height()+$(window).scrollTop();
        var windowTop = $(window).scrollTop()+($(window).height()/1.5);
        item.each(function(){
           if(windowTop>$(this).offset().top || bottomCheck > $('body').height()*0.98){

              var itemSect = $(this);
              var point = 0;
              itemSect.find('.animate-it').addClass('animated');

              var timer = setInterval(function(){
                 itemSect.find('.animate-delay').eq(point).addClass('animated');
                 point++;
                 if(itemSect.find('.animate-delay').length == point){
                     clearInterval(timer);
                 }
              },200);


           }
        });
    }
    checkForAnimate();
}

function scrollCircle(){

    // add delays to list items

    $('.big-sircle-list').each(function(){
        var point = 0;
        $(this).find('li').each(function(){
            $(this).css({'transition-delay':point+'ms','-webkit-transition-delay':point+'ms','-moz-transition-delay':point+'ms','-ms-transition-delay':point+'ms'});
            point=point+300;
        });
    });

    // /add delays to list items

//trycode

    var way = 1;
    var eventName;

$(window).bind('first', function(){

    if(way == 0){
        $('.header').slideDown(300);
        $('.main_slider').removeClass('show').removeAttr('style');
        $(scroller).stop().animate({scrollTop:0},500);
    }
    else if(way == 1){
        $('.header').slideUp(300);
        var variable = $(window).height() - $('.top_text').height()-89;
        if(variable < 0){
            variable = 0;
        }
        $('.main_slider').addClass('show').css({'height':variable+'rem'});
        var index = $('.scrolled').data('id')+1;
        $('.scroll-section').removeClass('scrolled').eq(index).addClass('scrolled');
    }

});

$(window).bind('second', function(){

    var top = $(window).scrollTop();

    var topPosition = $('.scrolled').height()+$('.scrolled').offset().top;

    if(way == 1){
        top = top + 300;
        if((top + $(window).height()) > topPosition){

            $(scroller).stop().animate({scrollTop:topPosition},500);
            var index = $('.scrolled').data('id')+1;
            $('.scroll-section').removeClass('scrolled');
            $('.scroll-section[data-id='+index+']').addClass('scrolled');
            if($('.scrolled').is('[data-event=circle]') && !$('.scrolled').find('.big-sircle').is('.done')){
                $('.scrolled .big-circle-wrap').addClass('began-animate');
                $(window).trigger('circle');
            }
        }else{
            $(scroller).stop().animate({scrollTop:top},300);
        }

    }
    else if(way == 0){
        top = top - 300;
        if((top + $(window).height())< topPosition){
            $(window).trigger('first');
            var index = $('.scrolled').data('id')-1;
            $('.scroll-section').removeClass('scrolled');
            $('.scroll-section[data-id='+index+']').addClass('scrolled');
        }else{
           $(scroller).stop().animate({scrollTop:top},300);
        }
    }

});

$(window).bind('circle', function(){

    var top = $(window).scrollTop();

    var parent = $('.scrolled');
    var circle = parent.find('.big-sircle');
    var pause = 0;

    if(!circle.is('.done')){
        if(way == 1 /*&& pause == 0*/){
            //pause = 1;
            if(parent.find('.go-go').length==(parent.find('.big-sircle-part').length-1)){
                parent.find('.big-sircle-part').addClass('active go-go');

                parent.find('.big-sircle').addClass('done');

                //setTimeout(function(){pause=0;}, 1500);
            }
            else{
                parent.find('.go-go').removeClass('active');
                parent.find('.big-sircle-part').eq(parent.find('.go-go').length).addClass('go-go active');
            }
            //setTimeout(function(){pause=0;}, 1500);
        }
        else if(way == 0 /*&& pause == 0*/){
            //pause = 1;
            if(parent.find('.go-go').length==1){
                parent.find('.big-sircle-part').removeClass('active go-go');
                parent.find('.big-circle-wrap').removeClass('began-animate');
                var topIt = parent.offset().top - parent.height();
                $(scroller).stop().animate({scrollTop:topIt},300);
                var index = parent.data('id')-2;
                $('.scroll-section').removeClass('scrolled');
                $('.scroll-section[data-id='+index+']').addClass('scrolled');
                $(window).trigger('first');
            }else if(parent.find('.go-go').length!=1){
                parent.find('.big-sircle-part.active').removeClass('go-go active');
                parent.find('.go-go').eq(parent.find('.go-go').length - 1).addClass('active');
            }
            //setTimeout(function(){pause=0;}, 1500);
        }
    }else{
        $(window).trigger('specScroll');
    }

});

$(window).bind('specScroll', function(){

    var newTop = $(window).scrollTop();
    var scrolledPosition = $('.scrolled').offset().top + $('.scrolled').height();
    var scrollIndex = $('.scrolled').data('id');
    var maxScrollIndex = $('.scroll-section').length - 1;
    var toTop = $('.scrolled').offset().top - $('.scrolled').height();



    if(way == 1){
        newTop=newTop+300;
        if((newTop + $(window).height()) > scrolledPosition && maxScrollIndex != scrollIndex){
            scrollIndex++;
            $('.scroll-section').removeClass('scrolled');
            $('.scroll-section[data-id='+scrollIndex+']').addClass('scrolled');
            $(scroller).stop().animate({scrollTop:scrolledPosition},500);
        }else{
            $(scroller).stop().animate({scrollTop:newTop},300);
        }
    }else if(way == 0){
        newTop=newTop-300;
        if((newTop + $(window).height()) < scrolledPosition){
            scrollIndex--;
            $('.scroll-section').removeClass('scrolled');
            $('.scroll-section[data-id='+scrollIndex+']').addClass('scrolled');
            $(scroller).stop().animate({scrollTop:toTop},500);
        }else{
            $(scroller).stop().animate({scrollTop:newTop},300);
        }
    }
});


$(window).on('mousewheel DOMMouseScroll', function(event){

    event.preventDefault();

    if(event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY > 0){

        way = 1;

    }
    else if(event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY < 0){

        way = 0;

    }

    eventName = $('.scrolled').data('event');
    $(window).trigger(eventName);

});


 /*   // dots-parts


    $('.dots-parts li').click(function(){

        var index = $(this).index();
        $('.dots-parts li').removeClass('active');
        $(this).addClass('active');

        if(index == 0){
            $(scroller).animate({scrollTop:0},500);
            $('.header').slideDown(300);
            $('.main_slider').removeClass('show').removeAttr('style');
            if(!$('.big-sircle').is('.done')){
                $('.big-sircle-part').removeClass('active go-go');
                $('.big-circle-wrap').removeClass('began-animate');
                setTimeout(function(){timer = 0; pause=0;}, 1500);
            }
        }
        else if(index == 1){
            $('.header').slideUp(300);
            var variable = $(window).height() - $('.top_text').height()-89;
            $('.main_slider').addClass('show').css({'height':variable+'rem'});
            $(scroller).animate({scrollTop:$('.scroll-section').eq(index).offset().top - variable},500);
            if(!$('.big-sircle').is('.done')){
                $('.big-sircle-part').removeClass('active go-go');
                $('.big-circle-wrap').removeClass('began-animate');
                setTimeout(function(){timer = 0; pause=0;}, 1500);
            }
        }
        else if(index == 2){
            $(scroller).animate({scrollTop:$('.scroll-section').eq(index).offset().top},500);
            if(!$('.big-sircle').is('.done')){
                $('.big-circle-wrap').addClass('began-animate').find('[data-part=0]').addClass('go-go active');
                timer = 1;
                pause = 1;
                setTimeout(function(){
                    pause = 0;
                },1500);
            }
        }

    });

    // /dots-parts

    var timer = 0;
    var pause = 0;
    var ifer = null;
    var theTime = 300;

    $('.mouse-scroll').click(function(){
        $('.header').slideUp(300);
        var variable = $(window).height() - $('.top_text').height()-89;
        $('.main_slider').addClass('show').css({'height':variable+'rem'});
        $('.dots-parts li').removeClass('active');
        $('.dots-parts li').eq(1).addClass('active');
    });

    $(window).on('mousewheel DOMMouseScroll', function(event){


        event.preventDefault();


        if(event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY > 0){

            if(timer == 0){
                var top = $(window).scrollTop()+300;
                if($(window).scrollTop() == 0 && !$('.main_slider').is('.show')){
                    $('.header').slideUp(300);
                    var variable = $(window).height() - $('.top_text').height()-89;
                    $('.main_slider').addClass('show').css({'height':variable+'rem'});
                    $('.dots-parts li').removeClass('active');
                    $('.dots-parts li').eq(1).addClass('active');
                }
                else{
                    $(scroller).stop().animate({scrollTop:top}, 300);
                    if(top >= $('.circle-section').offset().top){
                        $('.dots-parts li').removeClass('active');
                        $('.dots-parts li').eq(2).addClass('active');
                    }
                }

            }
        }
        else if(event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY < 0){
            if(timer == 0){
                var top = $(window).scrollTop()-300;

                if($(window).scrollTop() == 0 && $('.main_slider').is('.show')){
                    $('.header').slideDown(300);
                    $('.main_slider').removeClass('show').removeAttr('style');
                    $('.dots-parts li').removeClass('active');
                    $('.dots-parts li').eq(0).addClass('active');
                }else{
                    $(scroller).stop().animate({scrollTop:top}, 300);
                    if($(window).scrollTop() > 0 && $(window).scrollTop() < $('.circle-section').offset().top){
                        $('.dots-parts li').removeClass('active');
                        $('.dots-parts li').eq(1).addClass('active');
                    }
                }
            }
        }

        if(theTime!=0){
            clearTimeout(ifer);
        }
        ifer = setTimeout(function(){
            if(($(window).scrollTop()+$(window).height())>($('.circle-section').offset().top) && !$('.big-sircle').is('.done')){

                if(timer == 0){

                    $('.big-circle-wrap').addClass('began-animate').find('[data-part=0]').addClass('go-go active');

                    $(scroller).animate({scrollTop:$('.circle-section').offset().top},300);

                    timer = 1;
                    pause = 1;
                    theTime = 0;
                    setTimeout(function(){
                        pause = 0;
                    },1500);

                    $('.dots-parts li').removeClass('active');
                    $('.dots-parts li').eq(2).addClass('active');
                }

            }

            if(timer == 1){

                if((event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY>0) && pause==0){
                    pause = 1;
                    if($('.go-go').length==($('.big-sircle-part').length-1)){
                        $('.big-sircle-part').addClass('active go-go');
                        $('.big-sircle').addClass('done');

                        setTimeout(function(){timer = 0; pause=0;}, 1500);
                    }
                    else{
                        $('.go-go').removeClass('active');
                        $('.big-sircle-part').eq($('.go-go').length).addClass('go-go active');
                    }
                    setTimeout(function(){pause=0;}, 1500);

                }
                else if((event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY<0) && pause==0){
                    pause = 1;
                    if($('.go-go').length==1){
                        $('.big-sircle-part').removeClass('active go-go');
                        $('.big-circle-wrap').removeClass('began-animate');
                        var topIt = $('.circle-section').offset().top - $('.circle-section').height();
                        $(scroller).animate({scrollTop:topIt},300,function(){
                            timer = 0;
                        });
                        $('.dots-parts li').removeClass('active');
                        $('.dots-parts li').eq(1).addClass('active');
                        theTime = 300;
                    }else if($('.go-go').length!=1){
                        $('.big-sircle-part.active').removeClass('go-go active');
                        $('.go-go').eq($('.go-go').length - 1).addClass('active');
                    }
                    setTimeout(function(){pause=0;}, 1500);

                }
            }
        },theTime);

    });
*/
};

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
	$('.footer_placeholder').height($('.footer').outerHeight());

	oneHeightItems();

});

$(window).load(function(){

    scrollCircle();

    $(scroller).animate({scrollTop:0},0);

});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});






