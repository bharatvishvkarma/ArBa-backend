const mongoose = require('mongoose')
const dotenv = require('dotenv')


const mongo_password = 'eYbt59fgdmhlLWHV'

mongoose.set('strictQuery', true)

async function connectDatabase(){
    const connect = await mongoose.connect(`mongodb+srv://iambharatsharma1:${mongo_password}@cluster0.pwptc.mongodb.net/test`)
}

module.exports = connectDatabase