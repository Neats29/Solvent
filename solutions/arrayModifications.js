//Make changes to arrays without mutating them:

//1. Add a new element to the array:

var arr = [1, 2, 3];
//Mutable:
arr.push(4) 
console.log(arr) // arr = [1,2,3,4] 

//Immutable solution:
console.log(  arr.concat([4])   ); // [1,2,3,4]
//using the ES6 Spread operator:
console.log(  [...arr,4]   ); // [1,2,3,4]
