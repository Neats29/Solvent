// compare two arrays and return the strings that are substrings of strings of the second array. 

function presentInArray(arr1, arr2) {
  return arr1.filter(function(a1) {
    return arr2.some(function(a2) {
      return a2.indexOf(needle) > -1;
    });
  }).sort();
}



array1 = ["arp", "live", "strong"]

array2 = ["lively", "alive", "harp", "sharp"]

//returns: ["arp", "live"]
