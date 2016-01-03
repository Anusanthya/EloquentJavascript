function range(start,end,step){
  var x = [];
  if (step == null)
    step = 1;
  if (step > 0) {
	for (var i = start; i <= end; i += step)
		x.push(i);
  } else {
	for (var j = start; j >= end; j += step)
		x.push(j);
  }
  return x;
}

function sum(num_arr){
  var sum = 0;
  for (var i = 0; i <= num_arr.length; i++)
    sum += i;
  return sum;
}
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));