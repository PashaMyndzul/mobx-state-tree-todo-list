import { observer } from 'mobx-react';
import React from 'react';
import { values } from 'mobx';
import store from '../store/RootStore';
import Group from './Group';

const GroupList = () => (
  
    <ul>           
        {values(store.groupslist.list).map( (todos) => (
            <Group todos={todos} key={ todos.id }>{todos}</Group>          
        ) ) }
   </ul>

)

export default observer(GroupList);