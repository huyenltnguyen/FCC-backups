function findElement(arr, func) {
  var result = arr.filter(function(val) {
    return func(val) ? val : undefined;    
  });
  return result[0];
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });
