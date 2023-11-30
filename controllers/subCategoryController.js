const SubCategory = require("../models/subCategoryModel");
//const User = require("../models/userModel");


const create_subcategory = async(req,res)=>{
   
    try{
        const check_sub = await SubCategory.find({ categoryName:req.body.categoryName});
        if(check_sub.length > 0){
            let checking = false;
            for(let i=0;i<check_sub.length;i++){
                if(check_sub[i]['sub_category'].toLowerCase() === req.body.sub_category.toLowerCase()){
                    checking = true;
                    break;
                }
        }
        if(checking === false){
            const subCategory = new SubCategory({
                categoryName:req.body.categoryName,
                sub_category:req.body.sub_category
             });
             const sub_cat_data = await subCategory.save();
             res.status(200).send({success:true,msg:"Sub-Category detailes",data:sub_cat_data});
        }
        else {
            res.status(200).send({success:true,msg:"This Sub-Category("+req.body.sub_category+") is already exists."});
        }
    }  
        else {
            const subCategory = new SubCategory({
                categoryName:req.body.categoryName,
                sub_category:req.body.sub_category
             });
             const sub_cat_data = await subCategory.save();
             res.status(200).send({success:true,msg:"Sub-Category detailes",data:sub_cat_data});
        }
   
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }

}

module.exports ={
    create_subcategory
}