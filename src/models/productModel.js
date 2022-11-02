const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    name:String,
    category:String,
    price:{
        type:Number,
        isRequired:true
    }

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	name:"Catcher in the Rye",
// 	category:"book",
// 	price:70 //mandatory property
// }
// ```