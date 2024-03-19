import React, { FC } from 'react';
import s from './ReviewsCard.module.scss'
import { IReviewsData } from '../../Store/types';


interface ReviewCardProps {
    el: IReviewsData
}

const ReviewsCard: FC<ReviewCardProps> = ({ el }) => {
    const { id, reviews_description,
        reviews_image, reviews_name,
        reviews_title } = el
    return (
        <div className={s.wrapper}>
            <div className={s.review_card}>
                <p className={s.review_description}>{reviews_description}</p>
                <div className={s.review_bottom}>
                    <img src={reviews_image} alt={reviews_image} />
                    <p>{reviews_name}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;