///////////////////////// DO NOT CHANGE ////////////////////////////////////
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
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  let criteriaLengthValidate = function (criteriaLength) {
    if (criteriaLength > 7 && criteriaLength < 129) {
      criteriaLengthValidate = true;
      console.log("criteriaLength: " + criteriaLength);
      console.log("criteriaLengthValidate: " + criteriaLengthValidate);
    } else {
      criteriaLengthValidate = false;
      console.log("criteriaLength: " + criteriaLength);
      console.log("criteriaLengthValidate: " + criteriaLengthValidate);
    }
  };

  let criteriaSelectedValidate = function (
    criteriaLowerCase,
    criteriaUpperCase,
    criteriaNumeric,
    criteriaSpecial
  ) {
    if (
      criteriaLowerCase ||
      criteriaUpperCase ||
      criteriaNumeric ||
      criteriaSpecial
    ) {
      criteriaSelectedValidate = true;
      console.log("criteriaSelectedValidate): " + criteriaSelectedValidate);
    } else {
      criteriaSelectedValidate = false;
      console.log("criteriaSelectedValidate): " + criteriaSelectedValidate);
    }
  };

  let criteriaLength = prompt(
    "Please enter the number of characters for your password." +
      "\n" +
      "Minimum required is 8. Maximum allowed is 128"
  );
  // let criteriaLengthValidate = true;
  criteriaLengthValidate(criteriaLength);
  if (criteriaLengthValidate) {
    let criteriaLowerCase = window.confirm(
      "Would you like for you password to include lower case characters?"
    );
    console.log("criteriaLowerCase: " + criteriaLowerCase);
    let criteriaUpperCase = window.confirm(
      "Would you like for you password to include upper case characters?"
    );
    console.log("criteriaUpperCase: " + criteriaUpperCase);
    let criteriaNumeric = window.confirm(
      "Would you like for you password to include numeric characters?"
    );
    console.log("criteriaNumeric: " + criteriaNumeric);
    let criteriaSpecial = window.confirm(
      "Would you like for you password to include special characters?"
    );
    console.log("criteriaSpecial: " + criteriaSpecial);
    criteriaSelectedValidate(
      criteriaLowerCase,
      criteriaUpperCase,
      criteriaNumeric,
      criteriaSpecial
    );
  }


}

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
