import { configureStore } from "@reduxjs/toolkit";
import simpsonsReducer from '../features/simpsonsSlice'

export const store = configureStore({
    reducer : {
        simpsons: simpsonsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch