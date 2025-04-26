using Microsoft.EntityFrameworkCore;
using BibliotecaRanVaLiJ.Models;
using System.Collections.Generic;

namespace BibliotecaRanVaLiJ.Data
{
    public class BibliotecaContext : DbContext
    {
        public BibliotecaContext(DbContextOptions<BibliotecaContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Libro> Libros { get; set; }
        public DbSet<Prestamo> Prestamos { get; set; }
    }
}
