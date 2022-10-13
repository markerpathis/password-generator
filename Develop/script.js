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

  // Emptry array which will be populated using the charListMerge function after the criteria for the password is selected
  let charListSelected = [];

  // Function determines if the
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
  // converts type of value to number. Otherwise it will be a string.
  criteriaLength = Number(criteriaLength);
  let isValidLength = criteriaLengthValidate(criteriaLength);
  console.log("Type of ctieriaLength: " + typeof criteriaLength);
  if (isValidLength) {
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

    let isValidCriteria = criteriaSelectedValidate(
      criteriaLowerCase,
      criteriaUpperCase,
      criteriaNumeric,
      criteriaSpecial
    );

    if (isValidCriteria) {
      charListMerge(
        criteriaLowerCase,
        criteriaUpperCase,
        criteriaNumeric,
        criteriaSpecial
      );

      for (var i = 0; i < criteriaLength; i++) {
        let mergePassword =
          charListSelected[Math.floor(Math.random() * charListSelected.length)];
        savedPassword = savedPassword.concat(mergePassword);
        console.log("saved password: " + savedPassword);
        //need to validate if the password contains all the required criteria. Use .contains, if not true, set i to 0 and clear out the mergePassword field
      }
    } else {
      return;
    }
  }
  console.log("savedPassword: " + savedPassword);
  return savedPassword;
}
