const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

let arr =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
   ]

router.post('/test-post', function(req,res){

    let info=req.body
    let bodynames=info.name
    
     for(i=0;i<arr.length;i++){

        if(bodynames==arr[i].name){

            res.send("player already exist")
        } }
    arr.push(info)
console.log(arr)
res.send("detaile upgraded")
})

router.get('/exe1', function(req,res){

    arr=[1,2,3,5,6,7,8]

let x=arr.length+1

let sumofallno= x*(x+1)/2

    let sum=0
    for(i=0;i<arr.length;i++){

        sum=sum+arr[i]
    }   

result=sumofallno-sum
console.log(result)
res.send("first problem done")
})

router.get('/exe2', function(req,res){
arr2=[33,34,35,37,38]
let sum1=0
for(i=0;i<arr2.length;i++){
    sum1=sum1+arr2[i]
}
let ntr1=arr2.length+1
let cbr=arr2.pop()
let sumofallno1=(ntr1*(arr2[0]+cbr)/2)
 result=sumofallno1-sum1
 console.log(result)
 res.send("second problem done")
})
module.exports = router;
