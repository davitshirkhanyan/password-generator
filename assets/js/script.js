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
    

}


    


// Write password to the #password input
 function writePassword() {
 let password = generatePassword();
 let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

