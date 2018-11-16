var request = require('request');


module.exports = {
  getItemLocation: function () {
    // getItemLocation impl
  },
  getStore: function () {
    // getStore impl
  },
  getPrice: function () {
    // getPrice impl
  },
  getRecipe: function () {

    var api_key = process.env.EDAMAM_API_KEY;

    var url = "https://api.edamam.com/search?q=chicken&app_id=1f5e9cb1&app_key=";

    request(url + api_key, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  },
  getAllRecipes: function () {
    // getAllRecipes impl
  },
  calcPrice: function () {
    // calcPrice impl
  }
};
