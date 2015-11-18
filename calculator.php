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
                    <span>Калькулятор</span>
                </div>
                <div class="title-main">
                    калькулятор
                </div>
            </div>
        </div>

    </div>

    <div class="calculator">
        <div class="calculator-wrap">
            <form>
                <div class="calculator-title">Введите текущие показатели:</div>
                <div class="calculator-body">
                    <div class="calculator-col">
                        <div class="calculator-col-title">Пациентов в месяц:</div>
                        <div class="calculator-input">
                            <input type="text" name="patients" />
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-title">ФОТ:</div>
                        <div class="calculator-input">
                            <input type="text" name="fot" />
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-title">Средний чек (руб):</div>
                        <div class="calculator-input">
                            <input type="text" name="check" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="calculator-wrap-bottom color-line">
            <div class="calculator-optimization">
                <div class="calculator-optimization-top">
                    <div class="calculator-optimization-col optimization-first-col">
                        <div class="optimiztion-value"></div>
                        <div class="optimization-text">Оптимизация рекламы по аналитике</div>
                    </div>
                    <div class="calculator-optimization-col optimization-second-col">
                        <div class="optimiztion-value"></div>
                        <div class="optimization-text">За счет сокращения неэффективных сотрудников</div>
                    </div>
                    <div class="calculator-optimization-col optimization-third-col">
                        <div class="optimiztion-value"></div>
                        <div class="optimization-text">За счет продаж комплексов услуг</div>
                    </div>
                </div>
                <div class="calculator-optimization-bottom">

                </div>
            </div>
        </div>
    </div>

</div>