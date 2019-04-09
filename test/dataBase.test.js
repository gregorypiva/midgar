const mysql = require('mysql2/promise');


const test = async () => {
    connection = await mysql.createConnection({host:'localhost', user:'root', database:'larimar'});
    const sql = 'SELECT * FROM telephonie LIMIT 2';
    const args = null;
    const result = await connection.execute(sql, args);
    connection.end();
    console.log(result[0]);
}

test();