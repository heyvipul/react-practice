import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit,AiFillDelete  } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css"
import { Draggable } from 'react-beautiful-dnd';

type Props = {
    index: number
    todo: Todo | undefined;  // i make changes here because of todo undefined error
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>> 
}

const SingleTodo = ({index,todo,todos,setTodos} : Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editTodos, setEditTodos] = useState<string>(todo?.todo || "")  //

  const inputRef = useRef<HTMLInputElement>(null)

  console.log('todo in SingleTodo:', todo);

  //isDone functinality right tick

  const handleDone = (id:number) =>{
    setTodos(todos.map((ele)=>(
      ele.id === id?{...ele,isDone:!ele.isDone}:ele
    )))
  }

  //delete functionality 

  const handleDelete =(id:number) =>{
    setTodos(todos.filter((todo)=>todo.id !== id))
  }

  //edit submit functionality 

  const handleSubmit = (e:React.FormEvent,id:number) =>{
    e.preventDefault();
    setTodos(todos.map((todo)=>(
      todo.id === id?{...todo,todo:editTodos}:todo
    )))
    setEdit(false)
  }

  useEffect(()=>{
    inputRef.current?.focus()
  },[edit])


  return (
    //
    <Draggable draggableId={todo?.id?.toString() || ""} index={index}>   
      {
        (provided)=>(
          <form className='todos_single' onSubmit={(e)=>handleSubmit(e,todo?.id || 0)} //
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          >

      {
        edit? (
          <input value={editTodos} type="text" 
          ref={inputRef}
          className='todos_single--text'
            onChange={(e)=>setEditTodos(e.target.value)} />
        ) :(
          //
          todo?.isDone? (
            <s className="todos_single--text">{todo.todo}</s>
          ) : (
            <span className="todos_single--text">{todo?.todo || ""}  
            </span>  //
        )
        )
      }

        <div>
            <span className='icon'
            onClick={()=> {if(!edit && !todo?.isDone){  //
              setEdit(!edit)}}
            }><AiFillEdit/></span>

            <span className='icon'  //
            onClick={()=>handleDelete(todo?.id || 0)}><AiFillDelete/></span>  

            <span className='icon'  //
            onClick={()=>handleDone(todo?.id || 0)}><MdDone/></span> 
        </div>

    </form>
        )
      }
    </Draggable>
  )
}

export default SingleTodo