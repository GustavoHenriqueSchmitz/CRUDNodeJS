import server from '../models/server_models.js'
import { Sequelize } from 'sequelize'

const personsTable = server.database.define('persons', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name:{
      type: Sequelize.STRING,
      allowNull: false
    }
})

personsTable.sync()

export default personsTable