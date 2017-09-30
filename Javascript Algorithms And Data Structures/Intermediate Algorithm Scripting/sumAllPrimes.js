function sumPrimes(num) {
  const primes = generatePrimes(num);

  return primes.reduce(function(sum, val) {
  	return sum + val;
  }, 0);  
}

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

module.exports.sumPrimes = sumPrimes;
module.exports.generatePrimes = generatePrimes;