import express from 'express'

// Server configuration
const server = {
    app: express(),
    port: 8000
}

server.app.listen(server.port, ()=>{
    console.log(`Server initiaded in port: ${server.port}`)
})