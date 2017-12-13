function truthCheck(collection, pre) {
  let truthy = collection.filter(function(item) {
		return (item[pre] === false || item[pre] === 0 || item[pre] === '' || item[pre] === null || item[pre] === undefined || item[pre] !== item[pre]);
	});
  return truthy.length === 0;
}
