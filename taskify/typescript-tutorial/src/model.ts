
export interface Todo{
    id : number,
    todo : string,
    isDone : boolean
}

// type Actions = 
//  | {type : "Add",payload : string} 
//  | {type : "Sub",payload : number} 
//  | {type : "done",payload : number}

// const TodoReducer = (state:Todo,action :Actions) => {

//     switch(action.type){
//         case "Add" : {
//             return [
//                 ...state,
//                 {id:Date.now(),todo:action.payload,isDone:false}
//             ]
//         }
//         default :{
//             return state;
//         }
//     }
// }

// const TodoReducer = () => {

//   const [state,dispatch] = useReducer(TodoReducer,[]) 

//   return (

//   )
// }

// export default TodoReducer