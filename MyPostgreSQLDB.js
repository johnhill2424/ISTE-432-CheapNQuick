const pg = require('pg');
var pool = "";


module.exports = {
  getData: function (data) {
    return 'getData';
  },
  setData: function (data) {
    return 'setData';
  },
  connect: function () {
    pool = new pg.Pool({
      user: 'postgres',
      host: '127.0.0.1',
      database: 'poncho',
      password: 'student',
      port: '5432'
    });
    
    return pool;
  },
  closeFunc: function () {
    return 'close';
  },
  prepare: function (id) {
    return 'prepare';
  },
  prepareLocation: function (id) {
    prepare("SELECT storeName FROM store WHERE storeID = ?");
  },
  getAllRecipes: function (pool){
    pool.query("SELECT * FROM recipe", (err, res) => {
      console.log(err,res);
      pool.end();
      return res;
    });
  },
  descTable: function () {
    return 'descTable';
  },
  login: function () {
    return 'login';
  },
  logout: function () {
    return 'logout';
  },
  createUser: function (credentialString) {
    // createUser impl
	// var creds = str.split(',');
	// var user=creds[0];
	// var pw = sha256(creds[1]);
	// var access=creds[2];
	return 'createuser';
  }
};