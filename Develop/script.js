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

    let passwordArray = [];
    let lowerCaseCharacterSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCaseCharacterSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let numericCharacterSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let specialCharacterSet = ["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","<",">",",",".","?","/",":",";","|","~"];

    if (lowercaseChar) {
      passwordArray.concat(lowerCaseCharacterSet);
    }
  
    if (uppercaseChar) {
      passwordArray.concat(upperCaseCharacterSet);
    }
    if (uppercaseChar) {
      passwordArray.concat(upperCaseCharacterSet);
    }
    if (uppercaseChar) {
      passwordArray.concat(upperCaseCharacterSet);
    }
  
  
      for (let i = 0; i < passLength; i++) {
  
      }
  
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
