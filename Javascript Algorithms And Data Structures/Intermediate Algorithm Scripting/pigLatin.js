function translatePigLatin(str) {
	let vowels = ['a', 'i', 'e', 'o', 'u'];
	let arr = str.split('');

	if (str[0] === 'a' || str[0] === 'e') {
		return str + 'way';
	}

	while (vowels.indexOf(arr[0]) === -1) {
		let subArr = arr.splice(0, 1);
		arr.push(subArr);
	}

	return arr.join('') + 'ay';
}

translatePigLatin("california");
