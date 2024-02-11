import React, { useRef } from 'react'
import "./styles.css"

interface Props {
  todo : string,
  setTodo : React.Dispatch<React.SetStateAction<string>>
  handleAdd : (e:React.SyntheticEvent) => void
}

const InputFeild = ({todo,setTodo,handleAdd}:Props) => {

  const input = useRef<HTMLInputElement>(null)
  
  return (
    <form className='input' onSubmit={(e)=>{
          handleAdd(e);
          input.current?.blur()
      }} >
        <input className='input_box' type="input"
         ref={input}
         value={todo}
         onChange={(e)=>setTodo(e.target.value)}
         placeholder='Enter a task' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputFeild