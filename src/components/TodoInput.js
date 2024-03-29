import React, { useState } from 'react'
import store from '../store/RootStore';

const TodoInput = () => {
    const [inputValue, setInputValue] = useState('');
    const  onChange = event => {setInputValue( event.target.value ) };
    const onSubmit = event => {
        event.preventDefault();
        if (inputValue === '') return;
        store.todolist.add(inputValue);
        setInputValue('');
    };
    return (
    <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={onChange} id="name" />
        <button type='submit'>add</button>
        
    </form>
    );
};  

export default TodoInput;

