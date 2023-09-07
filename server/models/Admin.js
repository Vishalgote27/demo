const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        require: [true, "img required"]
    },
    category: {
        type: String,
        require: [true, "category required"]
    },
    imgCaption: {
        type: String,
        require: [true, "imgCaption required"]
    },
    price: {
        type: Number,
        require: [true, "price required"]
    },
    qty: {
        type: Number,
        require: [true, "qty required"]
    },
    stock: {
        type: Number,
        require: [true, "stock required"]
    },
})

module.exports = mongoose.model("admin", adminSchema)