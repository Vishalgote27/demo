const { addProduct, getProducts, getOneProduct, updateProduct, removeProduct, destroyproduct } = require("../controller/adminController")

const router = require("express").Router()

router
    .get("/", getProducts)
    .get("/one/:productId", getOneProduct)
    .post("/upload", addProduct)
    .put("/edit/:productId", updateProduct)
    .delete("/destroy", destroyproduct)
    .delete("/remove/:productId", removeProduct)

module.exports = router