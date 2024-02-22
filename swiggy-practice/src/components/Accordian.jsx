import { useState } from "react"
import { data } from "./data"
import "../css/accordian.css"


const Accordian = () => {
  const [card, setCard] = useState(data)
  const[selected,setSelected] = useState(null)

  console.log(card);

  function toggle(index){
    if(selected == index){
      return setSelected(null);
    }
    setSelected(index);
  }
  console.log(selected);


  return (
    <div className="wrapper">
      <div className="accordian">
        {
          card?.map(function (ele, index) {
            return <div className="item" key={index}>
              <div onClick={()=>toggle(index)} className="title">
                <span>{ele.question}</span>
                <span>{selected == index? "-":"+"}</span>
              </div>
              <div className={selected == index? "content show":"content"}>
                <p>{ele.answer}</p>
              </div>
            </div>
          })
        }

      </div>
    </div>
  )
}

export default Accordian