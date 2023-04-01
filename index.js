const express = require('express')
const cors = require('cors')
const connectDatabase = require('./database/database')
const user = require('./routes/userRoutes')
const uploadFile = require('./routes/fileUpload.js')
const category = require('./routes/categoryRoutes.js')
const product  = require('./routes/productRoutes.js')


const app = express()
app.use(cors())
app.use(express.json())


app.use('/user/',user)
app.use('/file/',uploadFile)
app.use('/category/',category)
app.use('/product/',product)
const port = 7777
connectDatabase()
.then(()=>{
    app.listen(port,()=>{
        console.log('listening on port ' + port)
    })
})

 
