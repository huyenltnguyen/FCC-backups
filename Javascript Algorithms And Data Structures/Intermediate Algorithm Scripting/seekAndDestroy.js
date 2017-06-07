function destroyer(arr) {
  // get all arguments except the first one
	let otherArgs = Array.prototype.slice.call(arguments, 1);
  
	let newArr = arr.filter(function(elem) {
		if (otherArgs.indexOf(elem) === -1) {return elem;}
	});
	return newArr; 
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
