// Select the password input field and strength paragraph
const passwordInput = document.getElementById('password');
const strengthDisplay = document.getElementById('strength');

// Add an event listener to monitor input
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = checkPasswordStrength(password);
    strengthDisplay.textContent = `Password strength: ${strength}`;
});

// Function to check password strength
function checkPasswordStrength(password) {
    let strength = "Weak";

    // Check password length
    if (password.length > 7) {
        strength = "Medium";
    }

    // Check if password contains both letters and numbers
    if (/[a-z]/i.test(password) && /\d/.test(password)) {
        strength = "Strong";
    }

    // Check if password contains special characters
    if (/[@$!%*?&#]/.test(password)) {
        strength = "Very Strong";
    }

    return strength;
}