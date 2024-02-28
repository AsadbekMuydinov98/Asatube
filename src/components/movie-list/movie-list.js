import React, {useContext} from 'react'
import './movie-list.css'
import MovieListItem from '../movie-list-item/movie-list-item'
import { Context } from '../context'
import { filterHandler, searchHandler } from '../../utilities/data'

const MovieList = () => {
  const {state} = useContext(Context)
  
  const data = filterHandler(searchHandler(state.data, state.term), state.filtr)
  return (
    <div className='movie-list mt-4'>
      {
        data.map(item=>(
          <div key={item.id}>
            <MovieListItem 
              key={item.id}
              {...item}
            />
          </div>
        ))
      }
      
    </div>
  )
}

export default MovieList