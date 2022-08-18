import { Sequelize } from "sequelize"

let personsTable

function initDatabase() {
  
  const sequelize = new Sequelize('PersonsDB', 'crud', 'crud', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: true
    },
    logging: false
  });
  
  sequelize.authenticate().then(()=>{
    console.log('Connected with the database.')
  }).catch((err)=>{
    console.log(`Failed to connect to the database: ${err}`)
  })

  createTables(sequelize)
}

function createTables(sequelize) {
  personsTable = sequelize.define('persons', {
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
}


export {initDatabase, personsTable}
