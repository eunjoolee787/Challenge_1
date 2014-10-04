exports.sumOfAMultiple = function(n){
  var sum = 0;
  // do your work here
  for (var x = 3; x < n; x++) {
    if (x % 3 === 0 || x % 5 === 0) {
      sum += x;
    }
  }
  return sum;
};