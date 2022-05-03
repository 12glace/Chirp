import { configureStore } from '@reduxjs/toolkit'
import  reducers  from "./reducers/index";

const store = configureStore({
    reducer: {
      allReducers: reducers,
    }
})

export default store;