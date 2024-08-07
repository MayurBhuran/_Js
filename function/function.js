// function

//function sayheloo() {
//  console.log('hi ram')
//}
//sayheloo()
//sayheloo()
//sayheloo()
//sayheloo()
//sayheloo()
//sayheloo()

//parameter to add 2 no
//            argument
//function add (a, b,c) {
//  console.log(a+b+c);
//}
//
//add(34,43,56)//parameter

// Multiply 2 no

//function Multiply(p,q) {
//  console.log(p*q);
//  return p * q;
//}
//
// let a= Multiply(200,2450)
//console.log("hey user your result  is ",a)

//unlimited argument accept

function addnumbers() {
  let ans = 0;
  for(let i = 0; i< arguments.length; i= i+1){
    ans =  ans +arguments[i];
  }
  return ans ;
}
let result = addnumbers(22,43,35,87,23,33)
console.log(result);