import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPhotos, IPortfolioData, IReviewsData } from '../types'
import { liorAPI } from '../../axios'

type PortfolioState = {
	portfolio_list: IPortfolioData[]
	photos: IPhotos[]
	loading: boolean
	error: null | string
}

const initialState: PortfolioState = {
	portfolio_list: [],
	photos: [],
	error: null,
	loading: false,
}

export const fetchByGetPortfolio = createAsyncThunk<
	IPortfolioData[],
	void,
	{ rejectValue: string }
>('portfolio/fetchByGetPortfolio', async (_, { rejectWithValue }) => {
	const res = await liorAPI.getPortfolio()
	console.log(res)

	if (res.status !== 200) {
		return rejectWithValue('Error')
	}

	return res.data as IPortfolioData[]
})

export const fetchByPhotos = createAsyncThunk<
	IPhotos[],
	void,
	{ rejectValue: string }
>('portfolio/fetchByPhotos', async (_, { rejectWithValue }) => {
	const res = await liorAPI.getPhotos()
	console.log(res)

	if (res.status !== 200) {
		return rejectWithValue('Error')
	}

	return res.data as IPhotos[]
})

const portfolioSlice = createSlice({
	name: 'portfolio',
	initialState,
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(fetchByGetPortfolio.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByGetPortfolio.fulfilled, (state, action) => {
			state.portfolio_list = action.payload
			state.loading = false
			state.error = null
		})
		addCase(fetchByGetPortfolio.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
		addCase(fetchByPhotos.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByPhotos.fulfilled, (state, action) => {
			state.photos = action.payload
			state.loading = false
			state.error = null
		})
		addCase(fetchByPhotos.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
	},
})

export default portfolioSlice.reducer
