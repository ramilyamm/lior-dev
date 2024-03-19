import React from 'react';
import s from './Brif.module.scss'
import { Link } from 'react-router-dom';
import brif_ellipse from '../../Assets/image/Ramilya/brif_bg.png'

const Brif = () => {
    return (
        <>
            <img className={s.ellipse_top} src={brif_ellipse} alt="ellipse" />
            <section>
                <div className={s.brif_wrapper}>
                    <h2 className={s.brif_title}>Давайте сделаем что-нибудь вместе :)</h2>
                    <Link to={'/form'}>
                        <button className={s.brif_btn}>заполнить бриф</button>
                    </Link>
                </div>
            </section>
            <img className={s.ellipse_bottom} src={brif_ellipse} alt="ellipse" />
        </>
    );
};

export default Brif;