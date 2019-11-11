import React from 'react';
import { TodoTask } from './TodoTask';
import { observer } from 'mobx-react';

export const TodoListTask =  (props) => {
    let newTodo = '';
    const { todoStore } = props;
    const handleChange = (e) => {
        newTodo = e.target.value;
      };
    
      const handleNewTodoClick = (e) => {
        
        todoStore.addTodo(newTodo);
        newTodo = '';
      };

      
    return (
        <div>
        <input value={newTodo} onChange={handleChange} />
        <button onClick={handleNewTodoClick}>Add</button>
        <ul>
          {todoStore.todos.map(todo => <TodoTask todo={todo} key={todo.id} />)}
        </ul>
        Tasks left: {todoStore.completedTask}
      </div>
    );
       
};
