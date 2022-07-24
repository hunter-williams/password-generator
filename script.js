// Assignment code here 
// lowercase, uppercase, numeric, and/or special characters
// length of at least 8 characters and no more than 128 characters
// displayed in an alert or written to the page

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialCharecters = ["`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","\\","[","]","{","}",";","'",":","|",".","<",">","/","?","~"]
var length =  128
//  hold user response
var criteria = [lowerCase, upperCase, numeric, specialCharecters]

console.log(criteria)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  // holds password to return
  var password = "";
  // hold random index
  var criteriaIndex = ""
  var charecterIndex  = ""
  // generate random indexs while password length is less than user response
  for (i =  0; i < length;  i++){
    // generate new random index
    criteriaIndex = Math.floor(Math.random() * criteria.length);
    charecterIndex  = Math.floor(Math.random() * criteria[criteriaIndex].length);
    // add to password
    console.log(criteria[criteriaIndex][charecterIndex])
    password+=(criteria[criteriaIndex][charecterIndex])
  }
  return  password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
