const bookModel= require("../models/bookModel")

const createbooks= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

    const allbooklist=async function(req,res){
        let allUsers= await bookModel.find().select({bookName:1,authorName:1})
        res.send({msg: allUsers})
    }

    //Take year as input in post and give list of books published that year
const bookbyYear=async function(req,res){
    let years=req.body.year
    let bookInYear=await bookModel.find({year:{$eq:years}})
    res.send({msg:bookInYear})
}
  
//Take any input and use it as a condition to fetch books that satisfy that condition
const particularBook=async function(req, res) {
    let anyBook=req.body
    let bookData=await bookModel.find(anyBook); 
    res.send({bookData})
}

//Request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getINRBooks=async function(req,res){
    let allBooks=await BookModel.find({"price.indianPrice":{$in:["100INR","200INR","500INR"]}})
    res.send({msg:allBooks})
}

// Returns books that are available in stock or have more than 500 pages 
const getRandomBooks=async function(req,res){
    let randomBook=await BookModel.find({$or:[{stockavailable:true},{totalPages:{$gt:500}}]})
    res.send({msg:randomBook})
}


module.exports.createbooks= createbooks
module.exports.allbooklist=allbooklist
module.exports.bookbyYear=bookbyYear
module.exports.particularBook=particularBook
module.exports.getINRBooks=getINRBooks
module.exports.getRandomBooks=getRandomBooks
