function smallestCommons(arr) {
	let numList = createNumList(arr);
	let factorList = [];		// contains sets of factors and its exponent value of all the numbers in the numList
	let highestExponent;	
	let smallestCommon = 1;	

	// gathers all prime factors of each number in the list
	numList.map(function(num) {
		if (num !== 1) {
			factorList.push(findPrimeFactors(num));
		}
	});

	highestExponent = findHighestExponent(factorList);	

	for (let factor in highestExponent) {
		const power = parseInt(highestExponent[factor]);

		smallestCommon = smallestCommon * Math.pow(Number(factor), power);
	}

	return smallestCommon;  
}

// creates a list of all sequential numbers in the range
function createNumList(arr) {
	let numList = [...arr];
	const max = Math.max(...numList);
	const min = Math.min(...numList);

	for (let i = min + 1; i < max; i++) {
		numList.push(i);
	}

	return numList.sort(function(a, b) {
		return a - b;
	});
}

// creates an array of all primes within the range
function generatePrimes(maxNum) {
	let primes = [2];
	let num = 3;

	while (num <= maxNum) {
		const primeValidate = primes.filter(function(prime) {
			return num % prime === 0;
		});

		if (primeValidate.length === 0) {
			primes.push(num);
		}

		num++;
	}

	return primes;
}

// find prime factors of a number
// and returns an object that the key is the FACTOR and the value is its POWER
function findPrimeFactors(number) {
	let num = number;
	let primeSequence = generatePrimes(num);
	let factors = {};

	while (num !== 1) {
		primeSequence.map(function(prime) {			
			while (num % prime === 0) {							
				num = num / prime;
				factors[prime] ? factors[prime]++ : factors[prime] = 1;				
			}									
		});
	}

	return factors;
}

// loops through every set of the list and finds the highest exponent of each factor
function findHighestExponent(factorList) {
	let highestExponent = {};

	// loops through the factor list, find the highest exponent of each factors
	factorList.map(function(list) {
		let listFactors = Object.keys(list);
		
		listFactors.map(function(factor) {
			if (!highestExponent[factor] || highestExponent[factor] < list[factor]) {
				highestExponent[factor] = list[factor];
			}
		});
	});

	return highestExponent;
}

module.exports.createNumList = createNumList;
module.exports.generatePrimes = generatePrimes;
module.exports.findPrimeFactors = findPrimeFactors;
module.exports.findHighestExponent = findHighestExponent;
module.exports.smallestCommons = smallestCommons;