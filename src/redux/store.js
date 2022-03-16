import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { rangeValue } from './rangeReducer'
import { filterReducer } from './filterReducer'
import { DataReducer } from './dataReducer'
import { searchReducer } from './searchReducer'
const middleware = [thunk]

const reducer = combineReducers({
  range: rangeValue,
  filter: filterReducer,
  data: DataReducer,
  search: searchReducer
})
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
