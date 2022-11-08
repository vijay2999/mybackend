const mongoose = require('mongoose');
// Schema.Type.ObjectId(_id)



const userSchema = new mongoose.Schema( {
    
    firstName: String,
    lastName: String,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted:Boolean,
    age: Number,
}, { timestamps: true });

module.exports = mongoose.model('Userauth', userSchema)


