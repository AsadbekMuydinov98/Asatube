import {useContext, useState} from 'react'
import './search-panel.css'
import { Context } from '../context/index';

const SearchPanel=(props)=>{
  const [term, setTerm] = useState('')
  const {_, dispatch} = useContext(Context)

  const updateTermHandler = (e)=>{
    const term = e.target.value
    setTerm(term)
    dispatch({type: "ON_TERM", payload: term})
  }

  return (
    <input 
      type='text' 
      className='form-control search-input' 
      placeholder='Search...'
      onChange={updateTermHandler}
      value={term}
      name='term'
    />
  )
}


export default SearchPanel
