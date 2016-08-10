// Your code here.
function every(elements, action){
  var isTrue = true;
  for(var i = 0; i<elements.length; i++){
    if (action(elements[i]) === false){
      isTrue = false;
    }
  }
  return isTrue;
}

function some(elements, action){
  var isTrue = false; // assume false, have to check to make sure some are true
  for(var i = 0; i<elements.length; i++){
    if (action(elements[i]) === true){
      isTrue = true;
    }
  }
  return isTrue;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false