function dropElements(arr, func) {
	let newArr = [];

 	for (let i = 0; i < arr.length; i++) {
 		const stopDrop = func(arr[i]);

 		if (stopDrop) {
 			newArr = arr.slice(i);
 			return newArr; 			
 		} 		
 	}

 	return newArr;  
}