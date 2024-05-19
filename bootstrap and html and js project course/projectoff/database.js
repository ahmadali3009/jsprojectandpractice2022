const {createPool} = require ("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "eversole123@",
    database: "new"
}) 

pool.query(`select * from new_table `, (err , res) => {
    return console.log(res)
}  )
module.exports = connection;
