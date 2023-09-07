const { getAllusers, getOneuser, registerUser, removeUser, destroyUsers, updateUser, loginUser, logoutUser } = require("../controller/userController")

const router = require("express").Router()

router

    .get("/", getAllusers)
    .get("/one/:userId", getOneuser)
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logoutUser)
    .put("/edit/:userId", updateUser)
    .delete("/destroy", destroyUsers)
    .delete("/remove/:userId", removeUser)

module.exports = router