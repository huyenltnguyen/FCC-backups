function fearNotLetter(str) {
  let arr = str.split('').map(char => {
    char = char.charCodeAt(0);
    return char;
  });

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] - arr[i-1] !== 1) {
      return String.fromCharCode(arr[i] -1);
    }
  }
}

fearNotLetter("abce");
