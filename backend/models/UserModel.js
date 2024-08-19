const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const validator=require('validator')
const bcrypt=require('bcrypt');
const { use } = require('../routes/workouts');
const userSchema=new Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)
userSchema.statics.signUp=async function(email,password){
    if(!email  || !password){
        throw Error('All fields must be filled');
    }

    if(!validator.isEmail(email)){
     throw   Error('Not valid Email');
    }
    if(!validator.isStrongPassword(password)){
      throw  Error('Not valid Password');
    }
    
    const exists=await this.findOne({email})

    if(exists){
        throw Error('Email exists')
    }
    const salt=await bcrypt.genSalt(10)
    const hash=await bcrypt.hash(password,salt);
    const user=await this.create({email,password:hash});
    
    return user;
}


userSchema.statics.login=async function(email,password) {
    if(!email || !password){
        throw new Error("No password or email");
        
    }
    const user=await this.findOne({email});
    if (!user){
    throw new Error("Incorrect mail");
    
        
    }
    const check=await bcrypt.compare(password,user.password);
    if(!check){
        throw new Error("Incorrect password");
        
    }
    return user
    
}
module.exports=mongoose.model('Users',userSchema)