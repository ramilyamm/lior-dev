import React from 'react';
import s from './Portfolio.module.scss'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../Store/Hooks/hooks';
import store from '../../Store/store';
import PortfolioCard from './PortfolioCard/PortfolioCard';

const Portfolio = () => {

    const { portfolio_list } = useAppSelector(store => store.portfolio)
    return (

        <section className={s.sect_portfolio}>
            <h2 className={s.title_portfolio}>Портфолио студии lior dev</h2>
            <div className='container'>
                <div className={s.portfolio_card}>
                    {
                        portfolio_list.length > 0 &&
                        portfolio_list.map(el => (
                            <PortfolioCard key={el.id} el={el} />))
                    }
                </div>
                <Link to={'/our_works'}>
                    <span className={s.link_portfolio}>смотреть ещё</span>
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;