const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "apprunner-test.cluster-czypxssauleq.ap-southeast-1.rds.amazonaws.com",
    database: "apprunner-db",
    password: "yiGdzqOGXG5FvDyx7jas",
    port: 5432
});

module.exports = pool;
