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
import RightCircle from '../../Assets/image/Ramilya/Rig.png'
import LeftCircle from '../../Assets/image/Ramilya/Ellipse 185.png'
import TopCircle from '../../Assets/image/Ramilya/topCircle.png'
import ReviewsCard from '../../components/ReviewsCard/ReviewsCard';




const Home: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchByGetPortfolio())
	}, [dispatch])

	return (
		<div className={s.Home}>
			<img className={s.LeftCircle} src={LeftCircle} alt="" />
			<img className={s.TopCircle} src={TopCircle} alt="" />
			<img className={s.RightCircle} src={RightCircle} alt="" />
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

