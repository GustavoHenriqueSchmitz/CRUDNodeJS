import server from './models/server_models.js'
import express from 'express'
import router from './routes/routes.js'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Read JSON
server.app.use(
    express.urlencoded({
        extended: true,
    }),
)

server.app.use(express.json())

//Test Database
await prisma.$connect().catch((err)=>{
    console.log(`Error trying to connect to the database: ${err}`)
})

// Define the application routes
server.app.use('/api', router)

// Init server
server.app.listen(server.serverPort, () => {
    console.log(`Server initiated in port: ${server.serverPort}`)
})
