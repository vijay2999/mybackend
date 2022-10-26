const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/storebooks", UserController.createbooks )
router.get("/booklist", UserController.allbooklist)
router.post("/bookbyyear", UserController.bookbyYear)
router.post("/choice",UserController.particularBook  )
router.get("/choice",UserController.particularBook  )
router.get("/choice",UserController.particularBook  )





module.exports = router;