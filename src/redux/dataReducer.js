import Data from '../data'

export const DataReducer = (
  state = {
    loading: true,
    category: ['Butterfly', 'cars', 'cellphone', 'office'],
    Data: Data
  },
  action
) => {
  switch (action.type) {
    case 'REQUEST_DATA':
      return {
        ...state,
        loading: true
      }
    case 'DISPLAY_DATA':
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    default:
      return state
  }
}
