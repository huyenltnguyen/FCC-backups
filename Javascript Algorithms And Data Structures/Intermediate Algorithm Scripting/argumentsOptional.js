function checkIfNumber(num) {
	return typeof num === 'number' ? num : undefined;
}

function addTogether() {
	if (arguments.length === 2) {
		if (checkIfNumber(arguments[0]) && checkIfNumber(arguments[1])) {
			return arguments[0] + arguments[1];
		} else {
			return undefined;
		}
	} else{
		const a = checkIfNumber(arguments[0]);		
		if (a) {
			return function(b) {
				if (checkIfNumber(b)) {
					return a + b;
				}
				return undefined;			
			};
		}
		return undefined;
	}		
}
