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
        const name = req.query.name
        // console.log(name)
        let category
        // if(name){
            const regex = new RegExp(name, "i")
            category = await Category.find({name:{$regex:regex}})
            
        // }
        // else{
        //     category = await Category.find()
        // }
        
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
        console.log(id)
        await Category.findByIdAndDelete(id)
        let category = await Category.find()


        return res.send({
            message:"deleted",
            category
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
        await Category.findByIdAndUpdate(id,data)
        let category = await Category.find()
        return res.send({
            message: "updated",
            category
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