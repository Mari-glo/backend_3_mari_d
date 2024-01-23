const { connect } = require('mongoose')
const dotenv = require('dotenv')
const { program } = require('../utils/commander.js')

const { mode } = program.opts()

console.log(mode)

dotenv.config({
    path: mode === 'development' ? './.env.development' : './.env.production'
})

const configObjet = {
    port: process.env.PORT,
    mongo_url: process.env.MONGO_URL
}

const connectDb = async () => {
    try{
        console.log('Base de datos mariD conectada')    
        return await connect ('mongodb+srv://mariD:NOTpwuJtPwyuWFeU@cluster0.nn1ed1f.mongodb.net/ecommerce_mari?retryWrites=true&w=majority')
    } catch (error) {
        console.log(error)
    }
}
module.exports = { connectDb, configObjet }

