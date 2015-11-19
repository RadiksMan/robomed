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
                <li class="active">
                    <a href="#">Для врача</a>
                </li>
                <li>
                    <a href="#">Для управляющего</a>
                </li>
                <li>
                    <a href="#">Для пациента</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="tabs-body">

        <div class="tabs-item active">

            <? partial('product_doctor'); ?>

        </div>

        <div class="tabs-item">

            <? partial('product_controller'); ?>

        </div>

        <div class="tabs-item">

            <? partial('product_patient'); ?>

        </div>

    </div>

</div>