var service = require('./service.js');
module.exports = {
	callGetData: function (data) {
		return service.callGetData(data);
	},
	callSetData: function (data) {
		return service.callSetData(data);
	},
	callConnect: function (connection) {
		return service.callConnect(connection);
	},
	callClose: function () {
		return service.callClose();
	},
	callPrepare: function (id) {
		return service.callPrepare(id);
	}
};