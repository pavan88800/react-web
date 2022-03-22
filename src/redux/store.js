import { configureStore } from '@reduxjs/toolkit'
import rangeValueSlice from './rangeReducer'
import DataReducer from './dataReducer'
import searchSlice from './searchReducer'

const store = configureStore({
  reducer: {
    range: rangeValueSlice,
    data: DataReducer,
    search: searchSlice
  }
})

export default store
