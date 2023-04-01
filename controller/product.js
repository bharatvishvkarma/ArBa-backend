
const Product = require('../database/product')


async function addProduct(req,res){
    try{
        const data = req.body

        let product = await Product.create(data)
        console.log(product)
        return res.send({
            message:"Product added successfully",
            product:product
        })
    }
    catch(err){
        res.status(500).send({
            message:err.message
        })
    }
}

async function getAllProducts(req,res){
    try{
        const Products = await Product.find()
        return res.send({
            Products
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

async function getSingleProduct(req,res){
    try{
        const id = req.params.id
        const product = await Product.findById(id)
        return res.send({
            product
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

async function deleteProduct(req, res) {
    try{
        const id = req.params.id
        await Product.findByIdAndDelete(id)
        return res.send({
            message:"deleted"
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

async function updateProduct(req,res){
    try{
        const id = req.params.id
        const data = req.body
        await Product.findByIdAndUpdate(id,data)

        return res.send({
            message:"updated"
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}