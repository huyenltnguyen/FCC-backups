function diffArray(arr1, arr2) {
  let combination = arr1.concat(arr2);
  
  let newArr = combination.filter(function(val) {
  	if (arr1.indexOf(val) === -1 || arr2.indexOf(val) === -1) {
  		return val;
  	}
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
