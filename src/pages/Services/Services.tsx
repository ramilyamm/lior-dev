import React, { FC } from 'react';
import b from './Services.module.scss'
import ServicesBG from './ServicesBG/ServicesBG';
import ServicesAbout from './ServicesAbout/ServicesAbout';
import ServicesCard from './ServicesCard/ServicesCard';
import orangeCircle from '../../Assets/serviceImg/orangeCircle.png'
import greenCircle from '../../Assets/serviceImg/greenCircle.png'
import Form from '../Form/Form';

const Services: FC = () => {
    return (
        <div className={b.ServiceHome}>
            <img className={b.orangeCircle} src={orangeCircle} alt="log" />
            <img className={b.greenCircle} src={greenCircle} alt="log" />
            <ServicesBG />
            <ServicesAbout />
            <ServicesCard />
            <Form />

        </div>
    );
};

export default Services;