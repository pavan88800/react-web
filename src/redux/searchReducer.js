import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  text: ''
}

export const searchSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    searchText: (state, action) => {
      state.text = action.payload
    }
  }
})

export const { searchText } = searchSlice.actions

export default searchSlice.reducer
