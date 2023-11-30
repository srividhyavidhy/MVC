const Category = require("../models/categoryModel");
const User = require("../models/userModel");


const addCategory = async(req,res)=>{
   
    try{
        const category_data = await Category.find();
        if(category_data.length > 0){
            let checking = false;
            for(let i=0;i<(await category_data).length;i++){
                if(category_data[i]['category'].toLowerCase() === req.body.category.toLowerCase()){
                    checking = true;
                    break;
                }
            }
            if(checking == false){
                const category = new Category({
                    categoryId:req.body.categoryId,
                    category:req.body.category
                });
                const cat_data = await category.save(); 
                res.status(200).send({success:true,msg:"Category Data",data:cat_data});
            }
            else {
                res.status(200).send({success:true,msg:"This Category ("+req.body.category+") is already exists."});
            }
        }
       else{
        const category = new Category({
            category:req.body.category
        });
        const cat_data = await category.save(); 
        res.status(200).send({success:true,msg:"Category Data",data:cat_data});
       }

    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }

}

//get category
const get_categories = async(req, res)=> {
    try {
        return Category.find();
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports ={
    addCategory,
    get_categories
}