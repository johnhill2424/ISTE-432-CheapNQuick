var db = require("./MyPostgreSQLDB.js");
var api = require("./api.js");

//testing DB
var pool = db.connect();

//console.log(db.getAllRecipes(pool));

console.log(api.getRecipe());