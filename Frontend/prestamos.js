// prestamos.js

async function cargarPrestamos() {
    const usuario = localStorage.getItem('usuarioLogueado');
    if (!usuario) {
        alert("Debe iniciar sesión.");
        window.location.href = 'login.html';
        return;
    }

    const response = await fetch(`https://localhost:7041/api/prestamos/${usuario}`);
    const prestamos = await response.json();

    const tabla = document.getElementById('tablaPrestamos');
    tabla.innerHTML = '';

    prestamos.forEach(p => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${p.tituloLibro}</td>
            <td>${new Date(p.fechaPrestamo).toLocaleDateString()}</td>
            <td>${p.estado}</td>
        `;
        tabla.appendChild(fila);
    });
}

window.onload = cargarPrestamos;
