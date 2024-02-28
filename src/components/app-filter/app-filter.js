import './app-filter.css'
import { useContext } from 'react';
import { Context } from '../context/index';

const AppFilter=()=>{
  const {state, dispatch} = useContext(Context)
  return(
    <div className="btn-group mt-3">
      {btnArr.map((btn)=>(
        <button 
          key={btn.name}
          className={`btn ${state.filtr===btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => dispatch({ type: 'ON_FILTER', payload: btn.name })}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}

const btnArr = [
  {name: 'all', label: "All movies"},
  {name: 'popular', label: "Popular movies"},
  {name: 'mostViewers', label: "Most viewed movies"},
]
export default AppFilter