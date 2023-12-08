const Category = require("../models/categoryModel");
const User = require("../models/userModel");


const addCategory = async(req,res)=>{
    try{
        const category =await Category.create(req.body);
        res.status(200).send({success:true,msg:"Category Data", data:category});
    }
catch (error) {
res.status(400).send({success:false,msg:error.message});
}
}

//get all products
const get_categories = async(req, res) => {
    try{ const category =await Category.find({});
    res.status(200).send({success:true,msg:"Category Data", data:category});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
// get single product
const get_categorie = async(req, res) => {
    try{
        const {_id} = req.params;
        const category =await Category.findById({_id});
        res.status(200).send({success:true,msg:"Category Data", data:category});
    }catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}
module.exports ={
    addCategory,
    get_categories,
    get_categorie
}