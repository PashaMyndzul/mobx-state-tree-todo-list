import React from 'react'

const TodoInput = (props) => (
    <form onSubmit={props.handleSubmit}>
        <input value={props.value} onChange={props.handleChange} />
        <input type='submit' value='Add' />
    </form>
);  

export default TodoInput;