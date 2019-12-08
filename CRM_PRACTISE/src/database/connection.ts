const Sequelize = require('sequelize')

const sequelize = new Sequelize('crm_db', 'root', 'Admin@123',{
    host: 'localhost',
    dialect: 'mysql',
    operationAliases: false
})

export default sequelize;