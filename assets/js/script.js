// add a function to generate numbers from low to high
let arrayFromLowToHigh = function(low, high) {
    let passwordChars = [];
    for(let i = low; i <= high; i++) {
        passwordChars.push(i);
    }
    return passwordChars;
}

let upperCaseCharCodes = arrayFromLowToHigh(65, 90);
let lowerCaseCharCodes = arrayFromLowToHigh(97, 122);
let numberCharCodes = arrayFromLowToHigh(48, 57);
let symbolCharCodes = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
);

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
    
}






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let generateButton=document.getElementById("generate");
let passwordEntry=document.getElementById("password");
generateButton.onclick = generatePassword;