require('dotenv').config()
const { checkConnection, syncModels } = require('./db/index.db.js')
const { addRelationsToModels } = require('./db/relations')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

//const router = require('./api/routes/index.js')


async function dbConnect() {

    try {
        await checkConnection()
        addRelationsToModels()
        await syncModels('force') 
    } catch (error) {
        console.log('Something has gone very wrong 😱', error)  
    }
}

const app = express()
const port = process.env.PORT
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())


app.listen(port, async () => {
    try {
        await dbConnect()
        console.log(`Server is listening in port ${port}`)
        
    } catch (error) {
        console.log(error)
    }
})

//app.use('/api', router)