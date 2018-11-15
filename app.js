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
		return business.callClose(close);
	},
	prepareStatement: function (id) {
		return service.callPrepare(id);
	}
	
}