var business = require('./business.js');
module.exports = {
	sayHello: function(){
		return 'hello';
	},
	getRecipes: function (data) {
		return business.callGetData(data);
	},
	setRecipes: function (data) {
		return business.callSetData(data);
	},
	connectDB: function (connectId) {
		return business.callConnect(connectId);
	},
	closeDB: function () {
		return business.callClose();
	},
	prepareStatement: function (id) {
		return business.callPrepare(id);
	},
	descTable: function () {
		return business.callDescTable();
	},
	login: function () {
		return business.callLogin();
	},
	logout: function () {
		return business.callLogout();
	},
	createUser: function (credentialString) {
		return business.callCreateUser(credentialString);
	
	}	
}