const assert = require('chai').assert;

describe('Generate Primes', function() {
	const generatePrimes = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/sumAllPrimes').generatePrimes;

	it('should return an array', function() {		
		assert.isArray(generatePrimes(10));
	});

	it('generatePrimes(10) should return an array that contains 2, 3, 5, 7', function() {
		assert.deepEqual(generatePrimes(10), [2, 3, 5, 7]);	
	});
});

describe('Sum Primes', function() {
	const sumPrimes = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/sumAllPrimes').sumPrimes;

	it('should return a number', function() {
		assert.isNumber(sumPrimes(10));
	});

	it('sumPrimes(10) should return 17', function() {
		assert.strictEqual(sumPrimes(10), 17);
	});

	it('sumPrimes(977) should return 73156', function() {
		assert.strictEqual(sumPrimes(977), 73156);
	});
});