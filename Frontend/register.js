const apiUrl = "https://localhost:5001/api/Usuarios"; // Asegúrate de que coincida con tu puerto backend

document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const clave = document.getElementById("clave").value;

    const nuevoUsuario = {
        nombre: nombre,
        clave: clave
    };

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });

        if (res.ok) {
            alert("Usuario registrado con éxito 💕");
            window.location.href = "login.html";
        } else {
            alert("Hubo un error al registrarse 😢");
        }
    } catch (error) {
        console.error("Error en la solicitud:", error);
        alert("Error de conexión, intenta de nuevo más tarde.");
    }
});
