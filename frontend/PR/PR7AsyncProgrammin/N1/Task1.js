function main(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}
function callback1(){
    setTimeout(()=>{console.log("callback1 завершенно");}, 2000);
}
function callback2(){
    setTimeout(()=>{console.log("callback2 завершенно");}, 1000);
}

main(callback1, callback2);

module.exports = main;