 //higher order function and call back

 function add( a, b,cb){
  let result = a+b ;
  cb(result);

  return () => console.log(result);
 }

 let resultfunction = add(23,34, () =>{});
 resultfunction();


//1-,wethod
 //add(23,45,function(val)  {
  //console.log(val);
 //})

//2-method
// function showresult(result){
//   console.log(result);
// }

//3-method
// add (234,35,showresult);

//4-method
//add(4465,45,(val => console.log(val)));
