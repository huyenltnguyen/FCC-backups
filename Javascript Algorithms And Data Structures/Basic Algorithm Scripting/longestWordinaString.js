function findLongestWord(str) {
  var words = str.split(' ');
  var longest = 0;
  words.map(function(w) {
    if (w.length > longest) {
      longest = w.length;
    }
  });
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
