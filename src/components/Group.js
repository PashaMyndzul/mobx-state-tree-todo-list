import { observer } from 'mobx-react';
import  React from 'react';
import '../index.css';
export const Group = observer( ( { todos } ) =>
    <li >
      <i>{todos.title}</i>
      <button className="x" onClick={todos.remove}>
        X
      </button>
    </li>
  );



export default Group;