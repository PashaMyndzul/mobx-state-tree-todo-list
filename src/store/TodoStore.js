
import uuid from 'uuid/v4';
import { types as t } from 'mobx-state-tree';

export const TodoModel = t
  .model( 'TodoModel', {
    id: t.optional(t.number, () => Math.random()),
    title: t.string,
    isCompleted: t.optional( t.boolean, false ),
    isFavorite: t.optional( t.boolean, false ),
  } )
  .actions( ( store ) => ( { 
    toggleCompleted() {
      store.isCompleted = !store.isCompleted
    },
    toggleFavorite() {
      store.isFavorite = !store.isFavorite
    },
  } ) )
  
  export const TodoListModel = t
  .model( 'TodoListModel', {
    todos:  t.array(TodoModel),
  } )
  .views( (store) => ( {
    get favoriteList() {
      return store.todos.filter( item => item.isFavorite );
    },
    get completedTask() {
      return store.todos.filter( todo => todo.isCompleted).length;
    },
  } ) )
  .actions( (store) => ( {
    add(title) {
      const todo =  {
        id: uuid(),
        title,
       
      } ;
      store.todos.unshift(todo);
    },
  } ) );

