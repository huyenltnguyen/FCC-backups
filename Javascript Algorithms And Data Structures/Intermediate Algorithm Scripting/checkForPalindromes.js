function palindrome(str) {
  // turn str to lowercase and filter out all non-alphanumeric characters
  let newStr = str.toLowerCase().match(/[^\W_]/g);
  
  // create a reversed copy of newStr
  let reverseStr = [];  
  for(let i = newStr.length - 1; i >= 0; i--) {
  	reverseStr.push(newStr[i]);
  }
  
  return newStr.join('') === reverseStr.join('');
}

palindrome("eye");
