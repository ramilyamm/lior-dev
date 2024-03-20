import React, { useEffect, useState } from 'react';
import s from './Questions.module.scss'
import { liorAPI } from '../../../axios';

interface FAQItem {
    id: number;
    faq_question: string;
    faq_answer: string;
}

const FAQAccordion: React.FC = () => {
    const [faqs, setFaqs] = useState<FAQItem[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const response = await liorAPI.getFaq();
                setFaqs(response.data);
            } catch (error) {
                console.error('Error fetching FAQs:', error);
            }
        };

        fetchFaqs();
    }, []);

    const toggleAccordion = (index: number) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div>
            {faqs.map((faq, index) => (
                <div key={faq.id} className={s['faq-item']}>
                    <div className={s['faq-question']} onClick={() => toggleAccordion(index)}>
                        <span>{faq.faq_question}</span>
                        {activeIndex === index ? '—' : '+'}
                    </div>
                    {activeIndex === index && (
                        <div className={s['faq-answer']}>
                            <p>{faq.faq_answer}</p>
                        </div>
                    )}
                    <hr className={s.hr} />
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
