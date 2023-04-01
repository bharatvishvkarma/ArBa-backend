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
category.delete('/delete',deleteCategory)
category.patch('/update',updateCategory)

module.exports = category

