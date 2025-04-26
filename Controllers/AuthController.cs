using BibliotecaRanVaLiJ.Models;
using Microsoft.AspNetCore.Mvc;
using BibliotecaRanVaLiJ.Data;
using System.Linq;

namespace BibliotecaRanVaLiJ.Controllers
{
    public class AuthController : Controller
    {
        private readonly BibliotecaContext _context;

        public AuthController(BibliotecaContext context)
        {
            _context = context;
        }

        // Acción para la vista de Login
        public IActionResult Login()
        {
            return View();
        }

        // Acción para procesar el Login
        [HttpPost]
        public IActionResult Login(string nombre, string clave)
        {
            // Validar usuario y clave
            var usuario = _context.Usuarios.FirstOrDefault(u => u.Nombre == nombre && u.Clave == clave);

            if (usuario != null)
            {
                if (usuario.Tipo == "admin")
                {
                    // Redirigir a la página de administrador
                    return RedirectToAction("AdminHome", "Home");
                }
                else
                {
                    // Redirigir a la página de usuario normal
                    return RedirectToAction("UserHome", "Home");
                }
            }

            ViewBag.ErrorMessage = "Usuario o clave incorrectos.";
            return View();
        }
    }
}
