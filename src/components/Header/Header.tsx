import React, { FC, useState } from 'react';
import s from './Header.module.scss'
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/image/Ramilya/logo.png'
import tel from '../../Assets/image/Ramilya/tel.png'
import adres from '../../Assets/image/Ramilya/adres.png'
import menu from '../../Assets/image/Ramilya/burger.png'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header: FC = () => {
    const [modal, setModal] = useState(false)
    const getModal = () => {
        setModal(!modal)
    }

    return (
        <div className={s.header}>
            <div className='container'>
                <div className={s.icon}>
                    <div className={s.icon_block}>
                        <img src={adres} alt="adres" />
                        <p>Адрес компании здесь</p>
                    </div>
                    <div className={s.icon_block}>
                        <img src={tel} alt="tel" />
                        <p>+996 555 222 333</p>
                    </div>
                </div>
            </div>
            <header>
                <div className={`container ${s.wrapper}`}>
                    <NavLink to={'/'}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className={s.navbar}>
                        <NavLink to={'/'}>
                            <h2 className={s.nav_title}>главная</h2>
                        </NavLink>
                        <NavLink to={'/about_us'}>
                            <h2 className={s.nav_title}>о нас</h2>
                        </NavLink>
                        <NavLink to={'/our_works'}>
                            <h2 className={s.nav_title}>наши работы</h2>
                        </NavLink>
                        <NavLink to={'/services'}>
                            <h2 className={s.nav_title}>УСЛУГИ</h2>
                        </NavLink>
                        <a href="#partners"> <h2 className={s.nav_title}>партнеры</h2></a>
                        <select className={s.select}>
                            <option value="ru">ру</option>
                            <option value="eng">eng</option>
                        </select>
                        <NavLink to={'/form'}>
                            <button className={s.btn_nav}>онлайн-запрос</button>
                        </NavLink>
                    </div>
                    <button className={s.btn} onClick={() => setModal(!modal)}>
                        <div className={s.line}></div>
                        <div className={s.line}></div>
                        <div className={s.line}></div>
                    </button>
                </div>
            </header>
            {modal && <BurgerMenu setModal={setModal} modal={modal} />}
        </div>
    );
};

export default Header;