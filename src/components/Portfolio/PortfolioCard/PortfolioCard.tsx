import React, { FC } from 'react';
import { IPortfolioData } from '../../../Store/types';
import s from './PortfolioCard.module.scss'


interface PortfolioCardProps {
    el: IPortfolioData
}


const PortfolioCard: FC<PortfolioCardProps> = ({ el }) => {
    const { portfolio_image } = el

    return (
        <>
            <div className={s.portfolio_block}>
                <img className={s.image} src={portfolio_image} alt={portfolio_image} />
            </div>
        </>
    );
};

export default PortfolioCard;