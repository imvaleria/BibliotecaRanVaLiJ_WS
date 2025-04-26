namespace BibliotecaRanVaLiJ.Models
{
    public class Usuario
    {
        public int UsuarioID { get; set; }
        public string Nombre { get; set; }
        public string Clave { get; set; }
        public string Tipo { get; set; } // Admin o Usuario
    }
}
