//Assignment Code
let generateBtn = document.querySelector("#generate");

    let lowerCaseCharCodes = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseCharCodes = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberCharCodes = '0123456789';
    let symbolCharCodes = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    let confirmLowerChar = false;
    let confirmUpperChar = false;
    let confirmNumberChar = false;
    let confirmSymbolChar = false;
    let password = '';
    let confirmLength = '';

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
    passwordLength();

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


//add function for lowercase characters

let upperCase = function() {
    confirmUpperChar = confirm("Click OK to add uppercase characters");
    if (confirmUpperChar === true) {
        confirmUpperChar = true;
    }
    return confirmUpperChar;
};
//add function for uppercase characters

let lowerCase = function() {
    confirmLowerChar = confirm("Click OK to add lowercase characters");
    if (confirmLowerChar === true) {
        confirmLowerChar = true;
    }
    return confirmLowerChar;
};

//add function for number characters
let numberCase = function() {
    confirmNumberChar = confirm("Click OK to add number characters");
    if (confirmNumberChar === true) {
        confirmNumberChar = true;
    }
    return confirmNumberChar;
};

//add function for symbol characters
let symbolCase = function() {
    confirmSymbolChar = confirm("Click OK to add symbol characters");
    if (confirmSymbolChar === true) {
        confirmSymbolChar = true;
    }
    return confirmSymbolChar;
};

// add function if answer is outside the parameters

let parameters = function() {
    while(confirmUpperChar === false && confirmLowerChar === false && confirmNumberChar === false && confirmSymbolChar === false) {
        alert("You must at least one parameter");
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

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

