function add(a,b) {
  return a+b;
}

function square(val) {
  return val*val;
}

//const result=add(4,5);
//console.log(square(result));

//function addTwoAndsquare(a,b) {
//  return square(add(a,b));
//}
//console.log(addTwoAndsquare(5,6));

function composeTwoFunction(fn1,fn2) {
  return function (a,b ) {
    return fn2(fn1(a,b));
  };
}

const task = composeTwoFunction(add,square);
console.log(task(100,20));

//morden js code
// const c2f = (fn1 ,fn2) => (a,b)=> fn2(fn1(a,b))
