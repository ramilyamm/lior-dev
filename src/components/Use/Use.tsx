import React from 'react';
import s from './Use.module.scss'

import django from '../../Assets/image/Ramilya/django.png'
import js from '../../Assets/image/Ramilya/js.png'
import ts from '../../Assets/image/Ramilya/typescript.png'
import react from '../../Assets/image/Ramilya/react.png'
import redis from '../../Assets/image/Ramilya/redis.png'
import docker from '../../Assets/image/Ramilya/docker.png'
import flutter from '../../Assets/image/Ramilya/flutter.png'
import fastapi from '../../Assets/image/Ramilya/fastapi.png'
import mysql from '../../Assets/image/Ramilya/mysql.png'
import mongodb from '../../Assets/image/Ramilya/mongo.png'
import celery from '../../Assets/image/Ramilya/celery.png'
import java from '../../Assets/image/Ramilya/java.png'
import nginx from '../../Assets/image/Ramilya/nginx.png'
import spring from '../../Assets/image/Ramilya/spring.png'
import postgresql from '../../Assets/image/Ramilya/postgresql.png'
import rest from '../../Assets/image/Ramilya/rest.png'
import python from '../../Assets/image/Ramilya/python.png'

const Use = () => {
    return (

        <section>
            <h2 className={s.stamps_title}>мы используем</h2>
            <div className={s.stamps_wrapper}>
                <div className={s.stamps_block_top}>
                    <img src={mongodb} alt="stamps" />
                    <img src={redis} alt="stamps" />
                    <img src={celery} alt="stamps" />
                    <img src={java} alt="stamps" />
                    <img src={nginx} alt="stamps" />
                    <img src={spring} alt="stamps" />
                    <img src={postgresql} alt="stamps" />
                    <img src={rest} alt="stamps" />
                    <img src={python} alt="stamps" />
                </div>

                <div className={s.stamps_block_top}>
                    <img src={mongodb} alt="stamps" />
                    <img src={redis} alt="stamps" />
                    <img src={celery} alt="stamps" />
                    <img src={java} alt="stamps" />
                    <img src={nginx} alt="stamps" />
                    <img src={spring} alt="stamps" />
                    <img src={postgresql} alt="stamps" />
                    <img src={rest} alt="stamps" />
                    <img src={python} alt="stamps" />
                </div>
            </div>

            <div className={s.stamps_wrapper}>
                <div className={s.stamps_block_down}>
                    <img src={python} alt="stamps" />
                    <img src={django} alt="stamps" />
                    <img src={fastapi} alt="stamps" />
                    <img src={react} alt="stamps" />
                    <img src={docker} alt="stamps" />
                    <img src={ts} alt="stamps" />
                    <img src={js} alt="stamps" />
                    <img src={flutter} alt="stamps" />
                    <img src={mysql} alt="stamps" />
                </div>

                <div className={s.stamps_block_down}>
                    <img src={python} alt="stamps" />
                    <img src={django} alt="stamps" />
                    <img src={fastapi} alt="stamps" />
                    <img src={react} alt="stamps" />
                    <img src={docker} alt="stamps" />
                    <img src={ts} alt="stamps" />
                    <img src={js} alt="stamps" />
                    <img src={flutter} alt="stamps" />
                    <img src={mysql} alt="stamps" />
                </div>
            </div>
        </section>

    );
};

export default Use;