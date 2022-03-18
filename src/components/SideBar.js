import React from 'react'
import RangeControl from './RangeControl'
import { useSelector, useDispatch } from 'react-redux'
const SideBar = () => {
  const { text } = useSelector(state => state.search)
  const range = useSelector(state => state.range.value)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const value = useSelector(state => state)

  return (
    <div className='container'>
      <aside className='container__sidebar'>
        <nav>
          <ul>
            {value.data.Data.map(item => (
              <li
                key={item.category}
                onClick={() => {
                  dispatch({
                    type: 'SET_FILTER',
                    payload: item.category
                  })
                }}
                className={filter === item.category ? 'active-filter' : ''}
              >
                {item.category}
              </li>
            ))}
          </ul>
        </nav>
        <RangeControl />
      </aside>

      <div className='container ml-5 container__main'>
        <div className='row'>
          {/* Loader */}
          {value.data.loading && (
            <div
              className='spinner-border text-center '
              role='status'
              style={{ fontSize: 30, margin: 100 }}
            >
              <span className='sr-only'>Loading...</span>
            </div>
          )}
          {/* display the Data  */}
          {value.data.Data.map(
            item =>
              item.category === filter &&
              item.images.map((item, i) => (
                <div className='col-md-4' key={i}>
                  <div className='card mt-3 mb-2' style={{ width: '17rem' }}>
                    <img
                      src={item?.image}
                      className='card-img-top'
                      alt={item?.text}
                      style={{ opacity: range }}
                    />
                    <div className='card-body'>
                      <p className='text-lowercase text-center '>
                        {item?.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SideBar
