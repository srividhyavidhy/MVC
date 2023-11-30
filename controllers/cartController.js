const Cart = require("../models/cartModel");

//count data
const add_to_cart = async(req, res)=> {
    try {
     
         const cart_obj =  new Cart({
             product_id:req.body.product_id,
             price:req.body.price,
             quantity:req.body.quantity,
             vendor_id:req.body.vendor_id,
             store_id:req.body.store_id,
          });
          const cartData = await cart_obj.save();

      res.status(200).send({success:true,msg:"Cart Product Details", data:cartData});

    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports ={
    add_to_cart
}