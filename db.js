const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "apprunner-test.cluster-czypxssauleq.ap-southeast-1.rds.amazonaws.com",
    database: "apprunner-db",
    password: "eDYIgEkTON×Mzyj8mQCk",
    port: 5432
});

module.exports = pool;
