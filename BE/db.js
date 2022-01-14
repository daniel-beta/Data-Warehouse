
const { Sequelize } = require("sequelize")

const db = new Sequelize("data_warehouse", "root", "", {
  host: "192.168.64.2", // "localhost"
  port: 3306,
  dialect: "mysql"
})

module.exports = { db }