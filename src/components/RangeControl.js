import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { handleRange } from '../redux/actions/rangeAction'
const RangeControl = () => {
  const dispatch = useDispatch()
  const range = useSelector(state => state.range.value)
  return (
    <div className='slider'>
      {range}
      <input
        type='range'
        orient='vertical'
        name={range}
        step={0.5}
        min={0}
        max={1}
        value={range}
        onChange={e => dispatch(handleRange(e.target.value))}
      />
    </div>
  )
}

export default RangeControl
