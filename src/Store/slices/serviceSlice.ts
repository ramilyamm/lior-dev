import React from 'react';
import { liorAPI } from '../../axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ServiseAbout } from '../types';

type ServiceState = {
    error: null | string | undefined
    loading: boolean
    serivice: ServiseAbout | null
}

const initialState: ServiceState = {
    error: null,
    loading: false,
    serivice: null
}

export const fetchByServiceMain = createAsyncThunk<ServiseAbout, void, { rejectValue: string }>(
    '_,fetchByServiceMain',
    async (_, { rejectWithValue }) => {
        const res = await liorAPI.getService()
        console.log(res);
        if (res.status !== 200) {
            return rejectWithValue('Server error')
        }
        return res.data[0] as ServiseAbout
    }
)

const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByServiceMain.pending, (state) => {
            state.error = null
            state.loading = true
        })
        addCase(fetchByServiceMain.fulfilled, (state, action) => {
            state.serivice = action.payload
            state.loading = false
        })
        addCase(fetchByServiceMain.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 not found!'
            }
            else {
                state.error = action.payload
            }
        })
    }
})

export default serviceSlice.reducer