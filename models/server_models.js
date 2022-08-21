import express from 'express'
import { Sequelize } from 'sequelize'

const server = {

    app: express(),
    serverPort: 5000,

    database: new Sequelize('PersonsDB', 'crud', 'crud', {
        host: "localhost",
        port: 3306,
        dialect: 'mysql',
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        },
        logging: false
      })
}

export default server