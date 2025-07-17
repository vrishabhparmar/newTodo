import {useState } from "react"

const todoList = [
    {
        id:1,
        todoName:'Task 1', 
        completed : false
    },
    {
        id:2,
        todoName:'Task 2', 
        completed: false
    }
]

export default function TodoComponent(){
    const [todo, setTodo] = useState([])
    const [value, setValue] = useState()

    const handleAdd = () => {
        if(value.trim !== "")
        {
            setTodo([
                ...todo,
            {
                id: Math.floor(Math.random() * 100), 
                name:value, 
                completed:false
            }]);
            setValue("");
        }
    }

    const handleDelete = (index) => {
        const newTodos = [...todo];
        const ind = todo.findIndex(val => val.id === index);
        newTodos.splice(ind, 1);
        setTodo(newTodos);
    }

    const toggleComplete = (index) => {
        const ind = todo.findIndex(val => val.id === index);
        //console.log(index);
        const newTodos = [...todo];
        newTodos[ind].completed = !newTodos[ind].completed;
        setTodo(newTodos);
    }

    return(
        <div class="todo">
           <h2 className="header">Todo App (Beginner)</h2> 
           <input className="todo-input" type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
           <button className="add-button" onClick={handleAdd} >Add</button>
           {todo.map((val) => { 
                return (
                    <div className="list-item" key={val.id}>
                        <span
                        onClick={() => toggleComplete(val.id)}
                        
                        style={{
                            textDecoration: val.completed ? 'line-through' : 'none'
                        }}>{val.name + ' '}</span>
                        <button className="delete-button" onClick={() => handleDelete(val.id)}>delete</button>
                        
                    </div>
                )
            })}
           
        </div>
    )
}