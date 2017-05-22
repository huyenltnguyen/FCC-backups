function confirmEnding(str, target) {
  // cretes a new string which does not contain special characters
  var newStr = str.match(/[A-Za-z]+/g).join("");
  // extracts the newStr's ending with the length as same as the target's, counting from the end
  var strEnd = newStr.slice(newStr.length - target.length, newStr.length);
  return strEnd === target;
}

confirmEnding("He has to give me a new name", "name");
