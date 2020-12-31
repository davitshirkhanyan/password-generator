// Assignment Code
let generateBtn = document.querySelector("#generate");

// add variables
let confirmLowerChar = false;
let confirmUpperChar = false;
let confirmNumberChar = false;
let confirmSymbolChar = false;
let confirmLength = '';

// Password Generator Functions
// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    passwordLength();

    let randomPassword = '';
    let characters = '';
  
    if(confirmUpperChar === true) {
        characters += passwordCharacters.upperCaseCharCodes;
    }

    if(confirmLowerChar === true) {
        characters += passwordCharacters.lowerCaseCharCodes;
    }

    if(confirmNumberChar === true) {
        characters += passwordCharacters.numberCharCodes;
    }

    if(confirmSymbolChar === true) {
        characters += passwordCharacters.symbolCharCodes;
    }

    // randomize the characters
    for(let i = 0; i < confirmLength; i++) {
        randomPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }  
    return randomPassword;
}

// add function for the lenght of the password
let passwordLength = function() {
    confirmLength = prompt("How many characters would you like your password to be? (Choose between 8 to 128 characters)");
    if (confirmLength < 8 || confirmLength > 128 || confirmLength === "" || isNaN(confirmLength) || confirmLength === null) {
        alert("You need to choose a password between 8-128 characters");
        passwordLength();
    } 
    else {
       upperCase();
       lowerCase();
       numberCase();
       symbolCase();
    }
    parameters();
    return confirmLength;
};

// add function for uppercase characters
let upperCase = function() {
    confirmUpperChar = confirm("Click OK to add Uppercase Characters");
    if (confirmUpperChar === true) {
        confirmUpperChar = true;
    }
    return confirmUpperChar;
};

// add function for lowercase characters
let lowerCase = function() {
    confirmLowerChar = confirm("Click OK to add Lowercase Characters");
    if (confirmLowerChar === true) {
        confirmLowerChar = true;
    }
    return confirmLowerChar;
};

// add function for number characters
let numberCase = function() {
    confirmNumberChar = confirm("Click OK to add Numeric Characters");
    if (confirmNumberChar === true) {
        confirmNumberChar = true;
    }
    return confirmNumberChar;
};

// add function for symbol characters
let symbolCase = function() {
    confirmSymbolChar = confirm("Click OK to add Special Characters");
    if (confirmSymbolChar === true) {
        confirmSymbolChar = true;
    }
    return confirmSymbolChar;
};

// add function if answer is outside the parameters
let parameters = function() {
    while(confirmUpperChar === false && confirmLowerChar === false && confirmNumberChar === false && confirmSymbolChar === false) {
        alert("You must choose at least one parameter");
        upperCase();
        lowerCase();
        numberCase();
        symbolCase();
    } 
};

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   }
   //End Password Generator Functions

// add object
var passwordCharacters = {
    upperCaseCharCodes: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowerCaseCharCodes: 'abcdefghijklmnopqrstuvwxyz',
    numberCharCodes: '01234567890123456789',
    symbolCharCodes: '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'
};

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

