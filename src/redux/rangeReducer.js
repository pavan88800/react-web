export const rangeValue = (state = { value: 0.5 }, action) => {
  switch (action.type) {
    case 'RANGE_VALUE_UPDATE':
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
