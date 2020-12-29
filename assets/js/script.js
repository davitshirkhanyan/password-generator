// add a function to generate numbers from low to high


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