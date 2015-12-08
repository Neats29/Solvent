//From an array of integers, return the integer that occurs odd number of times

const odd = (xs) => xs.reduce((a, b) => a ^ b);

//odd([1, 1, 2, 2, 3, 3, 4, 5, 5])
// returns 4

//This uses the XOR opperator, see more here: https://en.wikipedia.org/wiki/Exclusive_or
