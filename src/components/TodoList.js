import React from 'react';
import { values } from 'mobx';
import store from '../store/RootStore';
import TodoItem from "./TodoItem";

const TodoList = () => (
  
  
    <div>           
        {values(store.todolist.list).map( (todo) => (
            <TodoItem todo={todo} key={ todo.id }>{todo}</TodoItem>          
        ) ) }
   </div>

)

export default TodoList;