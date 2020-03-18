const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    operationAliases: false,
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
      timezone: "+06:00",
    },
    timezone: "+06:00",
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