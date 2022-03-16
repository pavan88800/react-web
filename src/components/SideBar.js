import React from 'react'
import RangeControl from './RangeControl'
import { useSelector, useDispatch } from 'react-redux'
const SideBar = () => {
  const { text } = useSelector(state => state.search)
  const range = useSelector(state => state.range.value)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const value = useSelector(state => state.data)
  const Data = useSelector(state => {
    switch (filter) {
      case 'Butterfly': {
        return state.data.Butterfly.map(item => item)
      }
      case 'Cars': {
        return state.data.Cars.map(item => item)
      }
      case 'Cellphone': {
        return state.data.Cellphone.map(item => item)
      }
      case 'Office': {
        return state.data.Office.map(item => item)
      }
      default: {
        return state.data
      }
    }
  })

  // let search = value.Cars.filter(item => item.text.toLowerCase().includes(text))
  // console.log(search)
  return (
    <div className='container'>
      <aside className='container__sidebar'>
        <nav>
          <ul>
            <li
              onClick={() => {
                dispatch({
                  type: 'SET_FILTER',
                  payload: 'Butterfly'
                })
              }}
            >
              ButterFly
            </li>
            <li
              onClick={() => {
                dispatch({
                  type: 'SET_FILTER',
                  payload: 'Cars'
                })
              }}
            >
              Cars
            </li>
            <li
              onClick={() => {
                dispatch({
                  type: 'SET_FILTER',
                  payload: 'Cellphone'
                })
              }}
            >
              Cellphones
            </li>
            <li
              onClick={() => {
                dispatch({
                  type: 'SET_FILTER',
                  payload: 'Office'
                })
              }}
            >
              Office
            </li>
          </ul>
        </nav>
        <RangeControl />
      </aside>

      <div className='container__main'>
        {Data.map((item, index) => (
          <div key={index}>
            <img
              style={{ opacity: range }}
              alt='img'
              className='ml-30 mt-20'
              src={item?.image}
              width={450}
            />
            <h3 style={{ textAlign: 'center' }}>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideBar
