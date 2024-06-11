
const Shop = require("./shop/shop.js");
const myShop  = new Shop();


myShop.addToCard("book", 3);
myShop.addToCard("food", 10);
myShop.pay("1234", "visa", "some stread");


