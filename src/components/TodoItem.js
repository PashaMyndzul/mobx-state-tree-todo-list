import { observer } from 'mobx-react';
import  React from 'react';

//export const TodoTask = observer( ( { todo } ) =>
  //<li>
    //<input
      //type="checkbox"
      //checked={ todo.completed }
      //onClick={ todo.toggle }
    ///>
    //{ todo.title }
  //</li>,
//);
const TodoItem = observer( (props) => (
     
       <li 
       key={ props.todo.id }
       className={props.todo.isCompleted ? 'completed': undefined}
       onClick={() => props.todo.toggleComlpeted} >{props.todo.title} 
       </li>
    
))

export default TodoItem;