let quoteSample = "3 blind mice.";
let myRegex = /[^aieou|0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line