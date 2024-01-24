import { useEffect, useRef } from 'react'
import './App.css'
import Select from './components/Selecttag'

function App() {

  const Input = useRef();

  function focusInput(){
    Input.current.focus();
  }

  useEffect(()=>{
    focusInput()
  },[])
  
 
  return (
    <>
     <Select/>
     <br />
     <div>
      <input ref={Input} type="text" />
      <button onClick={focusInput} >Focus</button>
     </div>
    </>
  )
}

export default App
