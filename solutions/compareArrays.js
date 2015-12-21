// compare two arrays and return the strings that are substrings of strings of the second array. 

function presentInArray(arr1, arr2) {
  return arr1.filter(function(a1) {
    return arr2.some(function(a2) {
      return a2.indexOf(a1) > -1;
    });
  }).sort();
}



var array1 = ["home", "new", "few"]
var array2 = ["newly", "homer", "fact", "snow"]

//returns: ["home", "new"]
