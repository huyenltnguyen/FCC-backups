function binaryAgent(str) {
  let text = '';

  str.split(' ').map(function(s) {
    text += String.fromCharCode(parseInt(s, 2));
  });
  
  return text;
}
