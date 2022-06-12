const math = require('./math.js');
const colors = require('colors');

console.log('The sum of 1 and 2 is:'.green, math.add(1,2));
console.log('The difference of 1 and 2 is:'.yellow, math.substract(1,2));
console.log('The multiplication of 1 and 2 is:'.blue, math.multiply(1,2));
console.log('The division of 1 and 2 is:', math.divide(1,2));
console.log('The division of 1 and 0 is:'.red, math.divide(1,0));