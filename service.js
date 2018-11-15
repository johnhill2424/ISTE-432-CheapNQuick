var dataLayer = require('./MyPostgreSQLDB.js');
module.exports = {
	callGetData: function (data) {
		return dataLayer.getData(data);
	},
	callSetData: function (data) {
		return dataLayer.setData(data);
	},
	callConnect: function (connection) {
		return dataLayer.connect(connection);
	},
	callClose: function () {
		return dataLayer.close();
	},
	callPrepare: function (id) {
		return dataLayer.prepare(id);
	},
	callPrepareLocation: function (id) {
		prepare("SELECT storeName FROM store WHERE storeID = ?");
	},
	calDescTable: function () {
		// descTable impl
	},
	callLogin: function () {
		// login impl
	},
	callLogout: function () {
		// logout impl
	},
	calCreateUser: function (credentialString) {
		// createUser impl
		var creds = str.split(',');
		var user=creds[0];
		var pw = sha256(creds[1]);
		var access=creds[2];
	
	},
	callConnect: function	()	{
		// connect to database
	} 
};