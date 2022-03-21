import Data from '../data'

export const DataReducer = (
  state = {
    loading: true,
    Data: Data,
    filter: Data
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
      let data = action.payload.map(item => item)
      return {
        ...state,
        loading: false,
        Data: data
      }

    case 'FILTER_DATA':
      let filterData = Data.map(item => item)

      if (action.payload) {
        filterData = filterData.map(item =>
          item.images.filter(el =>
            el.text.toLowerCase().includes(action.payload.toLowerCase())
          )
        )
      }

      return {
        ...state,
        loading: false,
        filter: filterData
      }

    default:
      return state
  }
}
