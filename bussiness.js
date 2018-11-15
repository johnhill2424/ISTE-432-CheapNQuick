var data = require(MyPostgreSQL.js);
var wegmans = require(WegmansAPI.js);

function addRecipe(){
	var recipes = wegmans.getRecipe();
}

function setLocation(location){
	data.setData(location);	
}

function getLocation(storeID){
	data.prepareLocation(storeID);
}

function login(username, pwd){
	data.login(username, pwd);
}

function logout(username){
	data.logout(username);
}

function createUser(credentialString){
	data.createUser(credentialString);
}