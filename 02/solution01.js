// AdventOfCode2018-02

var twiceCounter = 0; 
var thriceCounter = 0;

// Import the input file
var fs = require('fs');
var frequency = 0; 

var textFile = fs.readFileSync('./input.txt').toString();
var textArray = textFile.split(/\r?\n/);

// For each line of the input file
textArray.forEach(line => {
    var searchCharHistory = [];
    var lineTwiceCounter = 0;
    var lineThriceCounter = 0;
    for (i = 0; i < line.length; i++) {
        searchChar = line.charAt(i);
        if (!searchCharHistory.indexOf(searchChar) >= 0) {
            // If we haven't already counted this letter 
            //console.log('Searching for ' + searchChar + ' in line ' + line);
            var re = new RegExp(searchChar, 'g');
            var matchCharCount = (line.match(re) || []).length;
            //console.log(matchCharCount);
            // Check if a letter appears twice (and increment the counter) 
            if (matchCharCount == 2) {
                lineTwiceCounter += 1;
            }
            // Check if a letter appears three times (and increment the counter)
            else if (matchCharCount == 3) {
                lineThriceCounter += 1;
            }
        }
        searchCharHistory.push(searchChar);
    }
    if (lineTwiceCounter > 0) {
        twiceCounter += 1;
    }
    if (lineThriceCounter > 0) {
        thriceCounter += 1;
    }
});

console.log(twiceCounter);
console.log(thriceCounter);
// multiply the two counters together 
console.log('The checksum is ' + (twiceCounter * thriceCounter));