function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2')
  			.replace(/\W|_/g, "-")
			  .toLowerCase();
}

spinalCase('This Is Spinal Tap');
