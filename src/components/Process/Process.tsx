import React from 'react';
import s from './Process.module.scss'
import vect1 from '../../Assets/image/Ramilya/Vect1.png'
import vect2 from '../../Assets/image/Ramilya/Vect2.png'
import vect3 from '../../Assets/image/Ramilya/Vect3.png'
import vect4 from '../../Assets/image/Ramilya/Vect4.png'
import vect5 from '../../Assets/image/Ramilya/Vect5.png'
import vect6 from '../../Assets/image/Ramilya/Vect6.png'
import ui from '../../Assets/image/Ramilya/ui.png'


const Process = () => {
    return (

        <section>
            <div className={`${s.project_wp} container`}>
                <div className={s.project_left} >
                    <h2>ВИЗУАЛИЗАЦИЯ УСПЕХА</h2>
                    <h3 className={s.title}>Наш проектный процесс</h3>
                    <p className={s.description}>Понимание того, что вы создаете, почему это создается
                        и как мы собираемся использовать опыт вашего бренда
                        с помощью нашего экспертного UX / UI-дизайна.
                        Каждый этап нашего проектного процесса призван
                        обеспечить четкие и краткие результаты и служить
                        вехой на пути к следующему этапу прогресса.</p>
                    <div className={s.wp_vectors}>
                        <div className={s.vect_blocks}>
                            <div>
                                <img className={s.vect1} src={vect4} alt="vect4" />
                                <p>Каркасы и эскизы</p>
                            </div>
                            <div>
                                <img className={s.vect2} src={vect5} alt="vect5" />
                                <p> Разработка</p>
                            </div>
                            <div>
                                <img className={s.vect1} src={vect6} alt="vect6" />
                                <p>Предварительный запуск и запуск</p>
                            </div>
                        </div>
                        <div className={s.vect_blocks}>
                            <div>
                                <img className={s.vect1} src={vect1} alt="vect1" />
                                <p >Планирование проекта</p>
                            </div>
                            <div>
                                <img className={s.vect5} src={vect2} alt="vect2" />
                                <p>Исследования и стратегия</p>
                            </div>
                            <div>
                                <img className={s.vect6} src={vect3} alt="vect3" />
                                <p>Цифровой дизайн</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.ui}>
                    <img src={ui} alt="img" />
                </div>
            </div>
        </section>
    );
};

export default Process;