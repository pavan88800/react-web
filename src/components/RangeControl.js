import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { useSelector, useDispatch } from 'react-redux'
import { handleRange } from '../redux/actions/rangeAction'
const RangeControl = () => {
  const dispatch = useDispatch()
  const range = useSelector(state => state.range.value)
  console.log(range, 'coming from redux toolkit')
  console.log(range)

  return (
    <div className='slider'>
      <div className='slider-group'>
        <Slider
          min={0}
          orientation='vertical'
          max={100}
          value={range}
          onChange={() => dispatch(handleRange(range + 0.1))}
        />
      </div>
    </div>
  )
}

export default RangeControl
