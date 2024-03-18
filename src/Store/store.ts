import { configureStore } from "@reduxjs/toolkit"
import infoSlice from "./slices/infoSlice"
import reviewsSlice from "./slices/reviewsSlice"
import portfolioSlice from "./slices/portfolioSlice"
import serviceSlice from "./slices/serviceSlice"



const store = configureStore({
    reducer: {
        info: infoSlice,
        review: reviewsSlice,
        portfolio: portfolioSlice,
        service: serviceSlice
    }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch