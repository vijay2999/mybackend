const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:{
        type: Number,
        default:100,
    },
    address:String,
    age:Number,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) 