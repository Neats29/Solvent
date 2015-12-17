//If arguments is an array and all elements are integers, return true

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(x => Math.floor(x) === x);
}

isIntArray([1, 2, 3, NaN]) //false
isIntArray([5.56789e-0, 2]) //false
isIntArray([10, 20, 236, 324) //true
isIntArray([]) //true
