document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    message.textContent = '';

    if (!username || !password) {
        message.textContent = 'Por favor, complete todos los campos.';
        message.style.color = 'red';
        return;
    }

    if (username === 'bedroom' && password === '09090909') {
        message.textContent = '¡Bienvenido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }
});

