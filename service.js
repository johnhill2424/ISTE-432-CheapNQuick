var dataLayer = require('./MyPostgreSQLDB.js');
module.exports = {
	callGetData: function (data) {
		return dataLayer.getData(data);
	},
	callSetData: function (data) {
		return dataLayer.setData(data);
	},
	callConnect: function () {
		return dataLayer.connect();
	},
	callClose: function () {
		return dataLayer.closeFunc();
	},
	callPrepare: function (id) {
		return dataLayer.prepare(id);
	},
	callPrepareLocation: function (id) {
		//prepare("SELECT storeName FROM store WHERE storeID = ?");
		return dataLayer.prepareLocation(id);
	},
	callDescTable: function () {
		return dataLayer.descTable();
	},
	callLogin: function () {
		return dataLayer.login();
	},
	callLogout: function () {
		return dataLayer.logout();
	},
	callCreateUser: function (credentialString) {
		// createUser impl
		// var creds = str.split(',');
		// var user=creds[0];
		// var pw = sha256(creds[1]);
		// var access=creds[2];
		return dataLayer.createUser(credentialString);
	
	},
	callConnect: function	()	{
		// connect to database
		return dataLayer.connect();
	} 
};