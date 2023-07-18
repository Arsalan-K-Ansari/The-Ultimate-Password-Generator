// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt(
    "How many characters do you want the password to be?"
  );

  while (!(passwordLength > 8 && passwordLength < 128)) {
    alert("password must be between 8 and 128 characters.");
    return generatePassword();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
