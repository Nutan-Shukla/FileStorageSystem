const mongoose=require('mongoose');
const user=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const scheme=mongoose.model('USER',user);
module.exports=scheme;