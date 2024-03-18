import React, { FC } from 'react';
import b from './ServicesBG.module.scss'
const ServicesBG: FC = () => {
    return (
        <div className={b.BgService}>
            <div className={b.BgWhite}>
                <div className='container'>
                    <div className={b.BgServiceTitle}>
                        <h2 className={b.title}>что мы <span className={b.greenTitle}>можем предложить</span>?</h2>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ServicesBG;