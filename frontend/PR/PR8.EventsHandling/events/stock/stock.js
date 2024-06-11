const EventEmitter = require('events'); 

class Stock extends EventEmitter{
    listItems = ["book","food", "rod"];

    constructor(){
        super();
    }


    check(item){
        for(let i =0; i<this.listItems.length;i++){
            if(this.listItems[i] == item){
                console.log("item is in the stock");
                return true;
            } 
        }
        console.log("item isn't in the stock");
        this.emit("checked");
        return false;
    }

    deliver(addres){
        console.log("your  purchase was delivering at " + addres);
    }

}
module.exports = Stock;