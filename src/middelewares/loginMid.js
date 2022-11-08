 const jwt = require("jsonwebtoken");
 const { default: mongoose, isValidObjectId } = require("mongoose");

 const midtoken = function(req,res,next){

 let userId=req.params.userId
   let tokan = req.headers["x-auth-token"]
    if(!tokan){
        res.send("token not present")
    }
    let decodedToken = jwt.verify(tokan, "#bmw@111");
   if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

   if(!isValidObjectId(userId)){
return res.send({mes:"user id is not valid object id"})
   }
   next()
}
 module.exports.midtoken= midtoken;