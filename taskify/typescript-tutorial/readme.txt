let name : string;  //string
let age : number | string;   //number
let isStudent : boolean;  //boolean
let hobbies : string[];   //array

let role : [number,string]    // tuple
role = [5,"5"]

// let person : Object;    //Object

// type Person = {
//   name : string;
//   age? : number;
// }

// let person : Person = {
//   name : "vipul",
// }

// let lotsOfPerson : Person [];    //array of objects

let display : (name :string) => void; 

let anyType : unknown ;  // any type 

function printName(name:string){
  console.log(name);
}
printName("Piyush")


interface Person {      //interface
  name : string,
  age? : number
}