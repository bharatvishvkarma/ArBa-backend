
const { registerUser,
    logIn,
    checkLoggedIn,
    updateUser,
    changePassword
    } = require('../controller/user.js')
const authMiddleware = require('../middleware/authMiddleware.js')
const express = require('express')
const user = express.Router()

user.post('/register', registerUser)
user.post('/login',logIn)
user.get('/loggedInUser',authMiddleware,checkLoggedIn)
user.patch('/update/:id',updateUser)
user.patch('/changepassword/:id',changePassword)


module.exports = user