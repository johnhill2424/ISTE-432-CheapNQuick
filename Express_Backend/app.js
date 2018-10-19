const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'student',
    database : 'poncho'
});

db.connect();

app.get('/', function(req,res){
var sql = 'SELECT * FROM ingredient';
db.query(sql, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
});
});

app.post('/data', function(req, res){
	console.log(req.body); 
    var data = {nama:req.body.nama, usia:req.body.usia};
    var sql = 'INSERT INTO ingredient SET ?';
    db.query(sql, data, (err, result)=>{
    if(err) throw err;
    console.log(result);
    res.send({
        status: 'Data sukses diinput!',
        no: null,
		nama: req.body.nama,
		usia: req.body.usia
	});
});
});

app.listen(3210, ()=>{
    console.log('Server aktif di port 3210')
});
