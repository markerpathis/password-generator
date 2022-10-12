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

  //variable that will be returned at the end of the funtion that includes the characters for the password
  let savedPassword = "";

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
    //although two slashes are included, only one is shown when the password is created.
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
  // converts type of value to number. Otherwise it will be a string.
  criteriaLength = Number(criteriaLength);
  let isValidCriteria = criteriaLengthValidate(criteriaLength);
  console.log("Type of ctieriaLength: " + typeof criteriaLength);
  if (isValidCriteria) {
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

    // let savedPassword = "";
    for (var i = 0; i < criteriaLength; i++) {
      let mergePassword =
        charListSelected[Math.floor(Math.random() * charListSelected.length)];
      savedPassword = savedPassword.concat(mergePassword);
      console.log("saved password: " + savedPassword);
      //need to validate if the password contains all the required criteria. Use .contains, if not true, set i to 0 and clear out the mergePassword field
    }
  }
  return savedPassword;
}
