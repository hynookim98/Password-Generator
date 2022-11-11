// Query Selectors
var generateBtn = document.querySelector('#generate');
var password = document.querySelector("#password");

// initializing variables with every possible character for the password generator
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialCharacter = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// initializing same variables as arrays instead of strings
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialArray = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.',];

generateBtn.addEventListener("click", writePassword);

function writePassword() {

  // prevent default for button 
  // must press button to start program
  event.preventDefault();

  //resets string inside password to be empty after each use
  password.value = "";
  var passwordString = "";
  var passOptions = "";

  // ask user for password size
  var size = prompt("How many characters long do you want your password to be?");
  if(size < 8) {
    alert("Password must be at least 8 characters!");
    return;
  } else if (size > 128) {
    alert("Password must under 128 characters!");
    return;
  } 
  
  if (isNaN(size)) {
    alert("Input must be a number! (0-9)");
    return;
  }
  
  // gathering options for password from user
  var hasLower = confirm("Do you want your password to have lowercase? \nPress cancel for No");
  var hasUpper = confirm("Do you want your password to have uppercase? \nPress cancel for No");
  var hasNumber = confirm("Do you want your password to have numbers? \nPress cancel for No");
  var hasSpecial = confirm("Do you want your password to have special characters? \nPress cancel for No");

  // conditional statement that gives user an error message if they selected no for all the options
  if (hasLower === false && hasUpper === false && hasNumber === false && hasSpecial === false) {
    alert("Password must have at least one criteria!");
    alert("Please refresh page to try again!");
    return;
  }

  // if user selected yes(true) for lower case option - combine string together with option string
  if(hasLower) {
    passOptions += lowerCase;
    // makes sure password contains at least one lower case letter
    passwordString += lowerArray[Math.floor(Math.random() * lowerArray.length)];
  }

  // if user selected yes(true) for upper case option - combine string together with option string
  if(hasUpper) {
    passOptions += upperCase;
    // makes sure password contains at least one upper case letter
    passwordString += upperArray[Math.floor(Math.random() * upperArray.length)];
  }

  // if user selected yes(true) for number option - combine string together with option string
  if(hasNumber) {
    passOptions += numeric;
    // makes
  }

  // if user selected yes(true) for special character option - combine string together with option string
  if(hasSpecial) {
    passOptions += specialCharacter;
  }
  // variable passOptions now contains variable for every possible character the user can get for their password

  for (var i=0; i < size; i++) {
    passwordString += passOptions.charAt(Math.floor(Math.random() * passOptions.length));
  }
password.value = passwordString

  return;
}

writePassword();