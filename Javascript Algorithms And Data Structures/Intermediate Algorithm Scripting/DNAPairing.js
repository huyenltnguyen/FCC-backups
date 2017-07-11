function pairElement(str) {
  let pairs = str.split('')
                .map(char => {  
                  if (char === 'A') {
                    return ['A', 'T'];
                  } else if (char === 'T') {
                      return ['T', 'A'];
                  } else if (char === 'G') {
                      return ['G', 'C'];
                  } else {
                      return ['C', 'G'];
                  }
                });
  
  return pairs;
}

pairElement("GCG");
