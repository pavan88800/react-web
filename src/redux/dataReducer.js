import data from '../data'
const initial = data
console.log(data)
export const DataReducer = (
  state = {
    loading: true,
    data: initial,
    category: ['Butterfly', 'Cars', 'Cellphone', 'Office'],
    filterData: [
      {
        text: 'Butterfly',
        image:
          'https://media.istockphoto.com/photos/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-picture-id1297349747?b=1&k=20&m=1297349747&s=170667a&w=0&h=oH31fJty_4xWl_JQ4OIQWZKP8C6ji9Mz7L4XmEnbqRU='
      },
      {
        text: 'Cars',
        image:
          'https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o='
      },
      {
        text: 'Cellphone',
        image: 'https://m.media-amazon.com/images/I/61QkJNx846L._SL1200_.jpg'
      },
      {
        text: 'Office',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/0/09/Channel_1_Israel_DSC0021.jpg'
      }
    ]
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
