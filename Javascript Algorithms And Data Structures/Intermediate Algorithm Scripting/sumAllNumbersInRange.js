function sumAll(arr) {	
	arr.sort(function(a,b) {
		return a-b;
	});

	let result = 0;

	for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
		result += i; 
	}
  
	return result;
}

sumAll([1, 4]);
