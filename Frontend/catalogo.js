// catalogo.js

async function cargarLibros() {
    const response = await fetch('https://localhost:7041/api/libros'); // Cambia el puerto si es necesario
    const libros = await response.json();

    const tabla = document.getElementById('tablaLibros');
    tabla.innerHTML = ''; // Limpiar tabla

    libros.forEach(libro => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.estado}</td>
            <td>
                ${libro.estado === 'Disponible' ? `<button onclick="prestarLibro(${libro.libroID})">Prestar</button>` : 'No disponible'}
            </td>
        `;
        tabla.appendChild(fila);
    });
}

async function prestarLibro(libroID) {
    const usuario = localStorage.getItem('usuarioLogueado');
    if (!usuario) {
        alert("Debe iniciar sesión.");
        window.location.href = 'login.html';
        return;
    }

    const response = await fetch('https://localhost:7041/api/prestamos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuarioNombre: usuario,
            libroID: libroID
        })
    });

    if (response.ok) {
        alert('¡Préstamo realizado con éxito!');
        cargarLibros(); // refrescar lista
    } else {
        alert('Error al prestar el libro.');
    }
}

window.onload = cargarLibros;
