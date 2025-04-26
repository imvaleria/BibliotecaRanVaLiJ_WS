using BibliotecaRanVaLiJ.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configuraci�n de la cadena de conexi�n
builder.Services.AddDbContext<BibliotecaContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("BibliotecaContext")));

// Agregar servicios de controladores (API)
builder.Services.AddControllers();

var app = builder.Build();

// Configuraci�n de la aplicaci�n
app.UseAuthorization();
app.MapControllers();

app.Run();
