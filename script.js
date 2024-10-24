let enteredPassword = "";
const correctPassword = "7819"; // Set your password here
const passwordLength = correctPassword.length;

function enterDigit(digit) {
  if (enteredPassword.length < passwordLength) {
    enteredPassword += digit;
    updateDisplay();

    // Check if the password is complete
    if (enteredPassword.length === passwordLength) {
      validatePassword();
    }
  }
}

function updateDisplay() {
  const display = document.getElementById("passwordDisplay");
  display.textContent = enteredPassword.padEnd(passwordLength, "-");
}

function validatePassword() {
  if (enteredPassword === correctPassword) {
    window.location.href = "mobile.html"; // Redirect if password is correct
  } else {
    document.getElementById("error-message").style.display = "block"; // Show error if incorrect
    enteredPassword = ""; // Reset password input
    updateDisplay();
  }
}
