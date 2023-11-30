const Store = require("../models/storeModel");
const User = require("../models/userModel");

const create_store = async(req, res)=>{
    try {

        const userData = await User.findOne({name:req.body.vendorName});
        if(userData){
            if(!req.body.latitude || !req.body.longitude){
                res.status(200).send({success:false,msg:"lat and long is not found!"});
            }
            else{
                const vendorData = await Store.findOne({vendorName:req.body.vendorName});
                if(vendorData){
                  res.status(200).send({success:false,msg:"This vender is already created a store."});
                } else {
                       const store = new Store({
                        vendorName:req.body.vendorName,
                        logo:req.file.filename,
                        business_email:req.body.business_email,
                        address:req.body.address,
                        pin:req.body.pin,
                        location:{
                            type:"Point",
                            coordinates:[parseFloat(req.body.longitude),parseFloat(req.body.latitude)]
                        }
                       });
                       const storeData = await store.save();
                       res.status(200).send({success:false,msg:'Store Data',data:storeData});
                }
            }
            }
            else {
                res.status(200).send({success:false,msg:"Vender ID does not exists."});
            }
        } catch (error) {
        res.status(400).send(error.message);
    }
}

//get store
const get_store = async(id)=> {
    try {
        return Store.findOne({});
    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

//find nearest store
const find_store = async(req,res)=>{
    try {
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const store_data = await Store.aggregate([
            {
                $geoNear:{
                  near:{type:"Point",coordinates:[parseFloat(longitude),parseFloat(latitude)]},
                    key:"location",
                    maxDistance:parseFloat(1000)*1609,
                    distanceField:"dist.calculated",
                    spherical:true
                }
            }
        ]);

        res.status(200).send({success:true,msg:"Store details",data:store_data})

    } catch (error) {
        res.status(400).send({success:false,msg:error.message});
    }
}

module.exports = {
    create_store,
    get_store,
    find_store
}