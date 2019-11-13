
import uuid from 'uuid/v4';
import { types as t, getParent } from 'mobx-state-tree';

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
    remove() {
      store.isCompleted = !store.isCompleted
      ? alert('Завдання повинно бути виконано перед видаленням') 
      : getParent(store, 2).remove(store);
    },
    toggleFavorite() {
      store.isFavorite = !store.isFavorite;
    },
  } ) );
  
  export const TodoListModel = t
  .model( 'TodoListModel', {
    list:  t.array(TodoModel),
  } )
  .views( ( store ) => ( {
    get favoriteList() {
      return store.list.filter( item => item.isFavorite );
    },
    get completedTask() {
      return "Кількість невиконаних завдань: " + this.list.length;
    },
  } ) )
  .actions( (store) => ( {
    add( title ) {
      const todo =  {
        id: uuid(),
        title,
       
      } ;
      store.list.unshift(todo);
    },
    remove( todo ){
      store.list.splice(store.list.indexOf( todo ) , 1 );
    }
  } ) );
