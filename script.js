// Assignment code here
userLength = function () {

  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate")
  addEventListener('click', event => {

    userLength = Number(prompt("Please choose a password length between 8 and 128 characters."));
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
    }
    else {
      window.alert("You did not choose a valid character type. Please try again.")
    }

  })

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password", userLength);
    var charSet = ""
    passwordText.value = password
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


    function randPassword() {
      var randPassword = "";
      for (var i = 0; i < userLength; i++) {
        //picks a character within charSet at index of random number
        randPassword += charSet.charAt(Math.floor(Math.random() * charSet.userLength));
      }
    
      console.log(randPassword);
      return randPassword;
    }
  }
}  

userLength();
