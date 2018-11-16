
const request = require('request');


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
    request('https://api.edamam.com/search?q=chicken&app_id=1f5e9cb1&app_key=94433d21b98f8e44def6c39271734749&from=0&to=3&calories=591-722&health=alcohol-free', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      console.log(body.url);
      console.log(body.explanation);
    });
  },
  getAllRecipes: function () {
    // getAllRecipes impl
  },
  calcPrice: function () {
    // calcPrice impl
  }
};
