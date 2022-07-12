import Todo from "./Todo";
import { useState, useEffect } from 'react';


const alltodos = [
    { description: "einkaufen" },
    { description: "coding" },
    { description: "more coding" }
]



const TodoList = () => {

    const [opentodo, setOpentodo] = useState(0);
    const [todos, setTodos] = useState(alltodos)

    const countOpenTodos = () => {
        const doneTodos = todos.filter((item) => {
            return !item.done
        })
        setOpentodo(doneTodos.length)
    }

    const changeTodo = (index) => {
        const newTodos = [...todos]
        if (newTodos[index].done) {
            newTodos[index].done = false
        } else {
            newTodos[index].done = true
        }
        setTodos(newTodos)
    }

    useEffect(() => {
        countOpenTodos();
    }, [todos])

    const addTodo = () => {
        let input = document.getElementById('input-todo').value
        setTodos([...todos, { description: input }])
        console.log(todos);
    }

    return (
        <div>
            <h1>What to do</h1>
            <input type="text" name="" id="input-todo" />
            <button onClick={addTodo}>+</button>
            {todos.map((ele, i) => {
                return <Todo
                    description={ele.description}
                    done={ele.done}
                    key={i}
                    onChangeTodo={changeTodo}
                    index={i} />
            })}
            <h2>Open todos: {opentodo}</h2>
        </div>
    );
}

export default TodoList;