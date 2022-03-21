import React from 'react'
import { fetchData, searchAction } from '../redux/actions/searchAction'
import { useSelector, useDispatch } from 'react-redux'
import data from '../data'
const SearchBar = () => {
  const { text } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const handleSearch = e => {
    e.preventDefault()
    dispatch(searchAction(e.target.value))
  }
  dispatch(fetchData(data))
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '3px solid #000',
        padding: '20px',
        paddingTop: '20px'
      }}
    >
      <input
        type='text'
        placeholder='Search '
        name={text}
        onChange={handleSearch}
        style={{
          width: '450px',
          padding: '10px'
        }}
      />
    </div>
  )
}

export default SearchBar
