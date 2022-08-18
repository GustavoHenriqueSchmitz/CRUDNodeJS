import express from "express"
import {initDatabase} from "./db/db.js"
import router from "./routes/routes.js"

// Server configuration
export const server = {
    app: express(),
    port: 5000
}

// Read JSON
server.app.use(
    express.urlencoded({
        extended: true,
    }),
)

server.app.use(express.json())
server.app.use('/api', router)

//Init Database
initDatabase()

// Init server
server.app.listen(server.port, ()=>{
    console.log(`Server initiaded in port: ${server.port}`)
})
