import React from 'react';
import s from './Reviews.module.scss'
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import { useAppSelector } from '../../Store/Hooks/hooks';
import brif_ellipse from '../../Assets/image/Ramilya/brif_bg.png'

const Reviews = () => {
    const { review_list, error } = useAppSelector(store => store.review)
    return (
        <div>
            <section>
                <h2 className={s.title}>ЧТО ГОВОРЯТ ПРО НАС</h2>
                <div className='container'>
                    {
                        review_list.length > 0 &&
                        review_list.map(el => (
                            <ReviewsCard key={el.id} />
                        ))
                    }
                </div>
            </section>
            <img className={s.ellipse_top} src={brif_ellipse} alt="ell" />
        </div>
    );
};

export default Reviews;