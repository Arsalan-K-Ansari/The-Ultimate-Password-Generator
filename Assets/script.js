// Assignment Code
var generateBtn = document.querySelector("#generate");

function genertePassword() {
  var passwordLength = prompt(
    "How many characters do you want the password to be?"
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
