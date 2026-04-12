
import mongoose from "mongoose"
import mogoose from "mongoose"


const addressesSchema = new mongoose.Schema({
    lable:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipCode:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    isDefault:{
        type:Boolean,
        required:true
    }

})



const userSchema =  new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        default:''
    },
    clearkId:{
        type:String,
        required:true,
        unique:true
    },
    addresses:[addressesSchema],
    wishList:[
        {
        type:mogoose.Schema.Types.ObjectId,
        ref:'Product'
        }
    ],
},
    {timestamps:true}
)

export const User = mongoose.model("User",userSchema)