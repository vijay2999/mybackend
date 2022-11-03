// q.1) Write a POST api to create a product from the product details in request body. 
const createProduct = async function(req,res){
    let data1=req.body
    let productData=await productModel.create(data1)
    res.send({msg:productData})
}
