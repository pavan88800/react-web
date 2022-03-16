import data from '../data.json'
const initialFoods = data

export const DataReducer = (state = initialFoods, action) => {
  switch (action.type) {
    case 'DISPLAY_DATA':
      return {
        ...state
      }
    default:
      return state
  }
}
