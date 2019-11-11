import { observer } from 'mobx-react';
import  React from 'react';

export const TodoTask = observer( ( { todo } ) =>
  <li>
    <input
      type="checkbox"
      checked={ todo.completed }
      onClick={ todo.toggle }
    />
    { todo.title }
  </li>,
);