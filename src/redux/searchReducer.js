export const searchReducer = (state = { text: '' }, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        text: action.payload
      }
    default:
      return state
  }
}
