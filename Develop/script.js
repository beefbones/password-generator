//Assignment Code
const generateBtn = document.querySelector("#generate");

// Make arrays for lowercase and uppercase letters, numerical numbers, and special characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "+", "-", "=", "_"];
var options = [];
var password = [];

function randomInt(min,max) {
  if (!max) {
    max = min
    min = 0
  }
  let rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
};

function getRandomItem(list) {
  return list[randomInt(list.length)]
};

// Make a function to ask for the length of the password
function generatePassword() {
  var userInput = prompt("How long would you like your password to be? (Enter a number)");
  var passwordLength = parseInt(userInput);

  if (userInput === null) {
    return
  }

  // Make an if statement if they enter something that is NaN (Not a number)
  if (isNaN(passwordLength)) {
    alert("That is not a number!")
    return
  }

  // Make an if statement that says password length must be between 8 and 128 characters
  if(passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.")
    return
  }

  // Make boolean statements for options
  var addLowercase = confirm("Would you like lowercase letters?");
  var addUppercase = confirm("Would you like uppercase letters?");
  var addNumbers = confirm("Would you like numbers?");
  var addCharacters = confirm("Would you like special characters?");
  

  
  // Make if statements for all options
  if (addLowercase) {
    options.push(lowercase)
  };

  if (addUppercase) {
    options.push(uppercase)
  };

  if (addNumbers) {
    options.push(numbers)
  };

  if (addCharacters) {
    options.push(characters)
  };

  if (options.length === 0) {
    options.push(lowercase);
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(options)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
  // Make an array that shows what options were chosen

  // Write a for loop that chooses random characters that iterates over chosen arrays

  // Write an if statement if none of the options are chosen

  // Push the generated password to the display
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
