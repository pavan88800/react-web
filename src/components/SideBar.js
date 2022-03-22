import React from 'react'
import RangeControl from './RangeControl'
import { useDispatch } from 'react-redux'
import { setActiveTab } from '../redux/dataReducer'
import List from './List'
import { flattenDeep } from 'lodash'
const SideBar = ({ data, search, activeTab, categories, filter }) => {
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <aside className='container__sidebar'>
        <nav>
          <ul>
            {categories.map(item => (
              <li
                key={item.category}
                onClick={() => {
                  dispatch(setActiveTab(item.category))
                }}
                className={activeTab === item.category ? 'active-filter' : ''}
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
          {search
            ? flattenDeep(filter).map((item, i) => <List item={item} key={i} />)
            : data.map(
                item =>
                  item.category === activeTab &&
                  item.images.map((item, i) => <List item={item} key={i} />)
              )}
        </div>
      </div>
    </div>
  )
}

export default SideBar
