import { configureStore } from '@reduxjs/toolkit'
import {AppReducer} from './reducer';

export default configureStore({
    reducer: {AppReducer},
})