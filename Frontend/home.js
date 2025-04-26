// home.js

// Función para mostrar el nombre del usuario
function mostrarNombreUsuario() {
    const usuario = localStorage.getItem('usuarioLogueado');
    if (usuario) {
        document.getElementById('bienvenida').innerText = `¡Bienvenido, ${usuario}! 🏡`;
    } else {
        // Si no hay usuario logueado, redirige al login
        window.location.href = 'login.html';
    }
}

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    window.location.href = 'login.html';
}

// Ejecutar cuando la página cargue
window.onload = function () {
    mostrarNombreUsuario();
};
