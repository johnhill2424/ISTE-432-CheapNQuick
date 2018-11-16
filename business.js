var service = require('./service.js');
module.exports = {
	callGetData: function (data) {
		return service.callGetData(data);
	},
	callSetData: function (data) {
		return service.callSetData(data);
	},
	callConnect: function () {
		return service.callConnect();
	},
	callClose: function () {
		return service.callClose();
	},
	callPrepare: function (id) {
		return service.callPrepare(id);
	},
	callDescTable: function () {
		return service.callDescTable();
	},
	callLogin: function () {
		return service.callLogin();
	},
	callLogout: function () {
		return service.callLogout();
	},
	callCreateUser: function (credentialString) {
		// createUser impl
		// var creds = str.split(',');
		// var user=creds[0];
		// var pw = sha256(creds[1]);
		// var access=creds[2];
		return service.callCreateUser(credentialString);
	
	},
	callConnect: function	()	{
		return service.callConnect();
	} 
};