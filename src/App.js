import React from 'react';
import { values } from 'mobx';
import { observer } from 'mobx-react';
import { TodoListModel } from './store/TodoStore';
import {TodoListTask} from './components/TodoListTask';
//import { Icon } from './components/Icon';
import {TodoTask} from './components/TodoTask';
//import {store} from './store/TodoStore';

const store = TodoListModel.create({
  todos: [
    {
      title: "Get Coffee"
    },
    {
      title: "Write simpler code"
    }
  ]
});
function App() {

     return (
          <div>
              
              <TodoListTask todoStore={store} />
              
          </div>
    
     );
}

export default observer(App);
