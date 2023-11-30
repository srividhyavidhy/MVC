const express = require("express");

const product_route = express();

const bodyParser = require("body-parser")
product_route.use(bodyParser.json());
product_route.use(bodyParser.urlencoded({extended:true}));
const auth = require("../middleware/auth");
const product_controller = require("../controllers/productController");

product_route.post('/add-product',auth,product_controller.add_product);
product_route.get('/get-products',auth,product_controller.getProducts);
product_route.get('/product/:productId',auth,product_controller.getProduct);
product_route.put('/update/:_id',auth,product_controller.updateProduct);
product_route.delete('/delete/:_id',auth,product_controller.deleteProduct);


module.exports = product_route;
