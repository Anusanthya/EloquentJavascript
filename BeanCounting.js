function countBs(string_val) {
	return countChar(string_val, "B");
}

function countChar(string_val, check_val) {
  var count = 0;
  for (var i = 0; i < string_val.length; i++) 
    if (string_val.charAt(i) == check_val)
		count += 1;
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));