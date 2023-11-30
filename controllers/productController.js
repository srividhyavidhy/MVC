const Product = require("../models/productModel");

const add_product = async(req, res)=>{
          try{
                    const product =await Product.create(req.body);
                    res.status(200).send({success:true,msg:"Product Data", data:product});
                }
 catch (error) {
          res.status(400).send({success:false,msg:error.message});
      }
}
//get all products
const getProducts = async(req, res) => {
    try{
        const products =await Product.find({});
        res.status(200).send({success:true,msg:"Product Data", data:products});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
// get single product
const getProduct = async(req, res) => {
    try{
        const {_id} = req.params;
        const product =await Product.findById({_id});
        res.status(200).send({success:true,msg:"Product Data", data:product});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
//update a products
const updateProduct = async(req, res) => {
    try{
        const {_id} = req.params;
        const product =await Product.findByIdAndUpdate(_id, req.body);
        //we cannot find any product in database
        if(!product){
            res.status(400).send({success:false,msg:'cannot find any product with ID ${_id}'});
        }
        const updatedproduct = await Product.findById(_id);
        res.status(200).send({success:true,msg:"Product Data", data:updatedproduct});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
//delete a products
const deleteProduct = async(req, res) => {
    try{
        const {_id} = req.params;
        const product =await Product.findByIdAndDelete(_id);
        //we cannot find any product in database
        if(!product){
            res.status(400).send({success:false,msg:'cannot find any product with ID ${_id}'});
        }
        res.status(200).send({success:true,msg:"Product Data", data:product});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports ={
          add_product,
          getProducts,
          getProduct,
          updateProduct,
          deleteProduct
}