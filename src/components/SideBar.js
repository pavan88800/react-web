import React from 'react'
import RangeControl from './RangeControl'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
const SideBar = () => {
  const { text } = useSelector(state => state.search)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const value = useSelector(state => state)

  const product = () => {
    let data = value.data.Data
    if (text) {
      data = data.map(item =>
        item.images.filter(el =>
          el.text.toLowerCase().includes(text.toLowerCase())
        )
      )
    }
    return data
  }

  let ListData = product().flat(3)

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
          {/* filter Data */}
          {text && ListData.map((item, i) => <List item={item} key={i} />)}
          {/* display the Data  */}
          {product().map(
            item =>
              item.category === filter &&
              item.images.map((item, i) => <List item={item} key={i} />)
          )}
        </div>
      </div>
    </div>
  )
}

export default SideBar
