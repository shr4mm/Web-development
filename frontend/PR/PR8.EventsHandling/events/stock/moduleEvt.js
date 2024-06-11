var ent = require("events");

exports.emmiter = function(){


var emmiter =new ent.EventEmitter()

emmiter.on("first", function(){
    console.log("first");
});

emmiter.on("second", function(){
    console.log("second");
});


    return emmiter;
}
