import React from 'react';
import { observer } from 'mobx-react';
import  TodoInput  from './components/TodoInput';
import store from './store/RootStore';
import './index.css';
import TodoList from './components/TodoList';
import GroupInput from './components/GroupInput';
import GroupList from './components/GroupList';


function App() {
 
     return (
          <div>
            <div className='groupList'>
               <GroupList />
              <GroupInput />
              </div>
              <div className='todoList'>
               <h2>{store.todolist.completedTask}</h2>
               <TodoInput />
               <TodoList />
               </div>
          </div>
    
     );
}

export default observer(App);
