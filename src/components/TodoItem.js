import { observer } from 'mobx-react';
import  React from 'react';
import '../index.css';
export const TodoItem = observer( ( { todo } ) =>
  <ul className='listEl'>
    <li  className={todo.isCompleted ? 'completed': undefined} >
      <span  onClick={todo.toggleCompleted}>{todo.title}</span>
      <button className="remove" onClick={todo.remove}>
        X
      </button>
    </li>
  </ul>
  );



export default TodoItem;