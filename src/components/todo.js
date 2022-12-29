import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todoSlice";

const Todo = () => {
    const [ task, setTask ] = useState('');
    const todos = useSelector((state)=> state.todos);
    const dispatch = useDispatch();
    return (
        <div>
            {todos.map(todo => (
                <ul key={todo.item}>
                    <li>{todo.item}</li>
                </ul>
            ))}
            <input type="text" value={task} onChange={(e)=> setTask(e.target.value)}/>
            <button onClick={()=> { dispatch(addTodo(task)); setTask('')}}>add</button>
        </div>
    )
}

export default Todo;