// anular_prestamo.js

async function cargarPrestamosAnulables() {
    const usuario = localStorage.getItem('usuarioLogueado');
    if (!usuario) {
        alert("Debe iniciar sesión.");
        window.location.href = 'login.html';
        return;
    }

    const response = await fetch(`https://localhost:7041/api/prestamos/${usuario}`);
    const prestamos = await response.json();

    const tabla = document.getElementById('tablaAnularPrestamos');
    tabla.innerHTML = '';

    prestamos.forEach(p => {
        if (p.estado === "Activo") { // Solo los activos pueden anularse
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${p.prestamoID}</td>
                <td>${p.tituloLibro}</td>
                <td>${new Date(p.fechaPrestamo).toLocaleDateString()}</td>
                <td>${p.estado}</td>
                <td><button onclick="anularPrestamo(${p.prestamoID})">Anular</button></td>
            `;
            tabla.appendChild(fila);
        }
    });
}

async function anularPrestamo(id) {
    if (!confirm('¿Estás seguro de anular este préstamo?')) return;

    const response = await fetch(`https://localhost:7041/api/prestamos/anular/${id}`, {
        method: 'PUT'
    });

    if (response.ok) {
        alert("Préstamo anulado exitosamente.");
        cargarPrestamosAnulables();
    } else {
        alert("Error al anular el préstamo.");
    }
}

window.onload = cargarPrestamosAnulables;
