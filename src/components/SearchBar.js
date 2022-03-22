import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { searchText } from '../redux/searchReducer'
import { setFilter } from '../redux/dataReducer'
const SearchBar = () => {
  const { text } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const handleSearch = e => {
    e.preventDefault()
    dispatch(searchText(e.target.value))
  }
  useEffect(() => {
    dispatch(setFilter(text))
  }, [dispatch, text])
  return (
    <div className='search-bar'>
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
