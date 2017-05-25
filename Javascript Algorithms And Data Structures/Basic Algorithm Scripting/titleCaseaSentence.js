function titleCase(str) {
  return str.toLowerCase()
            .split(" ")
            .map(function(w) {
              return w[0].toUpperCase() + w.substring(1);
            })
            .join(" ");
}

titleCase("I'm a little tea pot");
