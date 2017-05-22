function repeatStringNumTimes(str, num) {
  // shorter, but not accepted solution:
  // return num > 0 ? str.repeat(num) : "";

  var newStr = str;
  if (num < 0) {
    return "";
  } else {
    while (num > 1) {
      newStr += str;
      num--;
    }
  }  
  return newStr;
}

repeatStringNumTimes("abc", 3);
