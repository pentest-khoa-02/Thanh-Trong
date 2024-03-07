require('dotenv').config();
import mysql from "mysql2";

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!");
});

module.exports = connection;


// // const {createPool} = require('mysql');

// // const pool = createPool({
// //     host: "localhost",
// //     user: "root",
// //     password: "",
// //     database: "mydb",
// //     port: "3306"
// // })

// // pool.query(`select * from users`, (err, res, field) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     return console.log(res)
// // })


// const mysql = require('mysql')
// const dotenv = require('dotenv')
// dotenv.config()

// const connection = mysql.createConnection( {
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT
// })

// connection.connect((err) => {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log('db ' + connection.state)
// })