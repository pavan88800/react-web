const initialFilter = 'Butterfly'

export function filterReducer (filter = initialFilter, action) {
  switch (action.type) {
    case 'SET_FILTER': {
      return action.payload
    }
    default: {
      return filter
    }
  }
}
 