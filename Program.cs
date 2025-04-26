using BibliotecaRanVaLiJ.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configuración de la cadena de conexión
builder.Services.AddDbContext<BibliotecaContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BibliotecaContext")));

// Agregar servicios de controladores (API)
builder.Services.AddControllers();

var app = builder.Build();

// Configuración de la aplicación
app.UseAuthorization();
app.MapControllers();

app.Run();
