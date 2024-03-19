import React, { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../Store/Hooks/hooks'
import Loading from '../Loading/Loading'
import Slider from 'react-slick'
import mask from '../../Assets/image/our_work_images/mask.png'
import './ReviewCard.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { fetchByGetListReviews } from '../../Store/slices/reviewsSlice'



const ReviewsCard: FC = () => {
	const dispatch = useAppDispatch()
	const { error, loading, review_list } = useAppSelector(state => state.review)
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	console.log(review_list)

	useEffect(() => {
		dispatch(fetchByGetListReviews())
	}, [dispatch])

	return (
		<div>
			<Slider {...settings}>
				{loading ? (
					<Loading />
				) : error ? (
					<p>{error}</p>
				) : (
					review_list?.length > 0 &&
					review_list?.map(item => (
						<div key={item.id} className='card'>
							<p className='card_text'>{item.reviews_description}</p>
							<div className='card_content'>
								<div className='content_img'>
									<img className='box' src={mask} alt='Box' />
									<img
										style={{
											width: '41.61px',
											height: '37.49px',
											objectFit: 'cover',
											borderRadius: '100%',
										}}
										className='img_ava'
										src={item.reviews_image}
										alt={item.reviews_company}
									/>
								</div>
								<div className='card_author'>
									<h3>{item.reviews_name}</h3>
									<h3>{item.reviews_company}</h3>
								</div>
							</div>
						</div>
					))
				)}
			</Slider>
		</div>
	)
}

export default ReviewsCard
