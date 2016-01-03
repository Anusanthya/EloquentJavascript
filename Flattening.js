var arrays = [[1, 2, 3], [4, 5], [6]];

var new_arr = [];
console.log(arrays.reduce(function(a,b){
  return a.concat(b)}, new_arr))