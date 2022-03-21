export const searchReducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'FILTER_DATA':
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}
