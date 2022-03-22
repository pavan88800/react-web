import Data from '../data.json'
import { useDispatch } from 'react-redux'
import { setActiveData } from './dataReducer'
export const FetchData = () => {
  const dispatch = useDispatch()
  return new Promise(resolve => {
    setTimeout(() => resolve(dispatch(setActiveData(Data))), 1500)
  })
}
