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

    <div class="calculator-main">
        <div class="calculator-wrap">
            <form>
                <div class="calculator-title">Введите текущие показатели:</div>
                <div class="calculator-body cfix">
                    <div class="calculator-col">
                        <div class="calculator-col-title">Пациентов в месяц:</div>
                        <div class="calculator-input">
                            <input type="text" name="patients" value=0 />
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-title">ФОТ:</div>
                        <div class="calculator-input">
                            <input type="text" name="fot" value=0 />
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-title">Средний чек (руб):</div>
                        <div class="calculator-input">
                            <input type="text" name="check" value=0 />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="calculator-wrap-bottom color-line">
            <div class="calculator-optimization">
                <div class="calculator-optimization-top cfix">
                    <div class="calculator-optimization-col optimization-first-col">
                        <div class="optimiztion-value">0</div>
                        <div class="optimization-text">Оптимизация рекламы по аналитике</div>
                    </div>
                    <div class="calculator-optimization-col optimization-second-col">
                        <div class="optimiztion-value">0</div>
                        <div class="optimization-text">За счет сокращения неэффективных сотрудников</div>
                    </div>
                    <div class="calculator-optimization-col optimization-third-col">
                        <div class="optimiztion-value">0</div>
                        <div class="optimization-text">За счет продаж комплексов услуг</div>
                    </div>
                </div>
                <div class="calculator-optimization-bottom cfix">
                    <span class="optimization-bottom-text">Выгода в месяц:</span>
                    <span class="optimization-value-wrap">
                        <span class="optimization-value">
                            0
                        </span>
                        руб
                    </span>
                </div>
            </div>
        </div>
    </div>

</div>