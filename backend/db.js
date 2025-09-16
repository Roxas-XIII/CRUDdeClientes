const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};


const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('✅ Conectado a SQL Server con autenticación de Windows');
        return pool;
    })
    .catch(err => console.log('❌ DB Connection Error: ', err));

module.exports = {
    sql, poolPromise
};
