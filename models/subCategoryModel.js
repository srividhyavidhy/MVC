const mongoose = require("mongoose");

const subCategorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
    sub_category:{
        type:String,
        required:true
    }
});

const SubCategory= mongoose.model("SubCategory",subCategorySchema);
module.exports = SubCategory;