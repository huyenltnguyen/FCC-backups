function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(val) {
    if (val !== false || val !== null || val !== 0 || val !== "" || val !== undefined || val !== val) {
      return val;
    }    
  });
}

bouncer([7, "ate", "", false, 9]);
