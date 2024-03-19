import React, { FC, useEffect } from 'react'
import s from './Home.module.scss'
import Form from '../../pages/Form/Form';
import { useAppDispatch } from '../../Store/Hooks/hooks';
import { fetchByGetListReviews } from '../../Store/slices/reviewsSlice';
import { fetchByGetPortfolio } from '../../Store/slices/portfolioSlice';
import Reviews from '../../components/Reviews/Reviews';
import Brif from '../../components/Brif/Brif';
import Portfolio from '../../components/Portfolio/Portfolio';
import Process from '../../components/Process/Process';
import Use from '../../components/Use/Use';
import Partners from '../../components/Partners/Partners';
import TopSect from '../../components/TopSect/TopSect';
import Studio from '../../components/Studio/Studio';



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
			{/* <Reviews /> */}
			<Brif />
		</div >
	);
};

export default Home;

