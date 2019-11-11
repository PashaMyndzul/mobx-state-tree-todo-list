import React from 'react';
import { values } from 'mobx';
import { observer } from 'mobx-react';
//import  TodoItem  from './components/TodoItem';
import {TodoListTask} from './components/TodoInput';
//import { Icon } from './components/Icon';
import store from './store/RootStore';
import './index.css';

function App() {
 
     return (
          <div>
               <ul>

                    {values(store.todos.list).map( (todo) => (
                        <li 
                        key={ todo.id }
                        className={todo.isCompleted ? 'completed': undefined}
                        onClick={() => todo.toggleComlpeted()} >{todo.title} 
                        </li>
                    ) ) }

               </ul>
               <button type='button' onClick={() => store.todos.add('oil') }>ADD </button>
              
          </div>
    
     );
}

export default observer(App);
