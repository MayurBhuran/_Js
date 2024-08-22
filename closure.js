//function main () {
//  const name = "Inadu kandi"
//
//  function selfname (){
//    console.log(name);
//    
//  }
//  return selfname;
//}
//let fn= main();
//
//fn();

function adder(num) {
  
  function add(b) {
    console.log(num+b);
    
  }
  return add;

}

const addTo5 = adder(30);
addTo5(3);