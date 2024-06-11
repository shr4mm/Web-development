const mainFun  = require('./Task1.js'); 
 
function callback1(){
    var intervalId = setInterval(()=>{console.log("callback1 завершенно");},1000)
    clearInterval(intervalId,1000);
}
function callback2(){
    var intervalId2 = setInterval(()=>{console.log("callback2 завершенно");},1000)
    clearInterval(intervalId2,3000);
}
mainFun(callback1, callback2);