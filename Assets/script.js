// Assignment Code
var generateBtn = document.querySelector("#generate");
// adding global varibles

var uppercaseString = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
var uppercaseArray = uppercaseString.split("");
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var lowercaseArray = lowercaseString.split("");
var numberString = "1234567890";
var numberArray = numberString.split("");
var specialCharactersString = "`~!@#$%^&*()-_=+{}[]|';./?";
var specialCharactersArray = specialCharactersString.split("");
var generatedPass = [];
var eligiblevalues = [];

function generatePassword() {
  // length constraint
  var passwordLength = prompt(
    "How many characters do you want the password to be?"
  );

  while (!(passwordLength > 8 && passwordLength < 128)) {
    alert("password must be between 8 and 128 characters.");
    return generatePassword();
  }
  var includeUppercase = confirm(
    "Do you want to require Upper Case characters in the password?"
  );
  var includeLowercase = confirm(
    "Do you want to require Lower Case characters in the password?"
  );
  var includeSpecial = confirm(
    "Do you want to require Special characters in the password?"
  );
  var includeNumbers = confirm(
    "Do you want to require Numbers in the password?"
  );

  if (includeUppercase) {
    eligiblevalues.push(...uppercaseArray);
  }

  if (includeLowercase) {
    eligiblevalues.push(...lowercaseArray);
  }

  if (includeNumbers) {
    eligiblevalues.push(...numberArray);
  }

  if (includeSpecial) {
    eligiblevalues.push(...specialCharactersArray);
  }

  for (var i = 0; i < passwordLength; i++) {
    generatedPass.push(
      eligiblevalues[Math.floor(Math.random() * eligiblevalues.length)]
    );
  }
  return generatedPass.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
