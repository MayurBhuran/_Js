// with promise

function promisify(fn) {
  return function(...args) {
    return new Promise((resolve,reject) =>{
      fn (...args,(error,result) => {
        if (error) return reject(error);
        return resolve(result);
      });
    });
  };
}

function loadScript(src,callback) {

}

const loadScriptNew = promisify(loadScript)

//loadScriptNew('test.js')
//.then(() => console.log("Done:"))
//.catch((err) => console.log("error ho hya"))

(async () => {
  const result = await loadScriptNew("text.js")
  console.log(result);

})();


//using callback
//without promise
//function loadScript(src, callback) {
// const script = document.createElement('script');
// 
// script.src = src;
// script.async = true; // Optional: for non-blocking load
//
// script.onload = () => callback(null, script);
// script.onerror = (err) => callback(err);
//
// document.head.appendChild(script);
//
//
//oadScript('test.js', (err, script) => {
// if (err) {
//   console.log('Error loading script:', err);
// } else {
//   console.log('Script loaded successfully');
// }
//);

//function loadscript (src,callback) {
//  const script = document.createElement('script');
//  
//  script.src = src;
//
//  script.onload =  () => callback(null,script);
//  script.onerror = (err) => callback(err);
//
//  document.head.appendChild(script);
//}
//
//loadscript("test.js", (err,script) => {
//  if (err) {
//    console.log(err);
//    } else {
//      console.log("Script loaded");
//    }
//});