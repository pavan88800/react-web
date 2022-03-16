import React, { useState } from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { useSelector, useDispatch } from 'react-redux'
const RangeControl = () => {
  const range = useSelector(state => state.range.value)

  console.log(range, 'coming from redux toolkit')

  const handleChange = value => {
    setValue(value)
  }

  return (
    <div className='slider'>
      <div className='slider-group'>
        <Slider
          min={0}
          orientation='vertical'
          max={100}
          value={range}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default RangeControl
