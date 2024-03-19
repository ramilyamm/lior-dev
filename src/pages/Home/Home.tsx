import React, { FC, useEffect } from 'react'
import s from './Home.module.css'
import Form from '../../pages/Form/Form';
import { useAppDispatch } from '../../Store/Hooks/hooks';
import { fetchByGetListReviews } from '../../Store/slices/reviewsSlice';
import { fetchByGetPortfolio } from '../../Store/slices/portfolioSlice';
import Brif from '../../components/Brif/Brif';
import Portfolio from '../../components/Portfolio/Portfolio';
import Process from '../../components/Process/Process';
import Use from '../../components/Use/Use';
import Partners from '../../components/Partners/Partners';
import TopSect from '../../components/TopSect/TopSect';
import Studio from '../../components/Studio/Studio';
import ReviewsCard from '../../components/ReviewsCard/ReviewsCard';




const Home: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchByGetPortfolio())
	}, [dispatch])

	return (
		<div>
			<TopSect />
			<Studio />
			<Process />
			<Form />
			<Use />
			<Portfolio />
			<Partners />
			<div className={s.cardBlock}>
				<h2 className={s.title}>ЧТО ГОВОРЯТ ПРО НАС</h2>
				<ReviewsCard />
			</div>
			<Brif />
		</div >
	);
};

export default Home;

