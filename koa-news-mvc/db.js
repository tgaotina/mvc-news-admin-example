const mysql = require("mysql2/promise");

let connection;
module.exports = {
  async initDB() {
    connection = await mysql.createConnection({
      host: "localhost",
      password: "",
      user: "root",
      database: "",
    });
  },

  getDB() {
    return connection;
  },
};
