import { useState, useEffect } from 'react';


const Todo = ({ description, done, onChangeTodo, index }) => {



    return (
        <div>
            <h2 className={done ? 'toDone' : 'toDo'} onClick={() => {
                onChangeTodo(index)
            }}>{description}</h2>
        </div>
    );
}

export default Todo;