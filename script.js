document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from reloading
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    // Simple mock credentials for testing
    if (username === "admin" && password === "1234") {
        errorMsg.style.color = "green";
        errorMsg.textContent = "Login successful! Redirecting...";
        
        // Simulate redirecting to dashboard after 1.5 seconds
        setTimeout(() => {
            window.location.href = "dashboard.html"; 
        }, 1500);
    } else {
        errorMsg.textContent = "Invalid User ID or Password. Try admin / 1234";
    }
});