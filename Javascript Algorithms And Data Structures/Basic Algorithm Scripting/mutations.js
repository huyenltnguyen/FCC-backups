function mutation(arr) {
  var newArr = arr.map(function(str) {
    return str.toLowerCase();
  });

  for (var i = 0; i < newArr[1].length; i++) {
    if (newArr[0].indexOf(newArr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "Hey"]);
