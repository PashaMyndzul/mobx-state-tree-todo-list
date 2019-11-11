
import { types as t } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import { TodoListModel } from './TodoStore';
import { GroupListModel } from './GroupStore';



 const RootStore = t
  .model( 'RootStore', {
    todos: t.optional(  TodoListModel, {} ),
    groups: t.optional( GroupListModel , {} ),
  }  );
  
 const rootStore = RootStore.create( {} );
 rootStore.todos.add('sss')
 const todo =rootStore.todos.list[0];
 todo.toggleCompleted();

export default rootStore;