import React from 'react'

const SearchBar = () => {
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
        style={{
          width: '450px',
          padding: '10px'
        }}
      />
    </div>
  )
}

export default SearchBar
