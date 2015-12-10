//given array of numbers, find which two elements were added together to return the 'target' value

function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        // console.log("FIRST:",numbers[i])
        for (var j = i+1; j < numbers.length; j++) {
            // console.log("SECOND:",numbers[j])
            if (numbers[i] + numbers[j] === target)
                return [i,j];
        }
    }
}

//returns the indeces of the two elemnts that were added;
twoSum([1,2,3, 4, 5, 6, 7], 13);
//return [5 6]