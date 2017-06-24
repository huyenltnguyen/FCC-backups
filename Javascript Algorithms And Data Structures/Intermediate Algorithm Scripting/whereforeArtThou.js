// noprotect
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  
  // loop through collection, find and return items that have all the properties in source
  arr = collection.filter(function(item) {  	
	for (prop in source) {
  		if (!item.hasOwnProperty(prop)) {
  			return false;
  		}
  	}
  	return true;  	  	
  }).filter(function(item) {
  	// loop through the returned items and return the ones whose key-value pairs match the source's 
  	for (prop in source) {
  		return item[prop] === source[prop];
  	}
  });
  
  // Only change code above this line
  return arr;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
