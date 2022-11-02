const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    amount:Number,
    isFreeAppUser:Boolean,
    date:String,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema) //users
//isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
