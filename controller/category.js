const Category = require('../database/category.js')

async function createCategory(req,res){
    try{
        const data = req.body

        await Category.create(data)

        return res.send({
            message:"category created successfully",
        })

    }
    catch(err){
        res.status(500).send({
            message:err.message
        })
    }
}

async function getAllCategories(req,res){
    try{
        let category = await Category.find()
        return res.send({
            category
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

async function getSingleCategory(req, res){
    try{
        const id = req.params.id
        const category = await Category.findById(id)

        return res.send({
            category
        })
    }
    catch(err){
        res.status(500).send({
            message: err.message
        })
    }
}

async function deleteCategory(req, res){
    try{
        const id = req.params.id
        await Category.deleteById(id)
        // let category = await Category.find()

        return res.send({
            message:"deleted",
            // category
        })
    }
    catch(err){
        return res.status(500).send({
            error: err.message
        })
    }
}

async function updateCategory(req,res){
    try{
        const id = req.params.id
        const data = req.body
        const updateCategory = await Category.findByIdAndUpdate(id,data)

        return res.send({
            message: "updated",
            updateCategory
        })
    }
    catch(err){
        return res.status(500).send({
            message: err.message
        })
    }
}

module.exports = {
    createCategory,
    getAllCategories,
    getSingleCategory,
    deleteCategory,
    updateCategory
}