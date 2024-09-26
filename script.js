// Password strength checker logic
const passwordInput = document.getElementById('password');
const strengthDisplay = document.getElementById('strength');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let strength = checkPasswordStrength(password);
  strengthDisplay.textContent = `Password strength: ${strength}`;
});

function checkPasswordStrength(password) {
  let strength = "Weak";
  if (password.length > 7) {
    strength = "Medium";
  }
  if (/[a-z]/i.test(password) && /\d/.test(password)) {
    strength = "Strong";
  }
  if (/[@$!%*?&#]/.test(password)) {
    strength = "Very Strong";
  }
  return strength;
}

// Visit counter logic
const visitCounterDisplay = document.getElementById('visit-counter');

// Get the number of visits from localStorage, or start at 0
let visitCount = localStorage.getItem('visitCount');
if (visitCount === null) {
  visitCount = 0;
} else {
  visitCount = parseInt(visitCount);
}

// Increment the visit count
visitCount += 1;

// Store the updated count back in localStorage
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the page
visitCounterDisplay.textContent = `This page has been visited ${visitCount} times.`;
