const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middelewere= require("../middelewares/loginMid")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )


router.post("/login", userController.loginUser)

router.get("/getinfo/:userId",middelewere.midtoken,userController.userinfo)

router.put("/updateuser/:userId",middelewere.midtoken,userController.putdata)

router.delete("/deleteuser/:userId",middelewere.midtoken,userController.deletedata)

module.exports = router;

