//From an array of integers, return the integer that occurs odd number of times

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//This uses the XOR opperator, see more here: https://en.wikipedia.org/wiki/Exclusive_or