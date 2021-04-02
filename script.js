// Assignment code here

var includeCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var includeLowerCase = "abcdefghijklmnopqrstuvwxyz"
var includeNumbers = "0123456789"
var includeSymbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"


// Get references to the #generate element
var generateBtn = document.querySelector("#generate")
addEventListener('click', event => {

  userLength = prompt("Please choose a password length between 8 and 128 characters.");
  console.log(userLength);


  // to evaluate whether the number chosen is between the parameters
  var userLength = parseInt(userLength);

  if (userLength > 7 && userLength < 129) {

    var includeCapitals = confirm("Would you like to include capital letters?");
    var includeLowerCase = confirm("Would you like to include lower case letters?");
    var includeNumbers = confirm("Would you like to include numbers?");
    var includeSymbols = confirm("Would you like to include symbols?");

    console.log(includeCapitals);
    console.log(includeLowerCase);
    console.log(includeNumbers);
    console.log(includeSymbols);

    writePassword(includeCapitals, includeLowerCase, includeNumbers, includeSymbols);
  }
  else {
    window.alert("You did not choose a valid number. Please try again.")
  }

})

// Write password to the #password input
writePassword = function () {

  var passwordText = document.querySelector("#password");

  var charSet = ""

  if (includeCapitals === true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else if (includeLowerCase === true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz"
  }
  else if (includeNumbers === true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789"
  }
  else if (includeSymbols === true) {
    charSet = charSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "0123456789" + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  }
}
randPassword = function () {


  document.getElementById('textContent').innerHTML = "randPassword";

  for (var i = 0; i < userLength; i++) {
    //picks a character within charSet at index of random number
    randPassword += charSet.charAt(Math.floor(Math.random() * charSet.userLength));



    console.log(randPassword);
    return randPassword;
  }
}
