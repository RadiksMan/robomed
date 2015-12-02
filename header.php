<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta id="viewport" name="viewport" content="width=1280px,user-scalable=yes">
	<meta name="format-detection" content="telephone=no">
	<meta name="MobileOptimized" content="1280"/>
	<meta name="HandheldFriendly" content="false"/>

	<link rel="shortcut icon" type="image/x-icon" href="images/shipfish.ico">

	<title></title>

	<!--<link rel="stylesheet" href="css/bootstrap.css" media="all" />
	<link rel="stylesheet" href="css/bootstrap-theme.css" media="all" />-->

	<link rel="stylesheet" type="text/css" href="css/reset.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/style_basic.css" media="all" />

	<link rel="stylesheet" type="text/css" href="css/fonts.css" media="all" />



	<!--<link rel="stylesheet" href="css/tuesdayAnimate.css" media='all' />-->

	<script src="js/jquery-1.11.3.min.js" type="text/javascript"></script>
	<script src="js/device.js"></script>

	<!-- bootstrap -->

	<!--<script src="js/bootstrap.js" type="text/javascript"></script>-->

	<!-- /bootstrap -->

	<!-- form styler -->

	<link rel="stylesheet" href="css/jquery.formstyler.css" media='all' />
	<script src="js/jquery.formstyler.js" type="text/javascript"></script>

	<!-- /form styler -->

	<script src="js/selectivizr-min.js" type="text/javascript"></script>

	<script src="js/jquery.validate.min.js" type="text/javascript"></script>

	<link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox.css" media="all" />
	<script src="fancybox/jquery.fancybox.js" type="text/javascript"></script>

	<script src="js/modernizr.js" type="text/javascript"></script>
	<script src="js/jquery.watermark.min.js" type="text/javascript"></script>

<!-- mask for inputs -->

	<script src="js/maskInput.js" type="text/javascript"></script>

<!-- /mask for inputs -->

<!-- sliders -->
	<link rel="stylesheet" type="text/css" href="css/slick.css" media="all" />
	<script src="js/slick.js" type="text/javascript"></script>
<!-- sliders -->

<!-- jScrollPane -->
	<link type="text/css" href="css/jquery.jscrollpane.css" rel="stylesheet" media="all" />
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
<!-- jScrollPane -->

<!-- google Maps -->

	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	<script>
		var cordX = 59.931058;
		var cordY= 30.326959;
	</script>
	<script src='js/googleMapsScr.js'></script>


<!-- /google Maps -->

<!-- remove Files -->

	<script src="js/develop_4.js" type="text/javascript"></script>

	<script src="js/develop_2.js" type="text/javascript"></script>

	<script src="js/develop_3.js" type="text/javascript"></script>

	<script src="js/develop_5.js" type="text/javascript"></script>

	<!--<script src="js/myalert.js" type="text/javascript"></script>
	<script src="develop/autocssrenew.js" type="text/javascript"></script>-->

<!-- remove Files -->

	<link rel="stylesheet" type="text/css" href="css/develop_1.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/develop_2.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/develop_3.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/develop_4.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/develop_5.css" media="all" />
	<link rel="stylesheet" type="text/css" href="css/style_main.css" media="all" />

	<script src="js/scr.js" type="text/javascript"></script>

	<!--[if lt IE 9]>
		<script>
		document.createElement('header');
		document.createElement('nav');
		document.createElement('section');
		document.createElement('article');
		document.createElement('aside');
		document.createElement('footer');
		document.createElement('time');
		</script>
		<script src="js/pie.js" type="text/javascript"></script>
	<![endif]-->

	<!--[if lt IE 8]><script src="js/oldie/warning.js"></script><script>window.onload=function(){e("js/oldie/")}</script><![endif]-->
</head>
<body>
	<?partial('zHiddenBlock');?>
	<header class="header <? if($act != index && $act != none){echo 'inside-page';} ?>">
		<div class="header-wrap cfix">
			<div class="mbox">
				<div class="header-logo">
					<a href="#">
						<img src="images/header-logo.png" alt="" />
					</a>
				</div>
				<div class="header-navigation cfix">
					<nav>
						<ul>
							<li><a href="#"><span>О продукте</span></a></li>
							<li><a href="#"><span>Внедрение</span></a></li>
							<li><a href="#"><span>Поддержка</span></a></li>
							<li><a href="#"><span>Клиенты</span></a></li>
							<li><a href="#"><span>Новости</span></a></li>
							<li><a href="#"><span>Контакты</span></a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>