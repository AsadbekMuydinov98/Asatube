import './App.css';
import { useContext, useEffect, useState } from 'react';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import MovieList from '../movie-list/movie-list';
import MovieAddForm from '../movie-add-form/movie-add-form';
import { Context } from '../context/index';

const App =()=>{
  const [isLoading, setIsLoading] = useState(false)
  const {_, dispatch} = useContext(Context)
  

	useEffect(() => {
		setIsLoading(true)
		fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
			.then(response => response.json())
			.then(json => {
				const newArr = json.map(item => ({
					name: item.title,
					id: item.id,
					viewers: item.id * 10,
					favourite: false,
					like: false,
				}))
				dispatch({ type: 'GET_DATA', payload: newArr })
			})
			.catch(err => console.log(err))
			.finally(() => setIsLoading(false))
	}, [])



    return (
      <div className="app font-monospace">
        <div className='content'>
          <AppInfo />
          <div className='searchPanel'>
            <SearchPanel />
            <AppFilter />
          </div>
          {isLoading && 'Loading..'}
          <MovieList/>
          <MovieAddForm />
        </div>
      </div>
    );
}

export default App;
