import server from './models/server_models.js'
import express from 'express'
import router from './routes/routes.js'

// Read JSON
server.app.use(
    express.urlencoded({
        extended: true,
    }),
)

server.app.use(express.json())

// Define the application routes
server.app.use('/api', router)

//Test Database
server.database.authenticate().then(() => {
    console.log('Connected with the database.')
  }).catch((err) => {
    console.log(`Failed to connect to the database: ${err}`)
})

// Init server
server.app.listen(server.serverPort, () => {
    console.log(`Server initiated in port: ${server.serverPort}`)
})
