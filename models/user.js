const mongoose=require('mongoose');
const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique:true,
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
    },
    password: {
        type:String,
    },
    fullName:{
        type:String,

    },
    bio: {
        type: String,

    },
});

const User=mongoose.model('User',userSchema);
 module.exports=User;