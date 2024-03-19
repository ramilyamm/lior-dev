import React from 'react';
import s from './Studio.module.scss'
import services_img from '../../Assets/image/Ramilya/img_services.png'
import el2 from '../../Assets/image/Ramilya/elements2.png'


const Studio = () => {
    return (
        <section>
            <h2 className={s.title}>СТУДИЯ   ВЕБ-ДИЗАЙНА И РАЗРАБОТКИ</h2>
            <div className='container'>
                <div className={s.services_wp}>
                    <div className={s.services_img}>
                        <img src={services_img} alt="services_img" />
                    </div>
                    <div className={s.services_right}>
                        <h2 className={s.right_title}>СПЕКТР УСЛУГ</h2>
                        <ul className={s.list}>
                            <li>Создание сайтов с адаптивным дизайном <p>Разработка интернет-проектов с оригинальным дизайном, корректно отображаемая на всех возможных устройствах и браузерах.</p></li>
                            <li>Оптимизация и SEO</li>
                            <li>web - разработка</li>
                            <li>Мобильные приложения</li>
                        </ul>
                    </div>

                </div>
                <div className={s.el2}>
                    <img src={el2} alt="el2" />
                </div>
            </div>
        </section>
    );
};

export default Studio;