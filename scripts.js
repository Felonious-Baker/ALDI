function navigate(url) {
    window.location.href = url;
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        errorMessage.textContent = '';
        window.location.href = "home.html"; // Redirect to home.html
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});

