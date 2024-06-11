const EventEmitter = require("events");

const Stock = require("../stock/stock.js");

class Shop extends EventEmitter{

    constructor(){
        super();
        this.myStock = new Stock();
    }



    addToCard(item , qty){
              
        this.myStock.on("addToCard", ()=>{
            this.list += item;
            this.list +=" | " + qty + "\n";
            console.log(this.list + "added");
        }) ;

        this.myStock.emit("addToCard");
           
    }
    
    pay(pass, card, addres){

        this.myStock.on("pay", ()=>{
            console.log("payment was successful pass:" + pass +" card:" + card);
            
        });
        this.myStock.emit("pay");
        
    }

}
module.exports = Shop;