import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  Opacity: 0.5
}
export const rangeValueSlice = createSlice({
  name: 'range',
  initialState,
  reducers: {
    rangeValue: (state, action) => {
      state.Opacity = action.payload
    }
  }
})

export const { rangeValue } = rangeValueSlice.actions

export default rangeValueSlice.reducer
