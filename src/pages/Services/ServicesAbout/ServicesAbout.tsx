import React, { FC, useEffect } from 'react';
import b from './ServicesAbout.module.scss'
import star from '../../../Assets/serviceImg/starImg.png'
import Navigation from '../../../Assets/serviceImg/Navigation.png'
import { useAppDispatch, useAppSelector } from '../../../Store/Hooks/hooks';
import { fetchByServiceMain } from '../../../Store/slices/serviceSlice';

const ServicesAbout: FC = () => {
    const dispatch = useAppDispatch()
    const { serivice } = useAppSelector(state => state.service)

    useEffect(() => {
        dispatch(fetchByServiceMain())
    }, [dispatch])
    console.log(serivice);


    return (
        <div className='container'>
            <div className={b.AboutBox}>
                <div className={b.AboutCardTop}>
                    <img src={star} alt="start" />
                </div>
                <div className={b.AboutCardCenter}>
                    <h2 className={b.title}>{serivice?.offers_title}</h2>
                </div>
                <div className={b.AboutCardBottom}>
                    <p className={b.paragraf}>{serivice?.offers_description}</p>
                    <div className={b.navigation}>
                        <img className={b.navigationImg} src={Navigation} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesAbout;