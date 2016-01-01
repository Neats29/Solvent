#Make changes to arrays without mutating them:

``` javascript
var arr = [1, 2, 3];
var index = 1;
```
## 1. Add a new element to the array:

####Mutable:
``` javascript
arr.push(4) 
console.log(arr) // arr = [1,2,3,4]
```

####Immutable solution:
``` javascript
console.log(        arr.concat([4])         ); // [1,2,3,4]
```
####using the ES6 Spread operator:
``` javascript
console.log(         [...arr,4]             ); // [1,2,3,4]
```

## 2. Remove an element in the array:

####Mutable:
``` javascript
arr.splice(1,1);
console.log(arr) // arr = [1,3]
```

#####Immutable solution:
``` javascript
console.log(        arr.slice(0,index).concat(arr.slice(index+1))         ); // [1,3]
````
####using the ES6 Spread operator:
``` javascript
console.log(       [...arr.slice(0,index), ...list.slice(index+1)]         ); // [1,3]
```
