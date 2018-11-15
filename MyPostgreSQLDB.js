module.exports = {
  getData: function (data) {
    return 'getData';
  },
  setData: function (data) {
    return 'setData';
  },
  connect: function (connection) {
    return 'connect';
  },
  close: function () {
    return 'close';
  },
  prepare: function (id) {
    return 'prepare';
  },
  prepareLocation: function (id) {
    prepare("SELECT storeName FROM store WHERE storeID = ?");
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
	var creds = str.split(',');
	var user=creds[0];
	var pw = sha256(creds[1]);
	var access=creds[2];
	
  }
};