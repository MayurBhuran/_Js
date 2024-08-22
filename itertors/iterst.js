//Itretors

//or (const val of [12,3,5,6,7,8,6]) {
// console.log(val);;
// 

// custom itertaor

//function makeIterator(start=0, end = Infinity, step = 1) {
//  let nextstart =start;
//  let itertioncount = 0;
//  return {
//    next () {
//      let result ;
//      if (itertioncount < end) {
//        result ={value:nextstart, done : false}
//        nextstart = nextstart + step;
//        itertioncount++;
//        return result;
//      }
//
//      return {value : itertioncount, done:true}
//    },
//  };
//}
//
//const myIterator = makeIterator(10,20);
//let result = myIterator.next();
//
//while(!result.done) {
//  console.log(result.value);
//  result = myIterator.next();
//  
//}

// yeild

//unction* count()  {
//yield 2;
//yield 4;
//yield 6;
//yield 8;
//yield 10;
//yield 12;
//yield 14;
//
//onst even=count ();
//
//or (const v of even) {
// console.log(v);
//

// genretors 

function* makeIteratorsNew (Start, end ,stepSize=5) {
  for ( let i= Start; i<=  end ; i += stepSize){
    yield i;
  }
}
const one = makeIteratorsNew(0,100,5) 
  
  for (const val of one ) {
    console.log(val);
    
  }
