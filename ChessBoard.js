var size = 8 ;
var spc = "";
for (var b = 0; b < size; b++) {
  for (var a = 0; a < size; a ++) {
    if ((a + b) % 2 == 0)
      spc += " ";
    else 
      spc += "#";
  }
  spc += "\n";
}
console.log(spc);