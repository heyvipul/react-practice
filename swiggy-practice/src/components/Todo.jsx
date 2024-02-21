import { useEffect, useState } from "react"


const Todo = () => {

    const[todo,setTodo] = useState([]);
    const[todoInput,setTodoInput] = useState("")
    const[editIndex,setEditIndex] = useState(null)
    const[editedTodo,setEditedTodo] = useState("")
    

    // console.log(todoInput);

    useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if(storedTodos){
        setTodo(storedTodos);
    }

    },[])

    useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo))

    },[todo])
    

    //add todo
    function addTodo(){
        setTodo([...todo,{text:todoInput,status:false}])
        setTodoInput(" ")
    }
    // console.log(todo);


    //toggle todo
    function toggleStatus(index){
        const newTodos = [...todo]
        newTodos[index].status = !newTodos[index].status
        setTodo(newTodos);
    }

    //delete todo
    function deleteTodo(index){
        const newTodos = [...todo]
        newTodos.splice(index,1)
        setTodo(newTodos)
    }

    //edit todo
    function startEdit(index){
        setEditIndex(index) 
    }
    
    function saveTodo(index){
        const newTodos = [...todo]
        newTodos[index].text = editedTodo;
        setTodo(newTodos)
        setEditIndex(null);
        setEditedTodo("");
    }


  return (
    <div>
        <h2>Todo</h2>
        <input onChange={(e)=>setTodoInput(e.target.value)} type="text" placeholder="create todo..." />
        <button onClick={addTodo}>Create</button>

        {
            todo?.map(function(ele,index){
                return <li className="todos" key={index}>
                
                 {editIndex == index ? <input onChange={(e)=>setEditedTodo(e.target.value)} type="text" /> : 
                    <span>{ele.text}</span>
                 }

                 {
                    editIndex == index ? <button onClick={()=>saveTodo(index)}>save</button> : 
                    <button onClick={()=>startEdit(index)}>edit</button>
                 }

                 <button onClick={()=>toggleStatus(index)}>{ele.status? "completed" : "not-completed"}</button>
                 <button onClick={()=>deleteTodo(index)}>delete</button>
                
                </li>
            })
        }
        
    </div>
  )
}

export default Todo