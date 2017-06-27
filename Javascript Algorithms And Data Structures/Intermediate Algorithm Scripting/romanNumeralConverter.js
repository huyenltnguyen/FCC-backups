//noprotect
function convertToRoman(num) {
  let value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	let romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

	let converted = '';

	for (let i = 0; i < value.length; i++) {
		while (num >= value[i]) {
			converted += romanNum[i];
			num -= value[i];
		}
	}
  return converted;
}

convertToRoman(36);
