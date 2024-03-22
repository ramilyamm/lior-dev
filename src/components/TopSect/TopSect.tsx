import React from 'react';
import s from './TopSect.module.scss'
import BgLaptop from '../../Assets/image/Ramilya/laptopBg.png'

const TopSect = () => {
    return (
        <div>
            <div className={s.bg}>
                <div className={s.BgBox}>
                    <div className={s.LeftTitle}>
                        <p className={s.lior_text}>сoздание сайтов
                            Разрабатываем яркие креативные сайты “под ключ”</p>
                        <a href="https://wa.me/996705121928"><button className={s.btn_header}>связаться с нами</button></a>
                    </div>
                </div>
                <div className={s.RightTile}>
                    <img src={BgLaptop} alt="laptop" />
                </div>
            </div>
            <div className={s.BgWhite}></div>
        </div>
    );
};

export default TopSect;