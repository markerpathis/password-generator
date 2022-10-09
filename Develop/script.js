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
  const charListNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

  let charListSelected = [];

  let criteriaLengthValidate = function (criteriaLength) {
    if (criteriaLength > 7 && criteriaLength < 129) {
      console.log("criteriaLengthValidate: " + true);
      return true;
    } else {
      console.log("criteriaLengthValidate: " + false);
      return false;
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
      console.log("criteriaSelectedValidate: " + true);
      return true;
    } else {
      console.log("criteriaSelectedValidate: " + false);
      return false;
    }
  };

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

  let criteriaLength = prompt(
    "Please enter the number of characters for your password." +
      "\n" +
      "Minimum required is 8. Maximum allowed is 128"
  );
  criteriaLengthValidate(criteriaLength);
  if (criteriaLengthValidate) {
    let criteriaLowerCase = window.confirm(
      "Would you like for your password to include lower case characters?"
    );
    console.log("criteriaLowerCase: " + criteriaLowerCase);
    let criteriaUpperCase = window.confirm(
      "Would you like for your password to include upper case characters?"
    );
    console.log("criteriaUpperCase: " + criteriaUpperCase);
    let criteriaNumeric = window.confirm(
      "Would you like for your password to include numeric characters?"
    );
    console.log("criteriaNumeric: " + criteriaNumeric);
    let criteriaSpecial = window.confirm(
      "Would you like for your password to include special characters?"
    );
    console.log("criteriaSpecial: " + criteriaSpecial);
    criteriaSelectedValidate(
      criteriaLowerCase,
      criteriaUpperCase,
      criteriaNumeric,
      criteriaSpecial
    );
    charListMerge(
      criteriaLowerCase,
      criteriaUpperCase,
      criteriaNumeric,
      criteriaSpecial
    );
    console.log(charListSelected);
  }
}

// console.log(elements.join(''));

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
