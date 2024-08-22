//function add (a) {
//  return function (b) {
//    return function (c) {
//      return a + b + c;
//    };
//  };
//}
//
//console.log(add(2) (3) (34));


function sendAutoemail(to) {
  return function (subject) {
    return function(body)  {
      console.log(`sending email to ${to} with subject ${subject}: ${body}`)
    };
  };
};

let  step1 = sendAutoemail("raj.email.com")
let step2 = step1("new order confirmation")

step2 ("hey ram is for u");

const add = (a) => (b) => (c) => a +b + c;
console.log(add(9)(7)(6));