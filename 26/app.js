var greet = require('./greet1');

greet();

var greet3 = require('./greet3');
greet3.greet();

var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();