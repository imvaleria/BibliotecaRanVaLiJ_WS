namespace BibliotecaRanVaLiJ.Models
{
    public class Libro
    {
        public int LibroID { get; set; } // Correspondiente a la columna LibroID
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public string Estado { get; set; } // 'Disponible' o 'Prestado'
    }
}
