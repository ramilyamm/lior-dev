import React, { FC, FormEventHandler, useState } from 'react';
import s from './Form.module.scss'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks';
import { IFormData } from '../../Store/types';
import { validateEmail } from '../../utils';
import { fetchByAddFeedback } from '../../Store/slices/infoSlice';
import Loading from '../../components/Loading/Loading';
import ModalSucces from './ModalSucces/ModalSucces';

const Form: FC = () => {
    const [eerror, setError] = useState('')
    const { error, loading, message } = useAppSelector(state => state.info)
    const dispatch = useAppDispatch()
    const [feedbackData, setFeedbackData] = useState<IFormData>({
        application_name: '',
        application_company: '',
        application_description: '',
        application_number: '',
        application_email: '',
        application_offer: ''
    })

    const [modalEnter, setModalEnter] = useState(false)
    const [success, setSuccess] = useState(false)

    const app_offer = ['Создание сайта с адаптивным дизайном', 'Оптимизация и SEO', 'WEB-разработка', 'Мобильные приложения']

    const handleForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        dispatch(fetchByAddFeedback(feedbackData))
        const { application_email, application_name, application_number,
            application_offer } = feedbackData
        if (!validateEmail(application_email) && application_name.trim().length
            && application_number.trim().length && application_offer.trim().length) {
            setError('')
            dispatch(fetchByAddFeedback(feedbackData))
            setFeedbackData({
                application_name: '',
                application_company: '',
                application_description: '',
                application_number: '',
                application_email: '',
                application_offer: '',
            })
        } else if (!application_name.trim().length) {
            setError('Введите Имя')
        } else if (validateEmail(application_email)) {
            setError('Введите корректный Email.')
        } else if (!application_number.trim().length) {
            setError('Введите номер телефона.')
        }

        setModalEnter(true)
        setSuccess(true)
    }

    const toggleClientData = (key: string, value: string) => {
        setFeedbackData({ ...feedbackData, [key]: value })
    }

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <section className={s.sect_form_wp}>
                <h2>Есть вопросы?  Давайте обсудим..</h2>
                <div className={`${s.form} container`}>
                    <div className={s.form_wrapper}>
                        <div className={s.form_left}>
                            <div>Быстрый доступ</div>
                            <h2>Связаться с нами. Это просто.</h2>
                            <h3>ЗАКАЗ УСЛУГ, IT КОНСУЛЬТАЦИЯ</h3>
                            <a href="tel: +996 705 121 928">+996 705 121 928</a>
                            <a className={s.form_mail} href="mailto:liordev@gmail.com"><span>E-mail:</span> liordev@gmail.com</a>
                        </div>

                        <form className={s.form_right} onSubmit={handleForm}>
                            <div className={s.inputs_wrapper}>
                                <div className={s.inputs_block}>
                                    <p className={s.inp_title}>Полное имя</p>
                                    <input className={s.inputs_top}
                                        value={feedbackData.application_name}
                                        onChange={(e) => toggleClientData('application_name', e.target.value)}
                                        type="text" placeholder='Алексей Косараев '
                                    />
                                    {eerror === 'Введите Имя' && (
                                        <p className={s.error}>Введите Имя</p>
                                    )}
                                </div>
                                <div className={s.inputs_block}>
                                    <p className={s.inp_title}>Email</p>
                                    <input className={s.inputs_top}
                                        value={feedbackData.application_email}
                                        onChange={(e) => toggleClientData('application_email', e.target.value)}
                                        type="email" placeholder='consult@mail.com' />
                                    {eerror === 'Введите корректный Email.' && (
                                        <p className={s.error}>Введите корректный Email.</p>
                                    )}
                                </div>
                            </div>
                            <div className={s.inputs_wrapper}>
                                <div className={s.inputs_block}>
                                    <p className={s.inp_title}>Телефон или мессенджер</p>
                                    <input className={s.inputs_top}
                                        value={feedbackData.application_number}
                                        onChange={(e) => toggleClientData('application_number', e.target.value)}
                                        type="tel" placeholder='+996xxxxxxxxx' />
                                    {eerror === 'Введите номер телефона.' && (
                                        <p className={s.error}>Введите номер телефона.</p>
                                    )}
                                </div>
                                <div className={s.inputs_block}>
                                    <p className={s.inp_title}>Компания (необязательно)</p>
                                    <input className={s.inputs_top}
                                        value={feedbackData.application_company}
                                        onChange={(e) => toggleClientData('application_company', e.target.value)}
                                        type="text" placeholder='yourcompany.com' />
                                </div>
                            </div>
                            <p className={s.inp_title}>Выберите вид услуги</p>

                            <select className={s.inp_mob_apps}
                                onChange={(e) => setFeedbackData({ ...feedbackData, application_offer: e.target.value })}>
                                <option className={s.inp_mob_apps}
                                    value='Создание сайта с адаптивным дизайном'>Создание сайта с адаптивным дизайном</option>
                                <option className={s.inp_mob_apps}
                                    value='Оптимизация и SEO'>Оптимизация и SEO</option>
                                <option className={s.inp_mob_apps}
                                    value='WEB-разработка'>WEB-разработка</option>
                                <option className={s.inp_mob_apps}
                                    value='Мобильные приложения'>Мобильные приложения</option>
                            </select>


                            <p className={s.inp_title}>Сообщение</p>
                            <textarea className={s.inp_sms}
                                value={feedbackData.application_description}
                                onChange={(e) => toggleClientData('application_description', e.target.value)}
                                placeholder='Кратко расскажите нам о вашем проекте и ваших
                             текущих целях. Чем мы можем вам помочь?' />
                            <div>
                                <button type='submit' className={s.form_btn} >
                                    Отправить сообщение
                                </button>
                                {eerror && (<p className={s.error}>{eerror}</p>)}
                            </div>
                            {modalEnter && !error && (loading ? (
                                <Loading />
                            ) : (<ModalSucces message={message} modalEnter={modalEnter} setModalEnter={setModalEnter} />))}
                        </form>
                    </div>
                </div >
            </section >
        </>
    );
};

export default Form;