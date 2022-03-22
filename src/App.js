import './App.css'
import { useEffect } from 'react'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchApiData } from '../src/redux/dataReducer'
function App () {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.data.loading)
  const data = useSelector(state => state.data.activedata)
  const activeTab = useSelector(state => state.data.activeTab)
  const search = useSelector(state => state.search.text)
  const categories = useSelector(state => state.data.categories)
  const filter = useSelector(state => state.data.filter)

  useEffect(() => {
    dispatch(fetchApiData())
  }, [dispatch])

  return (
    <div className='App'>
      <SearchBar />
      {loading ? (
        <div className='spinner-border text-center ' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      ) : (
        <div>
          <SideBar
            data={data}
            search={search}
            activeTab={activeTab}
            categories={categories}
            filter={filter}
          />
        </div>
      )}
    </div>
  )
}

export default App
