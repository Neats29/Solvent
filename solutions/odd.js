//From an array of integers, return the integer that occurs odd number of times

const odd = (xs) => xs.reduce((a, b) => a ^ b);

//odd([1, 1, 2, 2, 3, 3, 4, 5, 5])
// returns 4

//This uses the XOR opperator, see more here: https://en.wikipedia.org/wiki/Exclusive_or



//Normal (expanded answer for alternative tasks)
  var arr = []
  var copy = A.slice(0);
  for (var i = 0; i < A.length; i++) {
     var count = 0;
     for (var j = 0; j < copy.length; j++) {
       if (A[i] == copy[j]) {
          count++;
          delete copy[j];
       }
     }
        if (count > 0) {
   			var obj = {};
   			obj.value = A[i];
   			obj.Count = count;
   			arr.push(obj);
 		    }
   }
   var x;
   arr.filter((a, i) => a.Count % 2 !== 0 ? x = a.value : false );
   return x
 }
