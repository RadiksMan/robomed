<?

  if (!isset($_REQUEST['act']) || $_REQUEST['act']==__ROOT__.'/') $act='none';
  else {
    $act=explode('/',$_REQUEST['act']);
    $act=$act[count($act)-1];
  }

?>

<div class="<? echo $act; ?>">
    <div class="support-wrap">
        <div class="support-title">
            <div class="mbox">
                <div class="breadcrumbs">
                    <span>
                        <a href="#">Главная</a>
                    </span>
                    <span>Поддержка</span>
                </div>
                <div class="title-main">
                    Поддержка
                </div>
            </div>
        </div>
        <div class="support-middle cfix">
            <div class="mbox">
                <div class="support-aside-main">
                    <div class="support-aside-main-title">
                        <h5>Популярные вопросы и ответы</h5>
                    </div>
                    <div class="support-aside-acordion-wrap">
                        <div class="support-aside-acordion">
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>Как выявляется неэффективный персонал?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>В чем ценность для главного врача?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>Как выявляется неэффективный персонал?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>В чем ценность для главного врача?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>Как выявляется неэффективный персонал?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>В чем ценность для главного врача?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>Как выявляется неэффективный персонал?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>В чем ценность для главного врача?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                            <div class="support-acordion-item">
                                <div class="support-acordion-item-button"></div>
                                <div class="support-acordion-item-title">
                                    <span>Как выявляется неэффективный персонал?</span>
                                </div>
                                <div class="support-acordion-item-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt ex omnis eaque impedit veniam asperiores eius accusantium aperiam dolorem odit aspernatur voluptas expedita totam quasi facere, velit doloremque quae cumque error dicta nihil unde illo. Explicabo, assumenda, saepe pariatur voluptatum recusandae dolorum quas quia doloremque officiis at et accusantium, nihil.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sunt in, fugiat omnis ea inventore, aspernatur molestiae. Amet tempora nam voluptas fuga ducimus deleniti repellat ipsam ratione aliquid assumenda dignissimos quibusdam enim tempore nobis qui magnam id voluptates ipsum natus quas maxime, fugit, deserunt quasi quia. Officiis non ipsam earum porro assumenda dolor iusto dolore dicta, vitae totam atque alias incidunt unde, deserunt pariatur aliquid fugiat est esse aliquam! Doloribus recusandae quod a magnam perspiciatis est reiciendis fuga repudiandae, distinctio necessitatibus animi libero esse, natus, optio odit error repellendus. Asperiores ipsum soluta voluptates assumenda, eius consequuntur voluptatem magnam rem reprehenderit?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="support-aside-sub">
                    <div class="aside-sub-item">
                        <div class="aside-sub-text"><span>Узнайте больше <br>о Robomed:</span></div>
                        <div class="aside-sub-button red">
                            <a href="#"><span>Загрузить презентацию</span></a>
                        </div>
                    </div>
                    <div class="aside-sub-item">
                        <div class="aside-sub-text"><span>Посчитать выгоду <br>с Robomed:</span></div>
                        <div class="aside-sub-button">
                            <a href="#"><span class="icon icon-calc"></span><span>калькулятор</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="support-bottom">
                <div class="mbox">
                    <div class="support-bottom-wrap reverse">
                        <div class="support-bottom-title">
                            <p>Позвоните нам если у вас остались вопросы или отправьте заявку</p>
                        </div>
                        <div class="support-aside-sub">
                            <div class="support-bottom-wrap-title">
                                <p>Контактная </p>
                                <p>Информация</p>
                            </div>
                            <div class="contact-top-text-desc">
                                <p>г. Санкт-Петербург</p>
                                <p>123344, Рыбный переулок д. 5</p>
                            </div>
                            <div class="contact-top-text-tel">
                                <span class="icon icon_tel"></span>
                                <a href="tel:88008621223">8 800 862-12-23</a>
                            </div>
                            <div class="contact-top-text-mail">
                                <span class="icon icon_mail"></span>
                                <a href="mail:robomed@mail.ru">robomed@mail.ru</a>
                            </div>
                        </div>
                        <div class="support-aside-main">
                            <div class="contact-bottom-form">
                                <form action="ajax.php" name=""class="contact-form-support">
                                    <div class="contact-form-title">
                                        <h5>Остались вопросы? заполните заявку и мы свяжемся с вами</h5>
                                    </div>
                                    <div class="contact-form-row cfix">
                                        <div class="contact-form-item">
                                            <div class="contact-form-item-text">
                                                <span>Ваше имя<span>*</span>:</span>
                                            </div>
                                            <div class="contact-form-item-input form_row">
                                                <div class="contact-form-item-input-wrap form_input">
                                                    <input type="text" name="contact_name" required="required" value="" placeholder="Ваше имя">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contact-form-item">
                                            <div class="contact-form-item-text">
                                                <span>Ваш e-mail<span>*</span>:</span>
                                            </div>
                                            <div class="contact-form-item-input form_row">
                                                <div class="contact-form-item-input-wrap form_input">
                                                    <input type="email" name="contact_email" required="required" value="" placeholder="mail@mail.ru">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="contact-form-item">
                                            <div class="contact-form-item-text">
                                                <span>Ваш телефон:</span>
                                            </div>
                                            <div class="contact-form-item-input">
                                                <input type="text" name="contact_name" value="" placeholder="+7 (123) 456-77-88" class="tel-mask-support">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="contact-form-row cfix">
                                        <div class="contact-form-item-sur">
                                            <div class="contact-form-item-text">
                                                <span>Дополнительная информация:</span>
                                            </div>
                                            <div class="contact-form-item-input">
                                                <textarea name="" id="" cols="10" rows="1" placeholder="Ваш вопрос"></textarea>
                                            </div>
                                        </div>
                                        <div class="contact-form-item">
                                            <button type="submit" class="contact-submit">
                                                <span>Отправть</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>