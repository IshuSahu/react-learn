import {configureStore} from '@reduxjs/toolkit'
import todoReducer  from '../features/app/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})