 //arrow functions
//scope global hota he
//1.syntax

//const sayheloo = () => {
//  console.log('hey');
//}
//sayheloo();
//
//const add=(a,b) => a+b;
//   
//
//console.log(add(2,6));
//
////2.argumrnts
//const addnumbers = (...nums) => {
//  console.log(nums);
//
//};
//
//addnumbers (12,3,2,4,5,4,678);

//3.hoisting

//sayhey();
//
//function sayhey()  {
//  console.log('hey Vermithor');
//}

//4.This keywords
const obj = {
  value : 46,
    myfunction:function()  {
      console.log(this);
    },
};
obj.myfunction();

 