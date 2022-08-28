import express from 'express'
import { Sequelize } from 'sequelize'

const server = {
    app: express(),
    serverPort: 5000,
}

export default server