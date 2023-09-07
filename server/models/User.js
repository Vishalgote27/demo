const mongoose = require("mongoose")

const userShema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    email: {
        type: String,
        require: [true, "Email is required"]
    },
    password: {
        type: String,
        require: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    }
})

module.exports = mongoose.model("user", userShema)