function calculateSum(num1, num2) {
  return num1 + num2;
}

// function call
const firstNumber = 5;
const secondNumber = 3;
const result = calculateSum(firstNumber, secondNumber);
console.log(`The sum of ${firstNumber} and ${secondNumber} is: ${result}`);

// aasignment two

function showName() {
  const name = document.getElementById("nameInput").value;
  alert(`Hello, ${name}!`);
}

//practice two
function validateAge() {
  // Convert the user input to a number
  let age = document.getElementById("ageInput").value;
  age = parseInt(age, 10);

  // Check if age is a number and within the valid range
  if (age === 10) {
    alert("Correct age");
  } else {
    alert("error");
  }

  // Age is valid
  return true;
}

// Example usage:
// const userInput = prompt("Enter your age:");
// validateAge(userInput);
