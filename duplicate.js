//replace duplicates in an array with a given character, else replace it with another character

function duplicate(word){
  return word.toLowerCase().split('').map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? '$' : '#'
    }).join('');
}

// duplicate('recede')
// returns '$#$#$#'