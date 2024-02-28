import React, {useContext, useState} from 'react'
import './movie-add-form.css'
import { Context } from '../context/index';

const MovieAddForm = ({addForm})=>{
  const [stat, setStat] = useState({name: '', viewers: ''})

  const {_, dispatch} = useContext(Context)

  const changeHandlerInput=(event)=>{
    setStat({...stat, [event.target.name]: event.target.value})
  }
    const addFormHandler=(e)=>{
      e.preventDefault()
      if(stat.name===''|| stat.viewers==='') return
      const data = {name: stat.name, viewers: stat.viewers}
      dispatch({type: "ADD_FORM", payload: data})
      setStat({name:'', viewers: ''})
    }
    return (
      <div className='movie-add-form mt-4'>
        <h3>Add new movie</h3>
        <form className='add-form d-flex' onSubmit={addFormHandler}>
          <input 
            type='text' 
            className='form-control new-post-label' 
            placeholder='What kind of movie?'
            name='name'
            value={stat.name}
            onChange={changeHandlerInput} 
          />
          <input 
            type='number' 
            className='form-control new-post-label' 
            placeholder="How many times has it been viewed?" 
            name='viewers'
            value={stat.viewers}
            onChange={changeHandlerInput}
          />
          <button type='submit' className='btn btn-outline-dark'>Add</button>
        </form>
      </div>
    )
    }


export default MovieAddForm
