import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './model';
import TodoList from './components/TodoList';
import { DragDropContext, DropResult } from "react-beautiful-dnd"


const App : React.FC =() => {

  const [todo,setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completed, setCompleted] = useState<Todo[]>([])

  // console.log(todo);

  const handleAdd = (e:React.SyntheticEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }

  //function for drag and drop

  const onDragEnd = (result:DropResult) =>{
    const {source,destination} = result;

    if(!destination) return
    if(destination.droppableId === source.droppableId &&
      destination.index === source.index) return ;

    let add,
    active = todos,
    complete = completed

    if(source.droppableId === "TodoList"){
      add = active[source.index];
      active.splice(source.index,1)
    }else{
      add = complete[source.index]
      complete.splice(source.index,1)
    }

    if(destination.droppableId === "TodoList"){
      active.splice(destination.index,0,add)
    }else{
      complete.splice(destination.index,0,add)
    }
    setCompleted(complete);
    setTodos(active)   
  }
 

  return (
    <DragDropContext onDragEnd={onDragEnd}> 
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} 
      completed={completed}
      setCompleted={setCompleted}
      setTodos={setTodos} />
    </div>
    </DragDropContext > 
  );
}

export default App;
