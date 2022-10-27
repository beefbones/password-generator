//Assignment Code
const generateBtn = document.querySelector("#generate");

// Create arrays for lowercase and uppercase letters, numerical numbers, and special characters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "=", "_"];


// Create a function to ask for the length of the password
function generatePassword() {
  const userInput = prompt("How long would you like your password to be? (Enter a number)");
  const passwordLength = parseInt(userInput);
// Create an if statement if they enter something that is NaN (Not a number)
  if (isNaN(passwordLength)) {
    alert("That is not a number!")
    return
  } 
// Create an if statement that says password length must be between 8 and 128 characters
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    return
  }
// Make boolean statements for options
  const addLowercase = window.confirm("Would you like lowercase letters?");
  const addUppercase = window.confirm("Would you like uppercase letters?");
  const addSpecialChars = window.confirm("Would you like special characters?");
  const addNumbers = window.confirm("Would you like numbers?");
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
