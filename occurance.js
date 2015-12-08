//Return the number of occurance(s) of each element in a string

function count (string) {  
  var obj = {};
  string.split('').forEach(function(s) {
     obj[s] ? obj[s]++ : obj[s] = 1;
  });
  return obj;
}


count("aba");
// {a: 1, b: 2}