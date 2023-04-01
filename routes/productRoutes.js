const express = require('express')
const product = express.Router()

const {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require('../controller/product')

product.post('/add', addProduct)
product.get('/getall', getAllProducts)
product.get('/get/:id', getSingleProduct)
product.patch('/update/:id', updateProduct)
product.delete('/delete/:id', deleteProduct)

module.exports = product