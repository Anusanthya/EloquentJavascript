function every(inp_arr, predicate){
	for (var i = 0; i < inp_arr.length; i++){
		if (!predicate(inp_arr[i]))
			return false;
	}
	return true;
}

function some(inp_arr, predicate){
	for (var j = 0; j < inp_arr.length; j++){
		if (predicate(inp_arr[j]))
			return true;
	}
	return false;
}


console.log(every([NaN, NaN, NaN], isNaN));
// ? true
console.log(every([NaN, NaN, 4], isNaN));
// ? false
console.log(some([NaN, 3, 4], isNaN));
// ? true
console.log(some([2, 3, 4], isNaN));
// ? false