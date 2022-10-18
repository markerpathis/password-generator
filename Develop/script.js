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

  // savedPassword will be returned at the end of the generatePassword funtion
  let savedPassword = "";

  // Array of lower case letters that can be used if selected as a password criteria
  const charListLowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Array of upper case letters that can be used if selected as a password criteria
  const charListUpperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // Array of numeric characters that can be used if selected as a password criteria
  const charListNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Array of special characters that can be used if selected as a password criteria
  const charListSpecial = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    // Although two slashes are included, only one is shown when the password is created. Without the second slash it will cause an error.
    "\\",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];

  // Emptry array  will be populated using the charListMerge function after the criteria for the password is selected
  let charListSelected = [];

  // Function will determine if the password length from the user is between 8 - 128 characters
  let criteriaLengthValidate = function (criteriaLength) {
    if (criteriaLength > 7 && criteriaLength < 129) {
      return true;
    } else {
      return false;
    }
  };

  // Function will validate that at least one character criteria is selected by the user
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
      return true;
    } else {
      return false;
    }
  };

  // Function will concatenate the characters from the selected character type arrays into a new array
  let charListMerge = function (
    criteriaLowerCase,
    criteriaUpperCase,
    criteriaNumeric,
    criteriaSpecial
  ) {
    if (criteriaLowerCase) {
      charListSelected = charListSelected.concat(charListLowerCase);
    }
    if (criteriaUpperCase) {
      charListSelected = charListSelected.concat(charListUpperCase);
    }
    if (criteriaNumeric) {
      charListSelected = charListSelected.concat(charListNumeric);
    }
    if (criteriaSpecial) {
      charListSelected = charListSelected.concat(charListSpecial);
    }
  };

  // Prompt user to enter the number of characters for their password
  let criteriaLength = prompt(
    "Please enter the number of characters for your password." +
      "\n" +
      "Minimum required is 8. Maximum allowed is 128"
  );

  // Converts type of value to number. Otherwise it will be a string, which can't be used in the For loop later on
  criteriaLength = Number(criteriaLength);

  // Calls function to validate if the user entered a valid length
  let isValidLength = criteriaLengthValidate(criteriaLength);

  // Checks if the criteriaLengthValidate function returned true
  if (isValidLength) {
    // User is asked to select the criteria for the characters to be used in their password
    let criteriaLowerCase = window.confirm(
      "Would you like for your password to include lower case characters?"
    );
    let criteriaUpperCase = window.confirm(
      "Would you like for your password to include upper case characters?"
    );
    let criteriaNumeric = window.confirm(
      "Would you like for your password to include numeric characters?"
    );
    let criteriaSpecial = window.confirm(
      "Would you like for your password to include special characters?"
    );

    // Calls funtion to validate that at least one character criteria is selected by the user, otherwise this process will end
    let isValidCriteria = criteriaSelectedValidate(
      criteriaLowerCase,
      criteriaUpperCase,
      criteriaNumeric,
      criteriaSpecial
    );

    // If user selected at least one character criteria, the arrays for the selected caracter types will be concatenated into a new array
    if (isValidCriteria) {
      charListMerge(
        criteriaLowerCase,
        criteriaUpperCase,
        criteriaNumeric,
        criteriaSpecial
      );

      // Loop randomly selects a character from the newly created array and concatenates it with each iteration
      for (var i = 0; i < criteriaLength; i++) {
        let mergePassword =
          charListSelected[Math.floor(Math.random() * charListSelected.length)];
        savedPassword = savedPassword.concat(mergePassword);
      }
    } else {
      return;
    }
  }
  // Returning the saved password will show the password in the text area of the web application
  return savedPassword;
}
