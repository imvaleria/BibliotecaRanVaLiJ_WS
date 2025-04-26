const apiUrl = "https://localhost:5001/api/Usuarios"; // Ajusta tu puerto si es diferente

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const clave = document.getElementById("clave").value;

    const res = await fetch(apiUrl);
    const usuarios = await res.json();

    const usuario = usuarios.find(u => u.nombre === nombre && u.clave === clave);

    if (usuario) {
        alert("Inicio de sesión exitoso ❤️");
        localStorage.setItem("usuarioID", usuario.usuarioID);
        localStorage.setItem("usuarioNombre", usuario.nombre);
        window.location.href = "home.html"; // Lo manda al home
    } else {
        alert("Usuario o clave incorrectos 😔");
    }
});
