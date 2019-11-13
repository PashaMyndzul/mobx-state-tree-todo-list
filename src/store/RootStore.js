
import { types as t } from 'mobx-state-tree';

import { TodoListModel } from './TodoStore';
import { GroupListModel } from './GroupStore';




 const RootStore = t
  .model( 'RootStore', {
    todolist: t.optional(  TodoListModel, {} ),
    groupslist: t.optional( GroupListModel , {} ),
  }  );
  
 const rootStore = RootStore.create( {} );
rootStore.groupslist.add('Важливі завдання');
rootStore.groupslist.add('Завдання');
rootStore.groupslist.add('Групи');
export default rootStore;