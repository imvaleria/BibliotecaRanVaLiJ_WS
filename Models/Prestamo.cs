namespace BibliotecaRanVaLiJ.Models
{
    public class Prestamo
    {
        public int PrestamoID { get; set; } // Correspondiente a la columna PrestamoID
        public int UsuarioID { get; set; }
        public int LibroID { get; set; }
        public DateTime FechaPrestamo { get; set; }
        public string Estado { get; set; } // 'Activo' o 'Anulado'

        // Relaciones
        public Usuario Usuario { get; set; }
        public Libro Libro { get; set; }
    }
}
