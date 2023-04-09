const express = require('express')
const category = express.Router()
const {createCategory,
       getAllCategories, 
       getSingleCategory,
       deleteCategory,
       updateCategory
    } = require('../controller/category')

category.post('/add', createCategory)
category.get('/get', getAllCategories)
category.get('get/:id', getSingleCategory)
category.delete('/delete/:id',deleteCategory)
category.patch('/update/:id',updateCategory)

module.exports = category

