// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 0.5. create buckets for each character type
function generatePassword() {
  // you code goes here
  // 1. get user preferences
  // 2. identify and collect the buckets the user has chosen
  // 3. Create a guaranteed collection 
  // 4. randomly draw characters
  // 5. create a password variable or an array
  // 6. use maybe push to take random characters ontp
  // the password array
  // 7. use for loop to repeat as many times as specified
  // 8. loop through the guaranteed elements, replace
  // elements in password array
  // 9. joing characters in the password array into a string
  // 10. return password 
}
