import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'value',
  initialState: {
    value: 10
  },

  reducers: {
    handleChange: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { handleChange } = counterSlice.actions

export default counterSlice.reducer
