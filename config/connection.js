// const mysql = require("mysql2/promise");

// exports.connect = async () => {

//     const connection = await mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
//     return connection;
// }


const mysql = require("mysql2/promise");

exports.connect = async () => {

    const connection = await mysql.createConnection({
        host: "db4free.net",
        port: 3306,
        user: "root28",
        password: "pd$M$g2QijUGvK!",
        database: "burgers_db"
    });
    return connection;
}
