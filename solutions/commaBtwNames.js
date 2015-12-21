//Given a list of names, return names in the following format: 
//list([ {name: 'Sam'}, {name: 'Matt'}, {name: 'Fred'} ])
// should return 'Sam, Matt & Fred'

function list(names){
  return names.reduce(function(prev, curr, i, arr){
    return prev + curr.name + (i < arr.length-2 ? ', ' : i == arr.length - 2 ? ' & ' : '');
  }, '');
}
