
import uuid from 'uuid/v4';
import { types as t } from 'mobx-state-tree';

import { TodoModel } from './TodoStore';


const GroupModel = t
  .model( 'GroupModel', {
    id: t.string,
    title: t.string,
    todos: t.array( t.reference( TodoModel ), [] ),
    
  } )
  .actions( ( store ) => ( { 
    addTodo( todo ) {
      store.todos.unshift( todo );
    },
  } ) );
  
export const GroupListModel = t
  .model( 'GroupListModel', {
    list:  t.array( GroupModel ),
  } )
  //.views( (store) => ( {
    //get favoriteList() {
      //return store.list.filter( item => item.isFavorite );
    //},
  //} ) )
  .actions( (store) => ( {
    add(title) {
      const group =  {
        id: uuid(),
        title,
      } ;
      store.list.unshift(group);
    },
  } ) );



