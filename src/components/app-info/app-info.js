import React, { useContext } from 'react'
import './app-info.css'
import { Context } from '../context/index';

const AppInfo = ({allMoviesCount, favouriteMoviesCount }) => {
  const {state} = useContext(Context)
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Number of all movies: {state.data.length}</p>
      <p className='fs-4 text-uppercase'>Number of favorite movies: {state.data.filter(elem=>elem.favourite).length}</p>
    </div>
  )
}

export default AppInfo