const express = require('express');
const { union } = require('lodash');
const router = express.Router();

let _=require('lodash')

let xyz=require('../logger/logger')

let abs=require('../util/helper')

let ndt=require('../validator/formatter')

router.get('/', function (req, res) {
    console.log("welcome to my application",xyz.myfirstmodule())

    console.log("current date",abs.d1())
    console.log("trim string",ndt.trm())

    const allMonths=["jan","feb","march","april","may","june","july","august","sept","oct","nove","dec"]

    const months=_.chunk(allMonths,4)
    console.log(months)
    const oddNum=[1,3,5,7,9,11,13,15,17,19]
    const tailNum=_.tail(oddNum)
    console.log(tailNum)

    let arr1=[1,3,5,7,]
let arr2=[5,3,7,8]
let arr3=[6,2,7,5]
let arr4=[0,1,4,3]
let arr5=[6,4,8,5]

const arrall=_.union(arr1,arr2,arr3,arr4,arr5)
console.log(arrall)

let pairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]
let obj=_.fromPairs(pairs)

console.log(obj)

    res.send('My first ever api!')
});

module.exports = router;