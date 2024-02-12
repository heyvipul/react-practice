import React from 'react'
import "./styles.css"
import { Todo } from '../model'
import SingleTodo from './SingleTodo'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
    todos : Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
    completed : Todo[],
    setCompleted : React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos,setTodos,completed,setCompleted}:Props)  => {


  console.log('todos in TodoList:', todos);
  console.log('completed in TodoList:', completed);

  return (
    <div className="container">
      <Droppable droppableId="TodosList">
      {
        (provided) => (
          <div className="todos" 
          {...provided.droppableProps}
          ref={provided.innerRef} >
            <span className='todos__heading'>Active Tasks</span>
              {todos.map((todo,index)=>(
              <SingleTodo 
              index={index}
              todo={todo}
              // key={todo.id}
              todos={todos}
              setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )
      }
      </Droppable>
      <Droppable droppableId="TodosRemove">
      {
        (provided) =>(
          <div className="todos remove"
          {...provided.droppableProps}
          ref={provided.innerRef} >
          <span className='todos__heading'>Completed Tasks</span>
          {completed?.map((todo,index)=>(
              <SingleTodo 
              index={index}
              todo={todo}
              // key={todo.id}
              todos={completed}
              setTodos={setCompleted}
              />
            ))}
           {provided.placeholder}
          </div>
        )
      }
      </Droppable>
    </div>
  )
}

export default TodoList