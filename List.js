function arrayToList(in_arr){
  var new_list = null;
  for (var i = in_arr.length - 1; i >= 0; i--)
    new_list = {value: in_arr[i], rest: new_list};
  return new_list;
}	

function listToArray(in_list){
  var new_arr = [];
  for (var node = in_list; node; node = node.rest) {
    new_arr.push(node.value);
  }
  return new_arr;
}

function prepend(element, in_list){
  return {value: element, rest: in_list};
}

function nth(in_list,pos){
  if (!in_list)
    return undefined;
  else if (pos == 0)
    return in_list.value;
  else
    return nth(in_list.rest, pos - 1)
}


console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));