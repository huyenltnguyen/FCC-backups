function truncateString(str, num) {
  // if string is longer than the maximum
  // then check whether or not the maxium is greater than 3
  // if the maximum is greater than 3: return the first (num - 3) characters and "..."
  // otherwise, return the first (num) characters and "..."
  if (str.length > num) {
    return num > 3 ? str.slice(0, num-3)  + "..." : str.slice(0, num) + "...";
  }
  return str;  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
