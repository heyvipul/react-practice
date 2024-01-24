
// // hoistedVariable = 3;
// // console.log(hoistedVariable);

// // var hoistedVariable;
// // funCall();

// // function funCall(){
// //     console.log("hello world!")
// // }
// let numbers = [1,2,3,4,5];

// // let doubled = numbers.map(function(ele){
// //     return ele * 2;
// // })
// // console.log(doubled)

// const ans = numbers.reduce((curr,acc)=>{
//      return curr + acc;
// },0)
// console.log(ans);
// var str = "Hello World"
// var str1 = "";

// for(var i=0;i<str.length;i++){
//      if(str[i] == "a" ||str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u"){
//         continue;
//      }
//      else{
//         str1 = str1 + str[i]
//      }
// }

// console.log(str1);

(function fnA(a){
return (function fnB(b){
console.log(a)
});
})(0)(1);

