import React, { FC, useEffect } from 'react'
import s from './OurWorks.module.scss'
import banner from '../../Assets/image/our_work_images/unsplash_vbxyFxlgpjM.png'
import bg_fone from '../../Assets/image/our_work_images/bg_fone.png'
import banner2 from '../../Assets/image/our_work_images/Pattern.png'
import banner3 from '../../Assets/image/our_work_images/quotes.png'
import Form from '../Form/Form'
import ReviewsCard from '../../components/ReviewsCard/ReviewsCard'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks'
import { fetchByPhotos } from '../../Store/slices/portfolioSlice'
import Loading from '../../components/Loading/Loading'

const OurWorks: FC = () => {
	const dispatch = useAppDispatch()
	const { error, loading, photos } = useAppSelector(state => state.portfolio)
	useEffect(() => {
		dispatch(fetchByPhotos())
	}, [dispatch])

	return (
		<div className={s.content}>
			<div className={s.section_banner}>
				<img className={s.banner} src={banner} alt='Banner' />
				<div className={s.bg_banners}></div>
				<h1>
					портфолио <span>lior dev</span>
				</h1>
			</div>
			<div className={s.section_top}>
				<div className={s.section_top_text}>
					<img className={s.bg_fone} src={bg_fone} alt='bg_image' />
					<p>
						Наши проекты - это результат тесного взаимодействия с клиентами и
						глубокого понимания их потребностей. В портфолио представлены
						различные проекты, выполненные с учётом специфики бизнеса клиентов и
						последних трендов в веб-разработке и дизайне.
					</p>
				</div>
			</div>
			<div className={s.section_cards}>
				<div className={s.btn_card}>
					<button className={s.portfolio}>ПОРТФОЛИО</button>
					<a href="https://wa.me/996705121928"><button className={s.contact_us}>связаться с нами</button></a>
				</div>
				<div className={s.cards}>
					{loading ? (
						<Loading />
					) : error ? (
						<p>{error}</p>
					) : (
						photos?.length > 0 &&
						photos.map(item => (
							<div key={item.id} className={s.image_leor}>
								<img
									style={{ width: '400px', height: '289px' }}
									src={item.image}
									alt='Images'
								/>
							</div>
						))
					)}
				</div>
			</div>

			<div className={s.section_review}>
				<div className={s.review_top_block}>
					<h2>Отзывы клиентов</h2>
					<div className={s.review_content}>
						<img className={s.banner2} src={banner2} alt='banner' />
						<div className={s.r_content_text}>
							<img src={banner3} alt='banner' />
							<p>
								Мы гордимся положительными отзывами наших клиентов, которые
								подтверждают высокое качество нашей работы и профессионализм
								команды LiorDev.
							</p>
						</div>
					</div>
				</div>
				<div className={s.review_bottom_block}>
					<ReviewsCard />
				</div>
			</div>

			<div className={s.form}>
				<Form />
			</div>
		</div>
	)
}

export default OurWorks
