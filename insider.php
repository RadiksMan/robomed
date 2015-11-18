<?

  if (!isset($_REQUEST['act']) || $_REQUEST['act']==__ROOT__.'/') $act='none';
  else {
    $act=explode('/',$_REQUEST['act']);
    $act=$act[count($act)-1];
  }

?>

<div class="main">

    <div class="title-wrap <? echo $act; ?>">

        <div class="title-wrap-main">
            <div class="mbox">
                <div class="breadcrumbs">
                    <span>
                        <a href="#">Главная</a>
                    </span>
                    <span>Внедрение</span>
                </div>
                <div class="title-main">
                    внедрение
                </div>
            </div>
        </div>

    </div>

</div>