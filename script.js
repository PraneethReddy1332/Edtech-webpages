document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting immediately

        if (username.value.trim() === "" || password.value.trim() === "") {
            errorMessage.textContent = "Username and password cannot be empty!";
        } else {
            errorMessage.textContent = ""; 
            alert("Login successful!");
            loginForm.submit();
        }
    });
});








document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const username = document.getElementById('username').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    // Clear previous error messages
    document.getElementById('error-message').textContent = '';

    // Validate inputs
    if (!username) {
        showError('Username is required.');
        return;
    }

    if (!phone) {
        showError('Phone number is required.');
        return;
    } else if (!/^\d{10}$/.test(phone)) {
        showError('Phone number must be 10 digits.');
        return;
    }

    if (!email) {
        showError('Email is required.');
        return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('Invalid email address.');
        return;
    }

    if (!password) {
        showError('Password is required.');
        return;
    } else if (password.length < 8) {
        showError('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match.');
        return;
    }

    // If all validations pass, you can proceed with form submission
    // For example, send data to a server using fetch or XMLHttpRequest
    alert('Signup successful!');
    // You can redirect the user or perform other actions here
});

function showError(message) {
    document.getElementById('error-message').textContent = message;
}