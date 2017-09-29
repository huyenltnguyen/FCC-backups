function sumFibs(num) {
	const fibs = oddFibSequence(num);

	return fibs.reduce(function(sum, value) {
		return sum + value;
	}, 0);
}

function oddFibSequence(maxNum) {
	let fibs = [1, 1];

	while (fibs[fibs.length - 1] + fibs[fibs.length - 2] <= maxNum ) {
		fibs.push(fibs[fibs.length - 2] + fibs[fibs.length - 1]);
	}

	return fibs.filter(function(num) {
		return num % 2 === 1;
	});
}

module.exports.sumFibs = sumFibs;
module.exports.oddFibSequence = oddFibSequence;