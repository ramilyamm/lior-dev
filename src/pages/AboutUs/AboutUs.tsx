import React, { FC, useEffect, useState } from 'react';
import s from './AboutUs.module.scss'
import history from '../../Assets/image/AboutUs/history (2).png'
import mission from '../../Assets/image/AboutUs/mission(2).png'
import quotes from '../../Assets/image/AboutUs/quotes.png'
import circle from '../../Assets/image/AboutUs/Ellipse 183.png'
import Questions from "./faqQuestions/Questions";
import { liorAPI } from '../../axios/index';
import { TeamMember } from '../../Store/types/index'
import TeamMemberCard from './memberCard/MemberCard'
import Form from '../Form/Form';

const AboutUs: FC = () => {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await liorAPI.getTeam();
                setTeamMembers(response.data);
            } catch (error) {
                console.error('Error fetching team data:', error);
            }
        };

        fetchTeamData();
    }, []);

    return (
        <div className={s.about_us}>
            <section className={s.banner}>
                <div className="container">
                    <h1 className={s.title}>О СТУДИИ <b>LIOR DEV</b></h1>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.history}>
                        <div className={s.history_info}>
                            <span className={s.history_title}>ИСТОРИЯ СОЗДАНИЯ СТУДИИ</span>
                            <p className={s.history_text}>LiorDev была основана Батыром Осмонкуловым, вдохновлённым идеей создавать инновационные и
                                функциональные веб-решения для бизнеса и индивидуальных клиентов.
                                С момента основания и до сегодняшнего дня, мы стремимся к постоянному развитию,
                                используя последние технологии и следуя мировым трендам в дизайне и веб-разработке.</p>
                        </div>

                        <div className={s.history_img}>
                            <img src={history} alt="history" />
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.history}>

                        <div className={s.history_img}>
                            <img src={mission} alt="mission" />
                        </div>

                        <div className={s.history_info}>
                            <span className={s.history_title}>МИССИЯ И ВИДЕНИЕ</span>
                            <p className={s.history_text}>Наша миссия заключается в том, чтобы помогать бизнесу расти
                                и достигать новых высот с помощью качественных веб-решений.
                                Мы видим себя не просто как исполнителей, а как партнёров наших клиентов,
                                стремясь к созданию продуктов, которые будут служить долгосрочным успехом
                                и развитием их бизнеса.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.info}>
                        <div className={s.info_inner}>
                           <h3>ИНФОРМАЦИЯ О КОМАНДЕ</h3>
                           <div className={s.info_comment}>
                               <img src={quotes} alt="quotes"/>
                               <p className={s.info_text}>В LiorDev мы гордимся нашей командой - группой талантливых и увлеченных профессионалов,
                                   объединенных общей целью - создавать веб-решения, которые вдохновляют и вносят реальный вклад в успех наших клиентов.
                                   Каждый член команды вносит уникальный вклад в наш коллективный успех, и вот некоторые из ключевых лиц, стоящих за нашими проектами.</p>
                           </div>
                         </div>
                       </div>
                       </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.team}>
                        <h3>КОМАНДА СТУДИИ</h3>
                        <p className={s.team_text}>Наши проекты воплощаются в жизнь благодаря усилиям команды талантливых специалистов, в которую входят разработчики, дизайнеры, аналитики и менеджеры проектов.
                            Батыр Осмонкулов, основатель и стратегический руководитель LiorDev, вместе с командой обеспечивает высокий уровень исполнения каждого проекта.</p>
                        <div className={s.team_cards}>
                            {teamMembers.map((member, index) => (
                                <TeamMemberCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div className={s.faq}>
                        <div className={s.faq_table}>
                            <div className={s.faq_text}>
                                <span className={s.faq_title}>FAQ</span>
                                <h4>Вопросы клиентов</h4>
                            </div>
                            <div className={s.faq_questions}>
                                <Questions />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Form />
        </div>
    );
};

export default AboutUs;