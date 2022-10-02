const dateOfBirthInput = document.querySelector('#date-of-birth');
const luckyNumberInput = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

checkNumberButton.addEventListener('click', checkBirthDateIsLucky);

function checkBirthDateIsLucky() {
  const dob = dateOfBirthInput.value;
  const luckyNumber = luckyNumberInput.value;
  if(dob && luckyNumber) {
  const sum = calculateDobSum(dob);
   compareValues(sum, luckyNumber);
  } 
  else if (luckyNumber < 0) {
       outputBox.innerText = 'Lucky number cannot be negative 🤓'
  }
  else {
    outputBox.innerText = 'Please enter both the fields 😡'
  }
}

function compareValues(dobSum, luckyNumber) {
  if(dobSum % luckyNumber) {
    outputBox.innerText = 'Your birthday is lucky 🚀';
  } else {
    outputBox.innerText = 'Your birthday is not lucky ☹️';
  }
}

function calculateDobSum(dob) {
  dob = dob.replaceAll('-', '');
  var sum = 0;
  for(var i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }
  return sum;
}