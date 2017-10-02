const assert = require('chai').assert;


describe('Create Number Sequence', function() {
	const createNumList = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/smallestCommonMultiple').createNumList;

	it('should return an array', function() {
		assert.isArray(createNumList([1, 3]));
	});

	it('createNumList([1, 3]) should return [1, 2, 3]', function() {
		assert.deepEqual(createNumList([1, 3]), [1, 2, 3]);
	});
});


describe('Generate Primes', function() {
	const generatePrimes = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/smallestCommonMultiple').generatePrimes;

	it('should return an array', function() {
		assert.isArray(generatePrimes(10));
	});

	it('generatePrimes(10) should return [2, 3, 5, 7]', function() {
		assert.deepEqual(generatePrimes(10), [2, 3, 5, 7]);
	});
});


describe('Find Prime Factors', function() {
	const findPrimeFactors = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/smallestCommonMultiple').findPrimeFactors;

	it('should return an object', function() {
		assert.isObject(findPrimeFactors(10));
	});

	it('findPrimeFactors(10) should return {2: 1, 5: 1}', function() {
		assert.deepEqual(findPrimeFactors(10), {2: 1, 5: 1});
	});

	it('findPrimeFactors(8) should return {2: 3}', function() {
		assert.deepEqual(findPrimeFactors(8), {2: 3});
	});
});


describe('Find The Highest Exponent of Each Factor in the Lists', function() {
	const findHighestExponent = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/smallestCommonMultiple').findHighestExponent;

	const factorList = [
												{	2: 1 },
												{	3: 1 },
												{	2: 2 }
											];

	it('should return an object', function() {
		assert.isObject(findHighestExponent(factorList));
	});

	it('findHighestExponent([ {2: 1}, {3:1}, {2:2} ]) should return {2: 2, 3: 1}', function() {
		assert.deepEqual(findHighestExponent(factorList), {2: 2, 3: 1});
	});
});


describe('Smallest Common Multiple', function() {
	const smallestCommons = require('../Javascript Algorithms And Data Structures/Intermediate Algorithm Scripting/smallestCommonMultiple').smallestCommons;

	it('should return a number', function() {
		assert.isNumber(smallestCommons([1, 3]));
	});

	it('smallestCommons([1, 3]) should return 6', function() {
		assert.strictEqual(smallestCommons([1, 3]), 6);
	});

	it('smallestCommons([2, 10]) should return 2520', function() {
		assert.strictEqual(smallestCommons([2, 10]), 2520);
	});

	it('smallestCommons([10, 2]) should return 2520', function() {
		assert.strictEqual(smallestCommons([10, 2]), 2520);
	});

	it('smallestCommons([1, 13]) should return 360360', function() {
		assert.strictEqual(smallestCommons([1, 13]), 360360);
	});

	it('smallestCommons([23, 18]) should return 6056820', function() {
		assert.strictEqual(smallestCommons([23, 18]), 6056820);
	});
});