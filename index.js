const express = require("express");
const cors = require('cors')
const app = express();

const FRONTEND = process.env.FRONTEND

const corsOptions = {
  origin:"http://localhost:4200",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/Ecomerce")
.then(() => console.log('Connected MongoDB!'));

//user routes
const user_route = require("./routes/userRoute")

app.use('/api', user_route);

//store route
const store_route = require("./routes/storeRoute")

app.use('/api', store_route);

//category route
const category_route = require("./routes/categoryRoute")
app.use('/api', category_route);

//sub_category route
const subcategory_route = require("./routes/subCategoryRoute")
app.use('/api', subcategory_route);
//product route
const product_route = require("./routes/productRoute")
app.use('/api', product_route);
//common route
const common_route = require("./routes/commonRoute")
app.use('/api', common_route);

//add-to-cart route
const cart_route = require("./routes/cartRoute")
app.use('/api', cart_route);

//add-address route
const address_route = require("./routes/addressRoute")
app.use('/api', address_route);

//buy-product route
const buy_product_route = require("./routes/buyProductRoute")
app.use('/api', buy_product_route);

app.listen(4000, function(){
   console.log("Server is Run....")
})
