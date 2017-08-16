function convertHTML(str) {
  const entities = {
  	'&': '&amp;',
  	'<': '&lt;',
  	'>': '&gt;',
  	'"': '&quot;',
  	'\'': '&apos;'
  };

  return str.replace(/&|<|>|"|'/g, r => entities[r]);
}

convertHTML("Dolce & Gabbana");
