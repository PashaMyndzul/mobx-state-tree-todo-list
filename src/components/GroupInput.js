import React, { useState } from 'react'
import store from '../store/RootStore';

const GroupInput = () => {
    const [inputValue, setInputValue] = useState('');
    const  onChange = event => {setInputValue( event.target.value ) };
    const onSubmit = event => {
        event.preventDefault();
        if (inputValue === '') return;
        store.groupslist.add(inputValue);
        setInputValue('');
    };
    return (
    <form onSubmit={onSubmit}>
        <input type="text" value={inputValue} onChange={onChange} id="name" />
        
        <button type='submit'>add</button>
        
    </form>
    );
};  

export default GroupInput;


//<input value={props.value} onChange={onChange} />