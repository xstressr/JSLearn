var names = ["abc", "cba", "nba"];
names.forEach(function(item) {
  console.log(this); // 三次window
});