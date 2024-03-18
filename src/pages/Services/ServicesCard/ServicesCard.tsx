import React, { FC } from 'react';
import b from './ServicesCard.module.scss'
import leftCardImg from '../../../Assets/serviceImg/leftCardImg.png'
import leftTopCardImg from '../../../Assets/serviceImg/leftTopCardImg.png'
import rightTopCardImg from '../../../Assets/serviceImg/rightTopCardImg.png'
import rightCardImg from '../../../Assets/serviceImg/RightCardImg.png'


const ServicesCard: FC = () => {
    return (
        <div className={b.container}>
            <div className={b.ServiceCardBox}>
                <div className={b.Card}>
                    <div className={b.CardImg}>
                        <img src={leftCardImg} alt="logot" />
                    </div>
                    <h2 className={b.titleCard}>Веб-разработка</h2>
                    <p className={b.paragrafCard}>Создание сайтов любой сложности, от лендингов до сложных интернет-магазинов и корпоративных порталов.</p>
                </div>
                <div className={b.Card}>
                    <div className={b.CardImg}>
                        <img src={leftTopCardImg} alt="logot" />
                    </div>
                    <h2 className={b.titleCard}>Дизайн и UX/UI</h2>
                    <p className={b.paragrafCard}>Разработка современного дизайна, ориентированного на пользователя, для создания максимально комфортного и эффективного взаимодействия с продуктом.</p>
                </div>
                <div className={b.Card}>
                    <div className={b.CardImg}>
                        <img src={rightCardImg} alt="logot" />
                    </div>
                    <h2 className={b.titleCard}>Поддержка и оптимизация</h2>
                    <p className={b.paragrafCard}>Предоставление услуг по поддержке и оптимизации существующих сайтов для улучшения их производительности и безопасности.</p>
                </div>
                <div className={b.Card}>
                    <div className={b.CardImg}>
                        <img src={rightTopCardImg} alt="logot" />
                    </div>
                    <h2 className={b.titleCard}>Мобильное приложение</h2>
                    <p className={b.paragrafCard}>Создаем индивидуальные мобильные приложения под платформы IOS и Android для всех ниш бизнеса под ключ.</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;