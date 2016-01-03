function deepEqual(val1,val2){
  
  if (val1 === val2)
    return true;
  
  if ((typeof val1 == "object" && val1 != null) || (typeof val2 == "object" && val2 != null))
    if (val1 == val2)
      return true;
   
  var val1_count = 0, val2_count = 0;
  
  for (var x in val1)
    val1_count += 1;
  
  for (var x in val2){
    val2_count += 1;
    if (!(x in val1) || !deepEqual(val1[x], val2[x]))
      return false;
  }
  
  return val1_count == val2_count;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
