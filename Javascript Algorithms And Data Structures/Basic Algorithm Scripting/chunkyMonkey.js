// solution without mutation
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var index = 0;
  
  while (index < arr.length) {
    newArr.push(arr.slice(index, index + size));
    index += size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
