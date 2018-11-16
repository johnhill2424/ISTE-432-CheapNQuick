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
    request('https://api.edamam.com/search?q=chicken&app_id=1f5e9cb1&app_key=94433d21b98f8e44def6c39271734749&from=0&to=3&calories=591-722&health=alcohol-free', function (error, response, body) {
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
