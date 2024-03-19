import React from 'react';
// import s from './Partners.module.scss'
import s from '../../components/Use/Use.module.scss'
import supara from '../../Assets/image/Ramilya/2logo.png'
import itacademy from '../../Assets/image/Ramilya/3logo.png'
import trans from '../../Assets/image/Ramilya/4logo.png'
import keremet from '../../Assets/image/Ramilya/5logo.png'
import inhouse from '../../Assets/image/Ramilya/6logo.png'

const Partners = () => {
    return (

        <section className={s.partners_sect}>
            <a id="partners"></a>
            <h2 className={s.stamps_title}>наши партнеры</h2>
            <div className={s.stamps_wrapper}>
                <div className={s.stamps_block_top}>
                    <img src={supara} alt="supara" />
                    <img src={itacademy} alt="itacademy" />
                    <img src={trans} alt="trans" />
                    <img src={keremet} alt="keremet" />
                    <img src={inhouse} alt="inhouse" />
                </div>

                <div className={s.stamps_block_top}>
                    <img src={supara} alt="supara" />
                    <img src={itacademy} alt="itacademy" />
                    <img src={trans} alt="trans" />
                    <img src={keremet} alt="keremet" />
                    <img src={inhouse} alt="inhouse" />
                </div>
            </div>
        </section>
    );
};

export default Partners;