import React  from 'react';
import {ACTIONS} from './App';

const ToDo = ({todo, dispatch}) => {

  return (
    <div>
      <span style={{ color: todo.complete ? '#AAA' : '#000'}}>
        {todo.name}
      </span>
      <button onClick={() => dispatch({type: ACTIONS.COMPLETE_TODO, payload: {id: todo.id}})}>Toggle</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>Delete</button>
    </div>
  )
}

export default ToDo;
