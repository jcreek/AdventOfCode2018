// AdventOfCode2018-02

var twiceCounter = 0; 
var thriceCounter = 0;

// Import the input file
var fs = require('fs');
var frequency = 0; 

var textFile = fs.readFileSync('./input.txt').toString();
var textArray = textFile.split(/\r?\n/);

function compareStrings (string1, string2) {
    if (string1 == string2) {
        // Do nothing, it's the same string
    }
    
    // Split the characters of both strings into arrays 
    var arr1 = [];
    var arr2 = [];
    for (ii = 0; ii < string1.length; ii++) {
        arr1.push(string1.charAt(ii));
    }
    for (jj = 0; jj < string2.length; jj++) {
        arr2.push(string2.charAt(jj));
    }

    var wrongCharCounter = 0; 
    var sameChars = [];
    // For each letter in the first array, check if it corresponds to the appropriate letter in the second array
    for (kk = 0; kk < arr1.length; kk++) {
        if (arr1[kk] != arr2[kk]) {
            wrongCharCounter += 1;
        }
        else { 
            sameChars.push(arr1[kk]);
        }
    }
    if (wrongCharCounter == 1) {
        var re = new RegExp(',', 'g');
        console.log('Common letters are: ' + sameChars.toString().replace(re, ''));
        return true;
    }
    else {
        return false;
    }
}

var endLoop = false;
// For each line of the input file
for (i = 0; i < textArray.length; i++) {
    // Compare this line with each other line in the array 
    for (j = 0; j < textArray.length; j++) {
        if (compareStrings(textArray[i],textArray[j])) {
            // If it finds a string with just one letter wrong
            endLoop = true; 
            break;
        }
    }
    if (endLoop) {
        break;
    }
};