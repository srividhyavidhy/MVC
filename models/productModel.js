const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    vendorName:{
        type:String,
        required:true
    },
    store_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    categoryName:{
        type:String,
        required:true
    },
    deliveryTimeSpan:{
          type:String,
          required:true
      },
    sub_cat_name:{
        type:String,
        required:true
    },
    images:{
        type:String,
        required:false,
       },
});
const Product = mongoose.model("Product",productSchema);
module.exports = Product;