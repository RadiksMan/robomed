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

    $('input', block).blur(function() {
        $inputNum = $(this);
        if ($inputNum.val == '' || $inputNum.val() == 0) {
            $inputNum.val(0);
        }
    });

    $('input', block).focus(function(){
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
            if ( data.trim()=='true') {
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
            'closeBtn' : false,
            afterClose: function(){
                $('form').trigger("reset");
                clearTimeout(timer);
            }
        });
        var timer = null;

        timer = setTimeout(function(){
            $('form').trigger("reset");
            $.fancybox.close("#call_success");
        },3000);


    }
}

function formMaskInput(){
    $(".tel-mask").mask("+7 (999) 999-99-99");
    $(".tel-mask-support").mask("+7 (999) 999-99-99");
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

    if(!$('.header').is('.inside-page')){

        $('.big-sircle-part').each(function(){
            if($(this).is('.part-top') || $(this).is('.part-bottom')){
                var oneHeight = 0;
                $(this).find('.big-sircle-list li').each(function(){
                    if($(this).height()>oneHeight){
                        oneHeight = $(this).height();
                    }
                });
                $(this).find('.big-sircle-list li').css({'height':oneHeight+'px'});
            }
        });

        if(device.desktop){
            $('body').css('overflow','hidden');
        }

        $('.big-sircle-part').each(function(){
            var point = 0;
            var x = 0, y = 0;

            if($(this).is('.part-left')){
                x = -50;
                y = 0;
            }
            else if($(this).is('.part-right')){
                x = 50;
                y = 0;
            }
            else if($(this).is('.part-top')){
                x = 0;
                y = -50;
            }
            else if($(this).is('.part-bottom')){
                x = 0;
                y = 50;
            }

            $(this).find('li').each(function(){
                if(Modernizr.csstransitions){
                    $(this).css({'transition-delay':point+'ms','-webkit-transition-delay':point+'ms','-moz-transition-delay':point+'ms','-ms-transition-delay':point+'ms'});
                }
                else{
                    $(this).css({'opacity':'0','transform':'translate('+x+'%,'+y+'%)'});
                }
                $(this).attr('data-x', x);
                $(this).attr('data-y', y);
                point=point+300;
            });
        });

        // /add delays to list items

        var way = 0;
        var eventName;
        var blockScrolling = true;
        var pause = false;
        var pauseTimer = null;

        // kostil

        var kostilHeight = $(window).height();
        var kostilPadding = $(window).height()/10;
        $('.big-sircle').css({'height':kostilHeight+'px','padding':kostilPadding+'px 0'});

        $('[data-event="first"]').attr('data-height', (kostilHeight)); //-89
        $('.main-slider').css('height',$('[data-event="first"]').data('height'));
        $('.main_slider_wrap img').css('height',$("[data-event='first']").data('height')-110);

        var sectionCircle = $('.circle-section').offset().top; //kostil( - 89)

        // /kostil

        $(window).on('mousedown', function(event){
            if(event.which == 2){
                return false;
            }
        })

        $(window).bind('first', function(){

            if(way == 0){
                if(blockScrolling == true){
                    $('.header').slideDown(300);
                    $('.main_slider').removeClass('show').animate({height:$('[data-event="first"]').data('height')},300)/*.css('height', $('[data-event="first"]').data('height')).removeAttr('style')*/;//
                    $(scroller).stop().animate({scrollTop:0},500, function(){
                        pause = false;
                    });
                }else{
                    pause = false;
                }

            }
            else if(way == 1){
                if(blockScrolling == true){
                    /*$('.header').slideUp(300,function(){
                        pause = false;
                    });*/

                    var variable = $(window).height() - $('.top_text').height()-110;//-89
                    if(variable < 0){
                        variable = 0;
                    }
                    $('.main_slider').addClass('show').animate({height:variable},300, function(){
                        pause = false;
                    })/*.css({'height':variable+'rem'})*/;
                    var index = $('.scrolled').data('id')+1;
                    $('.scroll-section').removeClass('scrolled').eq(index).addClass('scrolled');
                }else{
                    pause = false;
                    var index = $('.scrolled').data('id')+1;
                    $('.scroll-section').removeClass('scrolled').eq(index).addClass('scrolled');
                }
            }

        });

        $(window).bind('second', function(){

            var top = $(window).scrollTop();

            var topPosition = $('.scrolled').height()+$('.scrolled').offset().top;

            if(way == 1){
                top = top + 300;
                if((top + $(window).height()) > topPosition){

                    if(blockScrolling == true){
                        $(scroller).stop().animate({scrollTop:sectionCircle},500,function(){//
                            pause = false;
                        });
                        $('.header').slideDown(0);
                        $('.main_slider').removeClass('show').animate({height:$('[data-event="first"]').data('height') - 110},0)/*.css('height', $('[data-event="first"]').data('height')).removeAttr('style')*/;
                    }
                    else if(blockScrolling == false){
                        //$(scroller).stop().animate({scrollTop:top},200);
                        pause = false;
                    }
                    var index = $('.scrolled').data('id')+1;
                    $('.scroll-section').removeClass('scrolled');
                    $('.scroll-section[data-id='+index+']').addClass('scrolled');
                    if($('.scrolled').is('[data-event=circle]') && !$('.scrolled').find('.big-sircle').is('.done')){
                        $('.scrolled .big-circle-wrap').addClass('began-animate');
                        $(window).trigger('circle');
                        $('.dots-parts li').eq(0).click();



                        pause = true;
                    }
                }else{
                    //$(scroller).stop().animate({scrollTop:top},200);
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
                   //if(blockScrolling == true){
                       //$(scroller).stop().animate({scrollTop:top},200);
                   //}
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

                    if(parent.find('.go-go').length == (parent.find('.big-sircle-part').length-1)){
                        parent.find('.big-sircle-part').addClass('active go-go');

                        parent.find('.big-sircle').addClass('done');

                    }
                    else{
                        parent.find('.go-go').removeClass('active');

                        parent.find('.dots-parts li').removeClass('active').eq(parent.find('.go-go').length).addClass('active');

                        parent.find('.big-sircle-part').eq(parent.find('.go-go').length).addClass('go-go active');

                    }

                    if(!Modernizr.csstransitions){
                        $('.big-sircle-part').each(function(){
                            var theX = $(this).find('li').data('x')+'%';
                            var theY = $(this).find('li').data('y')+'%';

                            var ieTimer = null;
                            var part = $(this).find('li');
                            var partLength = part.length;
                            var partPoint = 0;
                            console.log(partLength);

                            if($(this).is('.active')){
                                ieTimer = setInterval(function(){
                                    part.eq(partPoint).animate(
                                        {opacity:1},
                                        {
                                            step:function(){
                                                part.eq(partPoint).css({'transform':'translate(0,0)'});
                                            },
                                            duration:300
                                        },
                                        'linear'
                                    );
                                    partPoint++;
                                    if(partPoint == partLength){
                                        clearInterval(ieTimer);
                                    }
                                },200);
                            }else{
                                ieTimer = setInterval(function(){
                                    part.eq(partPoint).animate(
                                        {opacity:0},
                                        {
                                            step:function(){
                                                part.eq(partPoint).css({'transform':'translate('+theX+','+theY+')'});
                                            },
                                            duration:300
                                        },
                                        'linear'
                                    );
                                    partPoint++;
                                    if(partPoint == partLength){
                                        clearInterval(ieTimer);
                                    }
                                },200)
                            }
                        });
                    }

                    pauseTimer = setTimeout(function(){pause = false;pauseTimer = null;},1500);
                }
                else if(way == 0 && pauseTimer == null){

                    if(parent.find('.go-go').length==1){
                        parent.find('.big-sircle-part').removeClass('active go-go');
                        parent.find('.big-circle-wrap').removeClass('began-animate');
                        //var topIt = parent.offset().top - parent.height();
                        //$(scroller).stop().animate({scrollTop:topIt},500);
                        //var index = parent.data('id')-1;
                        var index = parent.data('id')-2;
                        $('.scroll-section').removeClass('scrolled');
                        $('.scroll-section[data-id='+index+']').addClass('scrolled');
                        $(window).trigger('first');

                    }else if(parent.find('.go-go').length!=1){
                        parent.find('.big-sircle-part.active').removeClass('go-go active');
                        parent.find('.go-go').eq(parent.find('.go-go').length - 1).addClass('active');

                        parent.find('.dots-parts li').removeClass('active').eq(parent.find('.go-go').length - 1).addClass('active');

                    }

                    if(!Modernizr.csstransitions){
                        $('.big-sircle-part').each(function(){
                            var theX = $(this).find('li').data('x')+'%';
                            var theY = $(this).find('li').data('y')+'%';

                            var ieTimer = null;
                            var part = $(this).find('li');
                            var partLength = part.length;
                            var partPoint = 0;
                            console.log(partLength);

                            if($(this).is('.active')){
                                ieTimer = setInterval(function(){
                                    part.eq(partPoint).animate(
                                        {opacity:1},
                                        {
                                            step:function(){
                                                part.eq(partPoint).css({'transform':'translate(0,0)'});
                                            },
                                            duration:300
                                        },
                                        'linear'
                                    );
                                    partPoint++;
                                    if(partPoint == partLength){
                                        clearInterval(ieTimer);
                                    }
                                },200);
                            }else{
                                ieTimer = setInterval(function(){
                                    part.eq(partPoint).animate(
                                        {opacity:0},
                                        {
                                            step:function(){
                                                part.eq(partPoint).css({'transform':'translate('+theX+','+theY+')'});
                                            },
                                            duration:300
                                        },
                                        'linear'
                                    );
                                    partPoint++;
                                    if(partPoint == partLength){
                                        clearInterval(ieTimer);
                                    }
                                },200)
                            }
                        });
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
                        $(scroller).stop().animate({scrollTop:scrolledPosition}, 500, function(){
                            pause = false;
                        });
                    }else if(blockScrolling == false){
                        //$(scroller).stop().animate({scrollTop:newTop},200);
                        pause = false;
                    }

                    if(maxScrollIndex == scrollIndex){
                        blockScrolling = false;
                        if(device.desktop){
                            $('body').css({'overflow':'visible','overflow-x':'hidden','overflow-y':'visible','margin-right':'-17px'});
                        }
                    }
                }else{
                    //if(blockScrolling == true){
                        //$(scroller).stop().animate({scrollTop:newTop},200);
                    //}
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
                        //$(scroller).stop().animate({scrollTop:newTop},200);
                        pause = false;
                    }
                }else{
                    //if(blockScrolling == true){
                        //$(scroller).stop().animate({scrollTop:newTop},200);
                    //}
                    pause = false;
                }
            }
        });

        //

        $('.mouse-scroll').click(function(){
            way=1;
            if(blockScrolling == true){
                $(window).trigger('first');

            }else{
                $(scroller).animate({scrollTop:$('[data-event="second"]').offset().top},500);
                var index = $('.scrolled').data('id')+1;
                $('.scroll-section').removeClass('scrolled').eq(index).addClass('scrolled');
            }

        });

        $('.dots-parts li').click(function(){

            pause = true;

            var parent = $(this).parents('.circle-section');
            var dots = parent.find('.dots-parts');
            var index = $(this).index();
            var activeLength = parent.find('.go-go').length-1;
            var circleParts = parent.find('.big-sircle-part').length-1;

            if(!parent.find('.done').length && parent.is('.scrolled')){

                clearTimeout(pauseTimer);
                setTimeout(function(){pauseTimer=null;pause = false;}, 1500);

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


        if(device.desktop()){ //!device.ios() && !device.android() && !device.blackberry()

            $(window).on('mousewheel DOMMouseScroll', function(event){

                if(pause == true){
                    event.preventDefault();
                }

                if(event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY > 0){

                    way = 1;

                }
                else if(event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY < 0 || touchStart < touchEnd){

                    way = 0;

                }

                if(pause == false){
                    eventName = $('.scrolled').data('event');
                    if(blockScrolling == true){
                        pause = true;
                        event.preventDefault();
                    }
                    $(window).trigger(eventName);
                }

            });

        }
        else{

            var touchStart = 0;
            var touchEnd = 0;

            $(window).on('touchstart', function(event){

                touchStart = event.originalEvent.changedTouches[0].pageY;
                if(blockScrolling == true){
                    event.preventDefault();
                }

                if($(event.target).is('.mouse-scroll')){
                    $('.mouse-scroll').trigger('click');
                }

            });

            $(window).on('touchend', function(event){

                touchEnd = event.originalEvent.changedTouches[0].pageY;

                if(touchStart > touchEnd){
                    way = 1;
                }
                else if(touchStart < touchEnd){
                    way = 0;
                }

                eventName = $('.scrolled').data('event');
                $(window).trigger(eventName);

            });

        }

        // added for thinkpad

        $(window).resize(function(){

            if(device.desktop()){ //!device.ios() && !device.android() && !device.blackberry()

                $('body').css('overflow','hidden');

                $(window).on('mousewheel DOMMouseScroll', function(event){

                    if(pause == true){
                        event.preventDefault();
                    }

                    if(event.originalEvent.wheelDelta<0 || event.originalEvent.deltaY > 0){

                        way = 1;

                    }
                    else if(event.originalEvent.wheelDelta>0 || event.originalEvent.deltaY < 0 || touchStart < touchEnd){

                        way = 0;

                    }

                    if(pause == false){
                        eventName = $('.scrolled').data('event');
                        if(blockScrolling == true){
                            pause = true;
                            event.preventDefault();
                        }
                        $(window).trigger(eventName);
                    }

                });

            }
            else{

                $('body').removeAttr('style');

                var touchStart = 0;
                var touchEnd = 0;

                $(window).on('touchstart', function(event){

                    touchStart = event.originalEvent.changedTouches[0].pageY;
                    if(blockScrolling == true){
                        event.preventDefault();
                    }

                    if($(event.target).is('.mouse-scroll')){
                        $('.mouse-scroll').trigger('click');
                    }

                });

                $(window).on('touchend', function(event){

                    touchEnd = event.originalEvent.changedTouches[0].pageY;

                    if(touchStart > touchEnd){
                        way = 1;
                    }
                    else if(touchStart < touchEnd){
                        way = 0;
                    }

                    eventName = $('.scrolled').data('event');
                    $(window).trigger(eventName);

                });

            }

        });

        // /added for thinkpad

        $(window).trigger('first');

    }

};

function gap(strval) {
  return strval.replace(/\d(?=(?:\d{3})+\b)/g, "$&" +' ');
}

function calculatorScript(){

    $('.calculator-input input').keyup(function(){

        var inputValue = $(this).val();

        if($(this).is('[name=patients]')){
            inputValue = parseInt(inputValue*1.10);
            $('.optimization-first-col .optimiztion-value').attr('data-value', inputValue);
            inputValue = gap(inputValue.toString());
            $('.optimization-first-col .optimiztion-value').text(inputValue);
        }
        else if($(this).is('[name=fot]')){
            inputValue = parseInt(inputValue*0.08);
            $('.optimization-second-col .optimiztion-value').attr('data-value', inputValue);
            inputValue = gap(inputValue.toString());
            $('.optimization-second-col .optimiztion-value').text(inputValue);
        }
        else if($(this).is('[name=check]')){
            inputValue = parseInt(inputValue*1.20);
            $('.optimization-third-col .optimiztion-value').attr('data-value', inputValue);
            inputValue = gap(inputValue.toString());
            $('.optimization-third-col .optimiztion-value').text(inputValue);
        }

        var pointValue = 0;

        $('.calculator-optimization-col').each(function() {
            var value = $(this).find('.optimiztion-value').attr('data-value').toString().length;
            if(value < 6 && pointValue == 0){
                $('.calculator-optimization-col .optimiztion-value').css({'font-size':'50px'});
            }
            if(value>= 6 && value < 10 && pointValue <= 1){
                $('.calculator-optimization-col .optimiztion-value').css({'font-size':'40px'});
                pointValue = 1;
            }
            if(value >= 10 && value < 14 && pointValue <= 2){
                $('.calculator-optimization-col .optimiztion-value').css({'font-size':'30px'});
                pointValue = 2;
            }
            if(value >= 14 && pointValue <= 3){
                $('.calculator-optimization-col .optimiztion-value').css({'font-size':'20px'});
                pointValue = 3;
            }
        });

        var patients = $('input[name=patients]').val();
        var newPatients = parseInt($('.optimization-first-col .optimiztion-value').attr('data-value'));

        var fot = $('input[name=fot]').val();
        var newFot = parseInt($('.optimization-second-col .optimiztion-value').attr('data-value'));

        var check = $('input[name=check]').val();
        var newCheck = parseInt($('.optimization-third-col .optimiztion-value').attr('data-value'));

        var formuleValue = parseInt(newFot + (newPatients * (newCheck - check)));

        formuleValue = gap(formuleValue.toString());

        if (formuleValue.length <= 10){
            $('.calculator-optimization-bottom .optimization-value-wrap').css({'font-size':'50px'});
        }
        else if(formuleValue.length >10 && formuleValue.length <= 17){
            $('.calculator-optimization-bottom .optimization-value-wrap').css({'font-size':'30px'});
        }
        else if(formuleValue.length >17){
            $('.calculator-optimization-bottom .optimization-value-wrap').css({'font-size':'20px'});
        }

        $('.calculator-optimization-bottom .optimization-value').text(formuleValue);

    });

}

/* DOCUMENT READY  */
$(document).ready(function() {
	modernize();
    formMaskInput();
	$('.footer_placeholder').height($('.footer').outerHeight());

	oneHeightItems();
    validate('.contact-form', {submitFunction:validationCall});
    validate('.contact-form-support', {submitFunction:validationCall});
});

$(window).load(function(){


    /* index page */

    scrollCircle();
    $('.footer_placeholder').height($('.footer').outerHeight());

    /* /index page */

    /* calculator */

    inputNumber('.calculator-input');
    calculatorScript();

    /* /calculator */

    /* product */

    //u_tabs('.tabs a', '.tabs-item');

    /* /product */

});

$(window).resize(function() {

    $('.footer_placeholder').height($('.footer').outerHeight());
});






