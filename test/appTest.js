const assert = require('chai').assert;
const app = require('../app');

describe('App', function(){
	it('app should return hello', function(){
		let result = app.sayHello();
		assert.equal(result, 'hello');
	});
	
	it('app should return getData', function(){
		let result = app.getRecipes('data');
		assert.equal(result, 'getData');
	});
	
	it('app should return setData', function(){
		let result = app.setRecipes('data');
		assert.equal(result, 'setData');
	});
	
	it('app should return connect', function(){
		let result = app.connectDB('1234');
		assert.equal(result, 'connect');
	});
	
	it('app should return close', function(){
		let result = app.closeDB();
		assert.equal(result, 'close');
	});
	
	it('app should return prepare', function(){
		let result = app.prepareStatement('1234');
		assert.equal(result, 'prepare');
	});
	
});