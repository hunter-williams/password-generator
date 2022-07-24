// Assignment code here 
// lowercase, uppercase, numeric, and/or special characters
// length of at least 8 characters and no more than 128 characters
// displayed in an alert or written to the page

const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const specialCharecters = ["`","!","@","#","$","%","^","&","*","(",")","_","+","-","=","\\","[","]","{","}",";","'",":","|",".","<",">","/","?","~"]
var criteriaOptions = [lowerCase, upperCase, numeric, specialCharecters]

//  hold user response
var userresponseLength = 0
var criteria = []

function promptuser(){
  if (confirm("Do you want lowercase?")){
    criteria.push(lowerCase)
  }
  if (confirm("Do you want uppercase?")){
    criteria.push(upperCase)
  }
  if (confirm("Do you want numbers?")){
    criteria.push(numeric)
  }
  if (confirm("Do you want special characters?")){
    criteria.push(specialCharecters)
  }
  if (criteria.length < 1){
    var criteriaOptionsindex = Math.floor(Math.random() * criteriaOptions.length);
    criteria.push(criteriaOptions[criteriaOptionsindex])
  }
  console.log("criteria :", criteria)
  
  // prompt user to choose length, if they answer invalid make them choose again. if they choose wrong will force closes number.
  var firstResponse = prompt("Choose length of password between 8 and 128 characters")
  if (firstResponse < 128 && firstResponse > 8){
    userresponseLength = firstResponse;
  } else if (firstResponse > 128 || firstResponse < 8){
    var secondResponse = prompt("Invalid length, choose between 8 and 128");
    console.log("secondResponse", secondResponse)
      // check second answer
      if (secondResponse < 128 && secondResponse > 8){
        userresponseLength = secondResponse;
      } else if (secondResponse > 128){
        userresponseLength = 128;
      } else if (secondResponse < 8){
        userresponseLength = 8;
      }
  } 
  
  console.log(userresponseLength)
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword (){
  promptuser()
  // holds password to return
  var password = "";
  // hold random index
  var criteriaIndex = ""
  var charecterIndex  = ""
  // generate random indexs while password length is less than user response
  for (i =  0; i < userresponseLength;  i++){
    // generate new random index
    criteriaIndex = Math.floor(Math.random() * criteria.length);
    charecterIndex  = Math.floor(Math.random() * criteria[criteriaIndex].length);
    // add to password
    // console.log(criteria[criteriaIndex][charecterIndex])
    password+=(criteria[criteriaIndex][charecterIndex])
  }
  console.log("password :", password)
  console.log("password length :", password.length)

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
