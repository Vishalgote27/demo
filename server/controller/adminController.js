const Admin = require("../models/Admin")

exports.addProduct = async (req, res) => {
    try {
        const result = await Admin.create(req.body)
        res.json({
            message: "product add Successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to add product" + error
        })
    }
}

exports.getProducts = async (req, res) => {
    try {
        const result = await Admin.find()
        res.json({
            message: "GEt All product Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get all product" + error
        })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const result = await Admin.findById(productId)
        res.json({
            message: "GET ONE product Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to get one product"
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {

        const { productId } = req.params
        const result = await Admin.findByIdAndUpdate(productId, qty + 1, { new: true })
        res.json({
            message: "Product Update Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to update product"
        })
    }
}

exports.removeProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const result = await Admin.findByIdAndDelete(productId)
        res.json({
            message: "Product Delete Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Unble to Delete product"
        })
    }
}

exports.destroyproduct = async (req, res) => {
    try {
        const result = await Admin.deleteMany()
        res.json({
            message: "remove All product Successfully",
            result

        })
    } catch (error) {
        res.status(400).json({
            message: "unable to remove All" + error
        })
    }
}