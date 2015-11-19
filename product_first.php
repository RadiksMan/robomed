<?

  if (!isset($_REQUEST['act']) || $_REQUEST['act']==__ROOT__.'/') $act='none';
  else {
    $act=explode('/',$_REQUEST['act']);
    $act=$act[count($act)-1];
  }

?>

<div class="main">

    <div class="title-wrap <? echo $act; ?>">

        <div class="title-wrap-main white-bg">
            <div class="mbox">
                <div class="breadcrumbs">
                    <span>
                        <a href="#">Главная</a>
                    </span>
                    <span>О продукте</span>
                </div>
                <div class="title-main">
                    О продукте
                </div>
            </div>
        </div>

    </div>

    <div class="tabs">
        <div class="mbox">
            <ul>
                <li>
                    <a href="#" class="active" data-utab=0>Для врача</a>
                </li>
                <li>
                    <a href="#" data-utab=1>Для управляющего</a>
                </li>
                <li>
                    <a href="#" data-utab=2>Для пациента</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="product-body">

        <? partial('product_doctor'); ?>

    </div>

</div>