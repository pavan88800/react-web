import React from 'react'
import RangeControl from './RangeControl'
import { useSelector, useDispatch } from 'react-redux'
const SideBar = () => {
  const { text } = useSelector(state => state.search)
  const range = useSelector(state => state.range.value)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const value = useSelector(state => state)
  console.log(value.data.filterData)
  console.log(value.data.data)
  const Data = useSelector(state => {
    switch (filter) {
      case 'Butterfly': {
        return state.data?.data?.Butterfly.map(item => item)
      }
      case 'Cars': {
        return state.data?.data?.Cars.map(item => item)
      }
      case 'Cellphone': {
        return state.data?.data?.Cellphone.map(item => item)
      }
      case 'Office': {
        return state.data?.data?.Office.map(item => item)
      }
      default: {
        return state.data?.data
      }
    }
  })

  return (
    <div className='container'>
      <aside className='container__sidebar'>
        <nav>
          <ul>
            {value.data.category.map(item => (
              <li
                key={item}
                onClick={() => {
                  dispatch({
                    type: 'SET_FILTER',
                    payload: item
                  })
                }}
                className={filter === item ? 'active-filter' : ''}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <RangeControl />
      </aside>

      <div className='container ml-5 container__main'>
        <div className='row'>
          {value.data.loading && (
            <div
              className='spinner-border text-center '
              role='status'
              style={{ fontSize: 30, margin: 100 }}
            >
              <span className='sr-only'>Loading...</span>
            </div>
          )}

          {Data.map((item, index) => (
            <div className='col-md-4' key={index}>
              <div
                className='card mt-3 mb-2'
                style={{ width: '17rem', opacity: range }}
              >
                <img
                  src={item?.image}
                  className='card-img-top'
                  alt={item?.text}
                />
                <div className='card-body'>
                  <p className='text-lowercase text-center '>{item?.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
