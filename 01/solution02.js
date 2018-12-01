// AdventOfCode2018-01
var fs = require('fs');
var frequency = 0; 
var frequencyHistory = [];
var loopCount = 0;

var textFile = fs.readFileSync('./input.txt').toString();
var textArray = textFile.split(/\r?\n/);

var foundDuplicate = false;
while (!foundDuplicate) {
    for (var line of textArray) {
        if (line.substr(0,1) == '+') {
            frequency += parseInt(line.substr(1));
        }
        else {
            frequency -= parseInt(line.substr(1));
        }
        //console.log(frequency.toString());
        if (frequencyHistory.includes(frequency)) {
            console.log('The first repeated frequency is ' + frequency);
            firstRepeatedFrequency = frequency;
            foundDuplicate = true;
            break;
        }
        else {
            frequencyHistory.push(frequency);
        }
    };
    loopCount += 1;
}

console.log(loopCount);