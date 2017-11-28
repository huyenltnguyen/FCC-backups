function steamrollArray(arr) {
  // I'm a steamroller, baby
  const flattened = [].concat(...arr);
  return flattened.some(Array.isArray) ? steamrollArray(flattened) : flattened;
}

steamrollArray([1, [2], [3, [[4]]]]);
