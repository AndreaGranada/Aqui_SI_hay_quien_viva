require('dotenv').config()

const { checkConnection, syncModels } = require('./db/index.db.js')
const { addRelationsToModels } = require('./db/relations')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./api/routes/index.routes.js')
const cloudinary = require('./Cloudinary/index.cloudinary.js')



async function dbConnect() {

    try {
        await checkConnection()
        addRelationsToModels()
        await syncModels('alter') 
    } catch (error) {
        console.log('Something has gone very wrong 😱', error)  
    }
}



const app = express()
const port = process.env.PORT
app.use(express.json({limit: '50mb'}))
app.use(morgan("dev"))
app.use(cors())
app.use(express.urlencoded({extended: true, limit: '50mb'}))

app.listen(port, async () => {
    try {
        await dbConnect()
        console.log(`Server is listening in port ${port}`)
        
    } catch (error) {
        console.log(error)
    }
})

app.use('/api', router)