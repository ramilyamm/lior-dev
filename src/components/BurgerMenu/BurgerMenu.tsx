import React, { FC, useEffect } from 'react';
import s from './BurgerMenu.module.scss'
import { NavLink } from 'react-router-dom';

interface MenuProps {
    setModal: (e: boolean) => void
    modal: boolean
}


const BurgerMenu: FC<MenuProps> = ({ setModal, modal }) => {
    const getModal = () => {
        setModal(false)
    }

    useEffect(() => {
        // При рождении убрать скрол
        document.body.style.overflow = 'hidden'
        // При нажатии на ESC закрыть модальное окно
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' && getModal()
        })
        // При рождении навесит другое событие на кнопку назад у браузера
        if (modal) {
            window.history.pushState(null, '', window.location.href)
            window.onpopstate = () => setModal(false);
        }
        return () => {
            // При закрытии  модального окна вернуть скролл
            document.body.style.overflow = 'auto'
            // При закрытии убрать действия с кнопки ESC
            document.removeEventListener('keydown', () => { })
            // При закрытии вернуть действие по умолчанию на кнопку назад в браузере
            if (!modal) window.history.back();
            window.onpopstate = () => { };
        }
    }, [])
    return (
        <div onClick={getModal} className={s.burgermenu}>
            <div onClick={(e) => e.stopPropagation()} className={s.navbar}>
                <span onClick={getModal} className={s.cross}></span>
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
        </div>
    );
};

export default BurgerMenu;