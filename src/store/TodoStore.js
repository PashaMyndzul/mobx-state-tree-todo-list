
import uuid from 'uuid/v4';
import { types as t } from 'mobx-state-tree';

export const TodoModel = t
  .model( 'TodoModel', {
    id: t.identifier,
    title: t.string,
    isCompleted: t.optional( t.boolean, false ),
    isFavorite: t.optional( t.boolean, false ),
  } )
  .actions( ( store ) => ( { 
    toggleCompleted() {
      store.isCompleted = !store.isCompleted;
    },
    toggleFavorite() {
      store.isFavorite = !store.isFavorite;
    },
  } ) );
  
  export const TodoListModel = t
  .model( 'TodoListModel', {
    list:  t.array(TodoModel),
  } )
  .views( (store) => ( {
    get favoriteList() {
      return store.list.filter( item => item.isFavorite );
    },
    get completedTask() {
      return store.list.filter( todo => todo.isCompleted).length;
    },
  } ) )
  .actions( (store) => ( {
    add(title) {
      const todo =  {
        id: uuid(),
        title,
       
      } ;
      store.list.unshift(todo);
    },
  } ) );
///const todoList = TodoListModel.create();
//  export default  todoStore;