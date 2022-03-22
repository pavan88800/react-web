import React from 'react'
import { useSelector } from 'react-redux'
const List = ({ item }) => {
  const range = useSelector(state => state.range.Opacity)
  return (
    <div className='col-md-4'>
      <div className='card mt-3 mb-2' style={{ width: '17rem' }}>
        <img
          src={item.image}
          className='card-img-top'
          alt={item.text}
          style={{ opacity: range }}
        />
        <div className='card-body'>
          <p className='text-lowercase text-center '>{item.text}</p>
        </div>
      </div>
    </div>
  )
}

export default List
