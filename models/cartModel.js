const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:true
    },
    price:{
          type:String,
          required:true
      },
      quantity:{
        type:String,
        required:true
    },
      vendor_id:{
          type:String,
          required:true
      },
      store_id:{
          type:String,
          required:true
      },
 
});

const Cart= mongoose.model("Cart",cartSchema);
module.exports = Cart;