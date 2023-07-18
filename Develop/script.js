function generatePassword() {
  //Ask the user how long they would like their password to be
  var passLength = prompt("Please enter the length of the password (between 8 and 128 characters):");
  //If the password length requested is under 8 characters or more than 128, ask them to try again
  if (passLength < 8 || passLength > 128) {
    alert("Your password is not the correct length, please try again");
    generatePassword();
  } else {
    //Ask the user to confirm whether or not they would like lowercase, uppercase, numeric, and special characters included
    let lowercaseChar = confirm("Would you like to include lowercase letters in your password");
    let uppercaseChar = confirm("Would you like to include uppercase letters in your password");
    let lettersChar = confirm("Would you like to include number characters in your password");
    let specialChar = confirm("Would you like to include special characters in your password");
    
    function checkCharValues() {
      
    }

    //Start an empty array to push the different characters into depending on what they did and did not want
    let passwordArray = [];
    //If the user rejected all character types, have them try again
    if (!lowercaseChar && !uppercaseChar && !lettersChar && !specialChar){
      alert("You need some characters for your password!")
      generatePassword();
    } else {
    //If the user confirmed they wanted the specific characters, add them to the password array as possibilities as characters in the password
    if (lowercaseChar) {
      passwordArray.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
    }
    if (uppercaseChar) {
      passwordArray.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
    }
    if (lettersChar) {
      passwordArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    }
    if (specialChar) {
      passwordArray.push("!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}","<",">",",",".","?","/",":",";","|","~");
    }
  }

    //An empty string to start what will be the returned password
    let realPassword = "";
  
    //Loop that selects random characters from the passwordArray array as many times as the user has specified characters they would like included.
      for (let i = 0; i < passLength; i++) {
        let index = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        realPassword += index;
      }
      //Once loop is complete, variable realPassword contains password to be returned
      return realPassword;
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
