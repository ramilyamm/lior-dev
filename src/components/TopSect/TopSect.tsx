import React from 'react';
import s from './TopSect.module.scss'

const TopSect = () => {
    return (
        <section className={s.bg}>
            <div className='container'>
                <div className={s.lior_text_wp}>
                    <p className={s.lior_text}>сoздание сайтов
                        Разрабатываем яркие креативные сайты “под ключ”</p>
                </div>
                <a href="https://wa.me/+996 705 121 928"><button className={s.btn_header}>связаться с нами</button></a>
            </div>
        </section>
    );
};

export default TopSect;