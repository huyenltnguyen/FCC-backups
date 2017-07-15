
function uniteUnique(arr) {
  let args = Array.prototype.slice.call(arguments);

	let combinedArr = args.reduce( (a, b) => {
		return a.concat(b);
	});

	let sortedArr = [];

	combinedArr.map(element => {
		if (sortedArr.indexOf(element) === -1) {
			sortedArr.push(element);
		}
	});
  
  return sortedArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
