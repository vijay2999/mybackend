const PublisherModel= require("../models/publisherModel")
    
const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}


module.exports={createPublisher}