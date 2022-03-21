import React from 'react'
import RangeControl from './RangeControl'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
const SideBar = () => {
  const { text } = useSelector(state => state.search)
  const filters = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const value = useSelector(state => state)
  let { Data, filter } = value.data
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
                className={filters === item.category ? 'active-filter' : ''}
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
          {text
            ? filter.flat(3).map((item, i) => <List item={item} key={i} />)
            : Data.map(
                item =>
                  item.category === filters &&
                  item.images.map((item, i) => <List item={item} key={i} />)
              )}
        </div>
      </div>
    </div>
  )
}

export default SideBar
