// perfil.js

window.onload = () => {
    const usuario = localStorage.getItem('usuarioLogueado');

    if (!usuario) {
        alert("Debe iniciar sesión.");
        window.location.href = 'login.html';
    } else {
        document.getElementById("nombreUsuario").innerText = usuario;
    }
};

function cerrarSesion() {
    localStorage.removeItem('usuarioLogueado');
    alert("Sesión cerrada.");
    window.location.href = 'login.html';
}
