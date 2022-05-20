const Sequelize = require('sequelize');
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.MYSQL_DB_NAME,
  process.env.MYSQL_DB_USER,
  process.env.MYSQL_DB_PASS,
    {
      host: process.env.MYSQL_HOST,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idel: 10000
      } 
    }
);

module.exports = sequelize;

module.exports.connect = () => {
  sequelize.authenticate()
  .then(() => console.log('Database Connected Successfully...'))
  .catch(err => console.error('Unable to connect to the database:', err)) 
}

