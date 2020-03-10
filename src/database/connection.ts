const Sequelize = require('sequelize')

const sequelize = new Sequelize('crm_db', 'root', 'Admin@123',{
    host: 'localhost',
    dialect: 'mysql',
    operationAliases: false
})
sequelize
  .authenticate()
  .then(() => {
    console.error('Database Connected');
  })
  .catch((err: any) => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;