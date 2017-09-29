const assert = require('chai').assert;

describe('Fibonacci Sequence Generator', function() {
	var generateFibonacciSquence = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/sumAllOddFibonacciNumbers').generateFibonacciSquence;

	it('should return an array', function() {
		assert.isArray(generateFibonacciSquence(4), 'what kind of tea do we want?');
	});
})