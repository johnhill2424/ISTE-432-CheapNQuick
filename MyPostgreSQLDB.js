module.exports = {
  getData: function (data) {
    // getData impl
  },
  setData: function (data) {
    // setData impl
  },
  connect: function (connection) {
    // connect impl
  },
  close: function () {
    // close impl
  },
  prepare: function (id) {
    // prepare impl
  },
  prepareLocation: function (id) {
    prepare("SELECT storeName FROM store WHERE storeID = ?");
  },
  descTable: function () {
    // descTable impl
  },
  login: function () {
    // login impl
  },
  logout: function () {
    // logout impl
  },
  createUser: function (credentialString) {
    // createUser impl
	var creds = str.split(',');
	var user=creds[0];
	var pw = sha256(creds[1]);
	var access=creds[2];
	
  },
  connect: function	()	{
	// connect to database
  } };