// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthQuestion;
var lowerQuestion;
var upperQuestion;
var numberQuestion;
var symbolsQuestion;

var choices;

generateBtn.addEventListener("click", function() {
  createPassword();
});

function createPassword() {
  lengthQuestion = parseInt(prompt("Password length? Please choose betwen 8 to 128 chracters."));
  if (!lengthQuestion) {
    alert('You must enter a value!');
  } else if (lengthQuestion < 8 || lengthQuestion > 128) {
    lengthQuestion = parseInt(prompt('Please enter a value between 8 and 128 characters!'));
  } else {
    lowerQuestion = confirm("Do you want lowercase letters?");
    upperQuestion = confirm("Do you want uppercase letters?");
    numberQuestion = confirm("Do you want numbers?");
    symbolsQuestion = confirm("Do you want symbols?");

  }
  //generator functions

  function randomLowerCase() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 97));
  };

  function randomUpperCase() {
    return String.fromCharCode((Math.floor(Math.random() * 26) + 65));
  };

  function randomNumber() {
    return String.fromCharCode((Math.floor(Math.random() * 15) + 48));
  };

  function getSymbol() {
    const symbol = "!@#$%^&*(){}[]=<>/,.";
    return symbol[Math.floor(Math.random() * symbol.length)]
  };

  //generate password function

  if (!lowerQuestion && !upperQuestion && !numberQuestion && !symbolsQuestion) {
    alert("You must enter at least one search criteria!");
  }
  // yes to all of criteria
  else if (lowerQuestion && upperQuestion && numberQuestion && symbolsQuestion) {
    choices = randomLowerCase().concat(randomUpperCase(), randomNumber(), getSymbol());
  }
  // yes to 3 of the criteria
  else if (lowerQuestion && upperQuestion && numberQuestion) {
    choices = randomLowerCase().concat(randomUpperCase(), randomNumber());
  }
  else if (lowerQuestion && upperQuestion && symbolsQuestion) {
    choices = randomLowerCase().concat(randomUpperCase(), getSymbol());
  }
  else if (lowerQuestion && numberQuestion && symbolsQuestion) {
    choices = randomLowerCase().concat(randomNumber(), getSymbol());
  }
  else if (upperQuestion && numberQuestion && symbolsQuestion) {
    choices = randomUpperCase().concat(randomNumber(), getSymbol());
  }
  // yes to 2 of the criteria
  else if (lowerQuestion && upperQuestion) {
    choices = randomLowerCase().concat(randomUpperCase());
  }
  else if (lowerQuestion && numberQuestion) {
    choices = randomLowerCase().concat(randomNumber());
  }
  else if (lowerQuestion && symbolsQuestion) {
    choices = randomLowerCase().concat(getSymbol());
  }
  else if (upperQuestion && numberQuestion) {
    choices = randomUpperCase().concat(randomNumber());
  }
  else if (upperQuestion && symbolsQuestion) {
    choices = randomUpperCase().concat(getSymbol());
  }
  else if (numberQuestion && symbolsQuestion) {
    choices = randomNumber().concat(getSymbol());
  }

  // yes to 1 of the criteria
  else if (lowerQuestion) {
    choices = randomLowerCase();
  }
  else if (upperQuestion) {
    choices = randomUpperCase();
  }
  else if (numberQuestion) {
    choices = randomNumber();
  }
  else if (symbolsQuestion) {
    choices = getSymbol();
  }



var passwordArr = [];

for (i = 0; i < lengthQuestion; i++) {
  var getChoices = choices[Math.floor(Math.random() * choices.length)];
  passwordArr.push(getChoices);
}
 

var passwordText = passwordArr.join();
// writePassword(passwordText);
console.log(passwordText);

};

// function writePassword(passwordText){
//   passwordText = document.querySelector("#password").textContent
// }




// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password").textContent

//   passwordText.value = password;

// }