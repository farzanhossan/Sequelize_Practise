"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operationAliases: false,
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
        timezone: "+06:00",
    },
    timezone: "+06:00",
    logging: false
});
sequelize
    .authenticate()
    .then(() => {
    console.timeEnd('Database Connection Time');
    console.log('Database Connected');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
exports.default = sequelize;
