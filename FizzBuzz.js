var n = 1;
while (n <= 100) {
  var out = "";
  if (n % 3 == 0 && n % 5 == 0)
    out += "FizzBuzz";
  else if (n % 3 == 0)
    out += "Fizz";
  else if (n % 5 == 0)
    out += "Buzz";
  console.log(out || n);
  n++;
}