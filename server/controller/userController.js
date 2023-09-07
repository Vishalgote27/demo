const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.registerUser = async (req, res) => {
    try {
        const { password, email } = req.body
        const found = await User.findOne({ email: email })
        if (found) {
            return res.status(400).json({
                message: "Email already register"
            })
        }

        const hashpassword = bcrypt.hashSync(password, 10)

        const result = await User.create({ ...req.body, password: hashpassword, role: "user" })
        res.json({
            message: "User Register successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to register" + error
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const result = await User.findOne({ email: req.body.email })
        if (!result) {
            return res.status(400).json({
                message: "Email Not Registred"
            })
        }

        const verify = await bcrypt.compare(req.body.password, result.password)
        if (!verify) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY)

        res.cookie("jwt", token, {
            httpOnly: true
        })


        res.json({
            message: "Login Successfully",
            result,
            token
        })
    } catch (error) {
        res.json({
            message: "Unble to Login"
        })
    }
}

exports.getAllusers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({
            message: "All Users get Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get All" + error
        })
    }
}

exports.getOneuser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await User.findById(userId)
        res.json({
            message: "Get one user",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get one user"
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.json({
            message: "User update success",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to Edit"
        })
    }
}

exports.removeUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await User.findByIdAndDelete(userId)
        res.json({
            message: "one user remove"
        })
    } catch (error) {
        req.status(400).json({
            message: "Unble to remove one"
        })
    }
}


exports.destroyUsers = async (req, res) => {
    try {
        const result = await User.deleteMany()
        res.json({
            message: "All users remove",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble destory"
        })
    }
}

exports.logoutUser = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.json({
            message: "Logout success"
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble logout" + error
        })
    }
}