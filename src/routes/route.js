const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});




// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})
//Assignment problem statement 1

router.get('/movies', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let movies = ['Rang de Basanti', 'the shining', 'Lord of Rings','Batman begins']
    res.send(movies)
})



//Assignment problem statement 2 && 3

 router.get('/movies/:indexNumber',function(req,res){

    let movies = ['Rang de Basanti', 'the shining', 'Lord of Rings','Batman begins']
     const index=req.params.indexNumber
    const index1=(movies.length)
    if(index>=index1){

        res.send('use valid index')
    }
    else{
    res.send(movies[index])
    }
       //res.send(movies[index])
 })

//Assignment problem statement 4

router.get('/films/:movie_object', function(req,res){

    
    const arr=[ {
    'id': 1,
        'name': 
        'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]

       res.send(arr)
       
    
})

//Assignment problem statement 5

router.get('/films1/:filmid', function(req,res){

    const arr=[ {
        'id': 1,
            'name': 
            'The Shining'
           }, {
            'id': 2,
            'name': 'Incendies'
           }, {
            'id': 3,
            'name': 'Rang de Basanti'
           }, {
            'id': 4,
            'name': 'Finding Nemo'
           }] 

           const index=req.params.filmid

           const sizeOfarr=(arr.length)

           if(index>sizeOfarr ||  index==0){
            
            res.send('No movie exist with this id')
           }
           else{

            const index1=req.params.filmid-1
            
            res.send(arr[index1])
           }
})
module.exports = router;