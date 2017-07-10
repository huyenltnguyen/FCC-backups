function myReplace(str, before, after) {
	return str.split(' ')
            .map(val => {
              if (val === before) {
                /[A-Z]/.test(before[0]) ? val = after.substr(0, 1).toUpperCase() + after.substr(1) : val = after;			
              }
              return val;
            })
            .join(' ');  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
