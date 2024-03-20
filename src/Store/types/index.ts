export type IFormData = {
	application_name: string
	application_company: string
	application_description: string
	application_number: string
	application_email: string
	application_offer: string
}

export type IReviewsData = {
	id: number
	reviews_company: string
	reviews_name: string
	reviews_description: string
	reviews_image: string
}



export type IPhotos = {
	id: number
	image: string
}

export type ServiseAbout = {
	offers_title: string
	offers_description: string
}

export type IPortfolioData = {
	id: number
	portfolio_description: string
	portfolio_image: string
}


export interface TeamMember {
	id: number;
	team_leordev_name: string;
	team_leordev_description: string;
	team_leordev_image: string;
	team_leordev_url_1?: string;
	team_leordev_url_2?: string;
	team_leordev_url_3?: string;
}