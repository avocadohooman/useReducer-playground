import React, {useReducer, useState} from 'react';
import ToDo from './ToDo';

export const ACTIONS = {
  ADD_TODO: 'addTodo',
  COMPLETE_TODO: 'completeTodo',
  DELETE_TODO: 'deleteTodo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.COMPLETE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    case ACTIONS.DELETE_TODO:
        return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

const newTodo = (name) => {
  return {id: Date.now(), name: name, complete: false}
}

const App = () => {

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: { name: name }});
    setName("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="test" value={name} onChange={e => setName(e.target.value)} />
        </form>
        {todos.map(todo => {
            return <ToDo key={todo.id} todo={todo} dispatch={dispatch}/>})}
    </div>
  )
}

export default App;
