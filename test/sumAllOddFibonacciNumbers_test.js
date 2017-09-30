const assert = require('chai').assert;

describe('Fibonacci Sequence Generator', function() {
	var oddFibSequence = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/sumAllOddFibonacciNumbers').oddFibSequence;

	it('should return an array', function() {
		assert.isArray(oddFibSequence(4), 'should return an array');
	});

	it('should return an array that contains 1, 1, 3', function() {
		assert.deepEqual(oddFibSequence(4), [1, 1, 3]);		
	});
});

describe('Sum Fibonacci Sequence', function() {
	var sumFibs = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/sumAllOddFibonacciNumbers').sumFibs;
	
	it('should return a number', function() {
		assert.isNumber(sumFibs(4));
	});

	it('should return 5', function() {
		assert.strictEqual(sumFibs(4), 5);
	});
});