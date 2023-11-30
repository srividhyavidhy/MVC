const express = require("express");

const store_route = express();

const bodyParser = require("body-parser")
store_route.use(bodyParser.json());
store_route.use(bodyParser.urlencoded({extended:true}));

const multer = require("multer");
const path = require("path");

store_route.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/storeImages'),function(error,success){
             if(error) throw error
        });
    },
    filename:function(req,file,cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null,name,function(error1, success1){
            if(error1) throw error
        })
    }
});

const upload = multer({storage:storage});

const store_controller = require("../controllers/storeController");
const auth = require("../middleware/auth");
store_route.post('/create-store',auth,upload.single('logo'),store_controller.create_store);


store_route.post('/find-nearest-store',auth, store_controller.find_store);

module.exports = store_route;