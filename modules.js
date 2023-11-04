// console.log(arguments);
// console.log(require('module').wrapper);

// modules.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require('./test-modules-2')
// console.log(calc2.add(2, 5));
// console.log(calc2.divide(2, 5));
// console.log(calc2.multiply(2, 5));
const { add, multiply, divide } = require("./test-modules-2");
console.log(multiply(2, 5));

// caching
require('./test-modules-3')();
require('./test-modules-3')();
require('./test-modules-3')();
