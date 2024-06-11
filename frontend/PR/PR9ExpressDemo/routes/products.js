const express = require("express");
const Joi = require('joi');
const Router = express.Router();

const products = [
    {id: 1, sku : "sku1", name : "product name 1"},
    {id: 2, sku : "sku2", name : "product name 2"},
    {id: 3, sku : "sku3", name : "product name 3"},
    {id: 4, sku : "sku4", name : "product name 4"},
    {id: 5, sku : "sku5", name : "product name 5"}
];

const productSchema = Joi.object({
    name: Joi.string()
    //.alphanum()
    .min(5)
    .required()
});

function getMax(productsArray){
    let Ids = productsArray.map(item => item.id);
    return Ids.reduce((max,current) => Math.max(max, current), Ids[0]);
}

Router.route("/")
      .get((request, response) => {
            response.send(products);
      })
      .post((req, res) =>{
        const validationResult = productSchema.validate(req.body);
    
        //validation
        if(validationResult.error){
            console.log(validationResult.error.message);
    
            res.status(400).send(validationResult.error.message);
            return;
        }
    
        const id = getMax(products)+1;
    
        const product = {
            id: id,
            sku: "sku"+ id,
            name: req.body.name
        };
    
        products.push(product);
    
        res.send(product);
    });

Router.route("/:id")
    .get((request, response) => {
        const product = products.find(item => item.id == request.params.id);
    
        if(!product) {
        response.status(404).send(`Product with id: ${request.params.id} not found`);
        return;
        }

        response.send(product);
    })
    .put((req,res) => {
        const product = products.find(item => item.id == req.params.id);
        
        if(!product) {
           res.status(404).send(`Product with id: ${req.params.id} not found`);
           return;
        }
    
        const validationResult = productSchema.validate(req.body);
    
        //validation
        if(validationResult.error){
            console.log(validationResult.error.message);
    
            res.status(400).send(validationResult.error.message);
            return;
        }
    
        product.name = req.body.name;
        res.send(product);
    })
    .delete((req, res) => {
        const product = products.find(item => item.id == req.params.id);
        
        if(!product) {
           res.status(404).send(`Product with id: ${req.params.id} not found`);
           return;
        }
    
        const indexOfProduct = products.indexOf(product);
        products.splice(indexOfProduct, 1);
    
        res.status(200).send(product);
    });


module.exports = Router;