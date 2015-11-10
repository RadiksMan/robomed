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
    var blockScrolling = true;
    var pause = false;
    var circlePause = false;
    var pauseTimer = null;

    $(window).bind('first', function(){

        if(way == 0){
            $('.header').slideDown(300);
            $('.main_slider').removeClass('show').removeAttr('style');
            $(scroller).stop().animate({scrollTop:0},500);
            pause = false;
        }
        else if(way == 1){
            $('.header').slideUp(300,function(){
                pause = false;
            });
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

                if(blockScrolling == true){
                    $(scroller).stop().animate({scrollTop:topPosition},500,function(){
                        pause = false;
                    });
                }
                else if(blockScrolling == false){
                    $(scroller).stop().animate({scrollTop:top},200);
                    pause = false;
                }
                var index = $('.scrolled').data('id')+1;
                $('.scroll-section').removeClass('scrolled');
                $('.scroll-section[data-id='+index+']').addClass('scrolled');
                if($('.scrolled').is('[data-event=circle]') && !$('.scrolled').find('.big-sircle').is('.done')){
                    $('.scrolled .big-circle-wrap').addClass('began-animate');
                    $(window).trigger('circle');
                    pause = true;
                }
            }else{
                $(scroller).stop().animate({scrollTop:top},200);
                pause = false;
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
               $(scroller).stop().animate({scrollTop:top},200);
               pause = false;
            }
        }

    });

    $(window).bind('circle', function(){

        var top = $(window).scrollTop();

        var parent = $('.scrolled');
        var circle = parent.find('.big-sircle');

        if(!circle.is('.done')){
            if(way == 1 && pauseTimer == null){

                //circlePause = true;
                if(parent.find('.go-go').length==(parent.find('.big-sircle-part').length-1)){
                    parent.find('.big-sircle-part').addClass('active go-go');

                    parent.find('.big-sircle').addClass('done');

                }
                else{
                    parent.find('.go-go').removeClass('active');

                    parent.find('.dots-parts li').removeClass('active').eq(parent.find('.go-go').length).addClass('active');

                    parent.find('.big-sircle-part').eq(parent.find('.go-go').length).addClass('go-go active');

                }
                pauseTimer = setTimeout(function(){pause = false;pauseTimer = null;},1500);
            }
            else if(way == 0 && circlePause == null){

                //circlePause == true;
                if(parent.find('.go-go').length==1){
                    parent.find('.big-sircle-part').removeClass('active go-go');
                    parent.find('.big-circle-wrap').removeClass('began-animate');
                    var topIt = parent.offset().top - parent.height();
                    $(scroller).stop().animate({scrollTop:topIt},500);
                    var index = parent.data('id')-2;
                    $('.scroll-section').removeClass('scrolled');
                    $('.scroll-section[data-id='+index+']').addClass('scrolled');
                    $(window).trigger('first');

                }else if(parent.find('.go-go').length!=1){
                    parent.find('.big-sircle-part.active').removeClass('go-go active');
                    parent.find('.go-go').eq(parent.find('.go-go').length - 1).addClass('active');

                    parent.find('.dots-parts li').removeClass('active').eq(parent.find('.go-go').length - 1).addClass('active');

                }

                pauseTimer = setTimeout(function(){pause = false;pauseTimer = null;},1500);

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
                if(blockScrolling == true){
                    $(scroller).stop().animate({scrollTop:scrolledPosition},500,function(){
                        pause = false;
                    });
                }else if(blockScrolling == false){
                    $(scroller).stop().animate({scrollTop:newTop},200);
                    pause = false;
                }

                if(maxScrollIndex == scrollIndex){
                    blockScrolling = false;
                }
            }else{
                $(scroller).stop().animate({scrollTop:newTop},200);
                pause = false;
            }
        }else if(way == 0){

            newTop=newTop-300;
            if((newTop + $(window).height()) < scrolledPosition){
                scrollIndex--;
                $('.scroll-section').removeClass('scrolled');
                $('.scroll-section[data-id='+scrollIndex+']').addClass('scrolled');
                if(blockScrolling == true){
                    $(scroller).stop().animate({scrollTop:toTop},500,function(){
                        pause = false;
                    });
                }else if(blockScrolling == false){
                    $(scroller).stop().animate({scrollTop:newTop},200);
                    pause = false;
                }
            }else{
                $(scroller).stop().animate({scrollTop:newTop},200);
                pause = false;
            }
        }
    });

    //

    $('.mouse-scroll').click(function(){
        way=1;
        $(window).trigger('first');
    });

    $('.dots-parts li').click(function(){

        var parent = $(this).parents('.circle-section');
        var dots = parent.find('.dots-parts');
        var index = $(this).index();
        var activeLength = parent.find('.go-go').length-1;
        var circleParts = parent.find('.big-sircle-part').length-1;

        if(!parent.find('.done').length && parent.is('.scrolled')){

            clearTimeout(pauseTimer);
            circlePause = true;
            setTimeout(function(){circlePause=false;}, 1500);

            parent.find('.big-sircle-part').removeClass('go-go active');

            dots.find('li').removeClass('active');
            $(this).addClass('active');

            for(var i=0;i<=index;i++){
                parent.find('.big-sircle-part').eq(i).addClass('go-go');
                if(i == index){
                    parent.find('.big-sircle-part').eq(i).addClass('active');
                }
                if(i == circleParts){
                    parent.find('.big-sircle-part').addClass('active');
                    parent.find('.big-sircle').addClass('done');

                }
            }
        }

    });

    //

    $(window).on('mousewheel DOMMouseScroll', function(event){

        event.preventDefault();

        if(event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY > 0){

            way = 1;

        }
        else if(event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY < 0){

            way = 0;

        }

        if(pause == false){
            eventName = $('.scrolled').data('event');
            if(blockScrolling == true){
                pause = true;
            }
            $(window).trigger(eventName);
        }

    });
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






