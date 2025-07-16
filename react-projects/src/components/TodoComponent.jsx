const todoList = [
    {
        id:1,
        todoName:'Task 1'
    },
    {
        id:2,
        todoName:'Task 2'
    }
]

export default function TodoComponent(){

    return(
        <>
           <h2>Todo App </h2> 
           <input type="text"></input>
           <button>Add</button>
           {todoList.map((val) => { 
                return (
                    <>
                        <p key={val.id}>{val.todoName}</p>
                        <button key={val.id}>delete</button>
                    </>
                )
            })}
        </>
    )
}