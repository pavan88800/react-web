import Data from '../data'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchData } from './api'
const initialState = {
  loading: false,
  categories: Data,
  activeTab: 'Butterfly',
  activedata: Data,
  filter: Data
}
export const fetchApiData = createAsyncThunk('/fetch-data', async () => {
  const response = await FetchData()
  return response.data
})
export const DataReducer = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      if (action.payload) state.activeTab = action.payload
    },
    setActiveData: (state, action) => {
      if (action.payload) {
        state.loading = true
        state.activedata = action.payload.map(item => item.images)
        state.loading = false
      }
    },
    setCategories: (state, action) => {
      if (action.payload) {
        state.loading = true
        state.categories = state.categories.map(item => item.category)
        state.loading = false
      }
    },
    setFilter: (state, action) => {
      let filterData = state.activedata.map(item => item)
      if (action.payload) {
        state.filter = filterData.map(item =>
          item.images.filter(el =>
            el.text.toLowerCase().includes(action.payload.toLowerCase())
          )
        )
      }
    }
  }
})

export const {
  setActiveTab,
  setActiveData,
  setCategories,
  setFilter
} = DataReducer.actions

export default DataReducer.reducer
