using Microsoft.AspNetCore.Mvc;

namespace BibliotecaRanVaLiJ.Controllers
{
    public class HomeController : Controller
    {
        // Acción para la vista de administrador
        public IActionResult AdminHome()
        {
            return View();
        }

        // Acción para la vista de usuario
        public IActionResult UserHome()
        {
            return View();
        }
    }
}
