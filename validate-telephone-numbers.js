// freeCodeCamp Advanced Algorithm Scripting Challenge #1
// https://www.freecodecamp.org/challenges/validate-us-telephone-numbers

// Validate US Telephone Numbers
// Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
    // Good luck!
    return true;
}

telephoneCheck("555-555-5555");

// Solution
function telephoneCheck(str) {
    // Good luck!
    // ^(1\s?)? checks for "1" or "1 " at the start
    // (\(\d{3}\)|\d{3}) checks for 3 digits w or w/o parenthesis
    // [\s\-]? checks for space or dash
    // \d{3} checks for 3 digits
    // [\s\-]? checks for space or dash
    // \d{4} checks for 4 digits
    // $ end of string
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    // tests str to see if it matches the regular expression
    return regex.test(str);
}
telephoneCheck("555-555-5555");