function type(inp_obj){
    return Object.prototype.toString.call(inp_obj).slice(8, -1);
}
function stringify(inp){
  //var inp_type = typeof(inp);
  if (type(inp) === "Null"){
    return "null";
  }
  if (type(inp) === "Undefined" || type(inp) === "Function"){
    return null;
  }
  if (type(inp) === "String"){
    return '"' + inp + '"';
  }
  if (type(inp) === "Number" || type(inp) === "Boolean"){
    return inp;
  }
  if (type(inp) === "Array"){
    return '[' + inp.map(function(inpp){
      return stringify(inpp);
    }).join(",") + ']';
  }
  if (type(inp) === "Object"){
    var temp = [];
    var inp_keys = Object.keys(inp);
    inp_keys.forEach(function(key){
      var key_val = stringify(inp[key])
      if (key_val !== null){
        temp.push('"' + key + '": ' + key_val);
      }
    });
    return "{" + temp.join(",") + "}";
  }
}


var x = {
  name: "Sandy",
  class: 12,
  marks: [88, 90, 75, 80, 68]
}

var a = stringify(x);
console.log(a);