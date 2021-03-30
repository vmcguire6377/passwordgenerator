// Assignment code here
userLength = function () {



  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate")
  addEventListener('click', event => {

    userLength = prompt("Please choose a password length between 8 and 128 characters.")


    // to evaluate whether the number chosen is between the parameters

    if (userLength > 7 && userLength < 129) {
      var charTypes = prompt("Would you like to include capital letters, lower case letter, numbers, or symbols?")

    }


    else {
      window.alert("Please make a valid entry. Please choose a password length between 8 and 128 characters.")
    }
  }
  )
}


userLength();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password")
  if (charTypes.capitals === true) {
    var pwdChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  } else if (charTypes.lowerCase === true) {
    var pwdChars = "abcdefghijklmnopqrstuvwxyz"
  } else if (charTypes.numbers === ok) {
    var pwdChars = "0123456789"
  } else if (charTypes.symbols === ok) {
    var pwdChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
}


var userLength = 10;
var randPassword = Array(userLength).fill(pwdChars).map(function (x) { return x[Math.floor(Math.random() * x.length)] }).join('');

passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










