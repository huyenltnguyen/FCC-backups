function getIndexToIns(arr, num) {
  // if arr contains num, sort arr in ascending order and return the index of the element that's equal to num
  if (arr.indexOf(num) !== -1) { 
    arr.sort(function(a, b) {
      return a-b;
    });
    return arr.indexOf(num);
  }
  // otherwise, push num into arr, then sort arr in ascending order and return the index of num
  else {
    arr.push(num);
    arr.sort(function(a, b) {
      return a-b;
    });
    return arr.indexOf(num);    
  }
}

getIndexToIns([40, 60], 50);
