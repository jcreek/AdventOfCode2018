// AdventOfCode2018-01
var fs = require('fs');
var frequency = 0; 

var textFile = fs.readFileSync('./input.txt').toString();
var textArray = textFile.split(/\r?\n/);

textArray.forEach(line => {
    if (line.substr(0,1) == '+') {
        frequency += parseInt(line.substr(1));
    }
    else {
        frequency -= parseInt(line.substr(1));
    }
});

console.log('The resulting frequency is ' + frequency);