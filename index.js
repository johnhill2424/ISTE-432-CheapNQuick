const pg = require('pg');
const pool = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'poncho',
	password: 'student',
	port: '5432'});

pool.query("SELECT * FROM recipe", (err, res) => {
	console.log(err,res);
	pool.end();});
