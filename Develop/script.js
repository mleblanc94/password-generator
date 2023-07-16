function generatePassword() {
  var passLength = prompt("Please enter the length of the password (between 8 and 128 characters):")
  if (passLength < 8 || passLength > 128) {
    alert("Your password is not the correct length, please try again");
    generatePassword();
  } else {
    let lowercaseChar = confirm("Would you like to include lowercase letters in your password");
    let uppercaseChar = confirm("Would you like to include uppercase letters in your password");
    let LettersChar = confirm("Would you like to include number characters in your password");
    let specialChar = confirm("Would you like to include special characters in your password");
  }
    for (let i = 0; i < passLength.length; i++) {
      
    }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
