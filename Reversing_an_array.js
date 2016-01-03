function reverseArray(inp_arr){
  var new_arr = [];
  for (var i = 0; i < inp_arr.length; i++)
    new_arr.unshift(inp_arr[i]);
  return new_arr
}

function reverseArrayInPlace(inp_arr){
  n = Math.floor(inp_arr.length / 2)
  for (var i = 0; i < n; i++){
	var old_val = inp_arr[i];
    inp_arr[i] = inp_arr[inp_arr.length - 1 - i];
    inp_arr[inp_arr.length - 1 - i] = old_val;
  }
  return inp_arr;
}
console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);