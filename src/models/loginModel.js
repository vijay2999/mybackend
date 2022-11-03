const mongoose = require('mongoose')

const productSchema = new mongoose.Schema( {
    email_id:String,
    password:String

}, { timestamps: true });

module.exports = mongoose.model('Logindetails', productSchema)

         




